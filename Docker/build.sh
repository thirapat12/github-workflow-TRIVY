#!/bin/bash
set -e

TAG=$1
BUILD_ENV=$2
export BUILD_ENV="$BUILD_ENV"
COMPOSE_FILE="${PWD}/Docker/docker-compose.yml"
docker-compose -f $COMPOSE_FILE build
docker-compose -f $COMPOSE_FILE push

if [ $BUILD_ENV != "prod"] &&  [$TAG != "latest" ]; then
    export TAG=":$TAG"
    docker tag vpcpqmregistry.azurecr.io/matadorsuite-web${TAG} vpcpqmregistry.azurecr.io/matadorsuite-web:latest
    docker push vpcpqmregistry.azurecr.io/matadorsuite-web:latest
fi

