# OpenAI proxy service

The solution consists of two parts; the proxy service and a web client with a similar look and feel to the official Azure OpenAI Playground. The proxy service is a Python FastAPI app that proxies requests to the OpenAI API.

## Setup

This repo is set up for deployment on Azure Container Apps using the configuration files in the `infra` folder.

### Prerequisites

1. An Azure subscription
2. Deployed Azure OpenAI Models

### Required software

Tested on Windows, macOS and Ubuntu 22.04.

Install:

1. [VS Code](https://code.visualstudio.com/)
2. [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. [Docker](https://www.docker.com/products/docker-desktop)

## Deploying

The recommended way to deploy this app is with Dev Containers. Install the [VS Code Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) and Docker, open this repository in a container and you'll be ready to go.

1. Clone the repo:

    ```shell
    git clone https://github.com/gloveboxes/azure-openai-service-proxy.git
    ```

1. Using VS Code, open the `azure-openai-service-proxy/src/endpoint/simple-fastapi-container` folder:

1. You will be prompted to `Reopen in Container`, click the button to do so.

1. Login to Azure:

    ```shell
    azd auth login
    ```

1. Provision and deploy all the resources:

    ```shell
    azd up
    ```

    It will prompt you to provide an `azd` environment name (like "openai-proxy"), select a subscription from your Azure account, and select a location (like "eastus"). Then it will provision the resources in your account and deploy the latest code. If you get an error with deployment, changing the location can help, as there may be availability constraints for some of the resources.
    
    On completion, the following Azure resources will be provisioned:

    ![Azure OpenAI Playground experience](../media/azure_resources.png)

1. When `azd` has finished deploying you'll see a link to the Azure Resource Group created for the solution.
1. To make any changes to the app code, just run:

    ```shell
    azd deploy
    ```
