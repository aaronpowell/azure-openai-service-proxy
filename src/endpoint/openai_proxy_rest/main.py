import os
import json
import base64
import binascii
import logging
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import ResponseValidationError
from openai_async import OpenAIConfig, OpenAIManager as oai, OpenAIChat


logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

GPT_MODEL_NAME = "gpt-3.5-turbo-0613"
OPENAI_API_VERSION = "2023-07-01-preview"

app = FastAPI()


@app.exception_handler(ResponseValidationError)
async def validation_exception_handler(request, exc):
    """validation exception handler"""
    print(f"Caught Validation Error: {exc}")
    return JSONResponse(
        content={"message": "Response validation error"}, status_code=400
    )


@app.post("/api/oai_prompt", status_code=200)
async def get_videos(chat: OpenAIChat, request: Request) -> oai.OpenAIChatCompletion:
    """query vector datastore and return n results"""

    def get_user_token(headers) -> str | None:
        """get the userId from the auth token"""
        if "x-ms-client-principal" in headers:
            try:
                auth_base64 = headers.get("x-ms-client-principal")
                auth = json.loads(base64.b64decode(auth_base64))
                if "userId" in auth:
                    return auth["userId"]
            except json.decoder.JSONDecodeError:
                return None
            except binascii.Error:
                return None
            except TypeError:
                return None

        return None

    # user_token = get_user_token(request.headers)

    # if not user_token:
    #     raise HTTPException(status_code=401, detail="Not authorized")

    return await app.state.openai_mgr.call_openai_chat(chat)


@app.on_event("startup")
async def startup_event():
    """startup event"""

    openai_key = os.environ["AZURE_OPENAI_API_KEY"]

    try:
        openai_endpoint = os.environ["AZURE_OPENAI_ENDPOINT"]
        azure_openai_model_deployment_name = os.getenv(
            "AZURE_OPENAI_MODEL_DEPLOYMENT_NAME", "gpt-35-turbo"
        )
    except KeyError:
        print(
            "Please set the environment variables AZURE_OPENAI_API_KEY and"
            " AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_MODEL_DEPLOYMENT_NAME"
            " and AZURE_OPENAI_EMBEDDING_MODEL_DEPLOYMENT_NAME"
        )
        exit(1)

    openai_config = OpenAIConfig(
        openai_key=openai_key,
        openai_endpoint=openai_endpoint,
        openai_version=OPENAI_API_VERSION,
        model_deployment_name=azure_openai_model_deployment_name,
        gpt_model_name=GPT_MODEL_NAME,
    )

    app.state.openai_mgr = oai(openai_config=openai_config)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=5500)
