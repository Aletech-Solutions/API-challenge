# Backend API challenge



## Install

    npm install

## Run the app

    npm run sart

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /listing`

    curl --location --request GET 'http://localhost:8002/listing' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' 


`POST /listing`
    
    curl --location 'http://localhost:8002/listing' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' \
    --data '{"id":"1", "price":25, "title":"potato"}'

    
`DELETE /listing`
    
    curl --location --request DELETE 'http://localhost:8002/listing?id=1' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' 
