#!/bin/bash

set -e
USERNAME=$1
PASSWORD=$2
APP_DIR=$3
DEPLOY_ENV=$4
docker login -u $USERNAME -p $PASSWORD vpcpqmregistry.azurecr.io

export TAG=":$DEPLOY_ENV"

COMPOSE_FILE="${APP_DIR}/docker-compose.yml"

docker-compose -f $COMPOSE_FILE stop || echo 'Ignored'
docker-compose -f $COMPOSE_FILE rm -f || echo 'Ignored'
docker-compose -f $COMPOSE_FILE pull
docker-compose -f $COMPOSE_FILE up -d

docker logout vpcpqmregistry.azurecr.io
