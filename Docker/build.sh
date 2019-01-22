#!/bin/bash
set -e

TAG=$1
export TAG=":$TAG"
COMPOSE_FILE="${PWD}/Docker/docker-compose.yml"

docker-compose -f $COMPOSE_FILE build
docker-compose -f $COMPOSE_FILE push

if [ "$TAG" != "latest" ]; then
    docker tag vpcpqmregistry.azurecr.io/matadorsuite-web${TAG} vpcpqmregistry.azurecr.io/matadorsuite-web:dev
    docker push vpcpqmregistry.azurecr.io/matadorsuite-web:dev
fi

