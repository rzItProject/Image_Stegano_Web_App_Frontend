#!/bin/bash

# Vérifiez si au moins deux arguments ont été fournis
if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <image_name:tag> <port> [Dockerfile]"
  exit 1
fi

# Nom de l'image avec tag
IMAGE_NAME=$1

# Port sur lequel exposer l'application
PORT=$2

# Dockerfile (optionnel, par défaut à "Dockerfile")
DOCKERFILE=${3:-Dockerfile}

# Construisez l'image
docker build -t $IMAGE_NAME -f $DOCKERFILE .

# Lancez le conteneur
docker run -d --rm -p $PORT:$PORT $IMAGE_NAME
