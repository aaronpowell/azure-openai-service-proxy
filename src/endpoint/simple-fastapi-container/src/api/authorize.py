""" Authorize a user to access playground based specific time bound event."""

import string
import logging
from datetime import datetime, timedelta
import pytz

from pydantic import BaseModel

from azure.data.tables import TableServiceClient
from azure.data.tables.aio import TableClient
from azure.core.exceptions import (
    HttpResponseError,
    ServiceRequestError,
    ClientAuthenticationError,
)

CACHE_EXPIRY_MINUTES = 10
PARTITION_KEY = "playground"
TABLE_NAME = "playgroundauthorization"

logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)


class AuthorizeResponse(BaseModel):
    """Response object for Authorize class."""

    is_authorized: bool
    max_token_cap: int
    event_name: str
    event_url: str
    event_url_text: str

    def __init__(
        self,
        is_authorized: bool,
        max_token_cap: int,
        event_name: str,
        event_url: str,
        event_url_text: str,
    ) -> None:
        super().__init__(
            is_authorized=is_authorized,
            max_token_cap=max_token_cap,
            event_name=event_name,
            event_url=event_url,
            event_url_text=event_url_text,
        )


class Authorize:
    """Authorizes a user to access a specific time bound event."""

    class CacheItem:
        """Cache item for Authorize class."""

        def __init__(
            self,
            *,
            event_code: str,
            event_name: str,
            start_utc: datetime,
            end_utc: datetime,
            max_token_cap: int,
            event_url: str | None = None,
            event_url_text: str | None = None,
        ):
            self.event_code = event_code
            self.event_name = event_name
            self.start_utc = start_utc
            self.end_utc = end_utc
            self.max_token_cap = max_token_cap
            self.event_url = event_url
            self.event_url_text = event_url_text

    def __init__(self, connection_string) -> None:
        self.connection_string = connection_string
        self.event_cache = []
        self.cache_expiry = None

        # Create events playground authorization table if it does not exist
        try:
            table_service_client = TableServiceClient.from_connection_string(
                conn_str=self.connection_string
            )

            table_service_client.create_table_if_not_exists(table_name=TABLE_NAME)
        except Exception as exception:
            logging.error("General exception creating table: %s", str(exception))
            raise

    def __is_event_authorised_cached(self, event_code: str) -> AuthorizeResponse | None:
        """checks if event code is in the cache"""
        if self.cache_expiry:
            if datetime.now() > self.cache_expiry:
                self.event_cache = []
                self.cache_expiry = None
            else:
                # look for event_code in the self.event_cache list of dictionaries
                for event in self.event_cache:
                    if event_code in event:
                        cache_item = event.get(event_code)
                        start_utc = cache_item.start_utc
                        end_utc = cache_item.end_utc
                        max_token_cap = cache_item.max_token_cap
                        event_name = cache_item.event_name
                        event_url = cache_item.event_url
                        event_url_text = cache_item.event_url_text

                        current_time_utc = datetime.now(pytz.utc)
                        return AuthorizeResponse(
                            is_authorized=start_utc <= current_time_utc <= end_utc,
                            max_token_cap=max_token_cap,
                            event_name=event_name,
                            event_url=event_url,
                            event_url_text=event_url_text,
                        )

        return None

    async def __is_event_authorized(self, event_code: str) -> AuthorizeResponse | None:
        """checks if event code is in the cache, failing that get from table"""
        # get event info from table
        # add to cache dictionary object keyed by event code
        # check if the event is active and within the start and end times

        # check if event_code is in the cache
        cached = self.__is_event_authorised_cached(event_code)
        if cached is not None:
            return cached

        async with TableClient.from_connection_string(
            conn_str=self.connection_string, table_name=TABLE_NAME
        ) as table_client:
            # check if event_code is in the cache
            authorised_response = self.__is_event_authorised_cached(event_code)
            if authorised_response is not None:
                return authorised_response

            try:
                query_filter = (
                    f"PartitionKey eq '{PARTITION_KEY}' and "
                    f"RowKey eq '{event_code}' and Active eq true"
                )
                # get all columns from the table
                queried_entities = table_client.query_entities(
                    query_filter=query_filter,
                    select=[
                        "*",
                    ],
                )

                async for entity in queried_entities:
                    start_utc = entity.get("StartUTC", pytz.utc.localize(datetime.max))
                    end_utc = entity.get("EndUTC", pytz.utc.localize(datetime.min))
                    max_token_cap = entity.get("MaxTokenCap", 512)
                    event_name = entity.get("EventName", "")
                    event_url = entity.get("EventUrl", "")
                    event_url_text = entity.get("EventUrlText", "")

                    max_token_cap = max_token_cap if max_token_cap > 0 else 512

                    current_time_utc = datetime.now(pytz.utc)

                    is_authorized = start_utc <= current_time_utc <= end_utc

                    if not is_authorized:
                        return None

                    # set cache_expiry to current time plus CACHE_EXPIRY_MINUTES minutes
                    if not self.cache_expiry:
                        self.cache_expiry = datetime.now() + timedelta(
                            minutes=CACHE_EXPIRY_MINUTES
                        )

                    # create a cache item
                    cache_item = Authorize.CacheItem(
                        event_code=event_code,
                        start_utc=start_utc,
                        end_utc=end_utc,
                        max_token_cap=max_token_cap,
                        event_name=event_name,
                        event_url=event_url,
                        event_url_text=event_url_text,
                    )

                    # Add the cach item to the event_cache list of dictionaries
                    self.event_cache.append({event_code: cache_item})

                    return AuthorizeResponse(
                        is_authorized=is_authorized,
                        max_token_cap=max_token_cap,
                        event_name=event_name,
                        event_url=event_url,
                        event_url_text=event_url_text,
                    )

            except ClientAuthenticationError as auth_error:
                logging.error("ClientAuthenticationError: %s", auth_error.message)
                return None

            except ServiceRequestError as service_request_error:
                logging.error("ServiceResponseError: %s", service_request_error.message)
                return None

            except HttpResponseError as response_error:
                logging.error("HttpResponseError: %s", response_error.message)
                return None

            except Exception as exception:
                logging.error(
                    "General exception in event_authorized: %s", str(exception)
                )
                return None

        return None

    async def authorize(self, event_code: str) -> AuthorizeResponse | None:
        """Authorizes a user to access a specific time bound event."""

        # check event_code is not empty
        if not event_code:
            return None

        if not 6 < len(event_code) < 20:
            return None

        # check event code does not user any of the azure table reserved characters for row key
        if any(c in event_code for c in ["\\", "/", "#", "?", "\t", "\n", "\r"]):
            return None

        # check event code is only printable characters
        if not all(c in string.printable for c in event_code):
            return None

        return await self.__is_event_authorized(event_code)
