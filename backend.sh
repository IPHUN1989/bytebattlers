#!/bin/bash

load_dotenv () {
  echo "Loading .env file..."
  if [ ! -f .env ]; then
    echo "Error: .env file not found."
  else
    set -a
    source .env
    set +a
    echo ".env file loaded successfully."
  fi
}

build_backend_with_maven () {
  mvn clean install -f ./backend/pom.xml
  echo "Backend is built"
}

run_backend () {
  echo "Starting backend"
  java -jar ./backend/target/bytebattlers-0.0.1-SNAPSHOT.jar
}

load_dotenv

build_backend_with_maven

run_backend

