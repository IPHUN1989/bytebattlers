#!/bin/bash

installing_with_npm () {
  cd ./frontend
  npm install
  cd ..
}


building_frontend () {
  echo "Frontend is building"
  npm --prefix ./frontend/ run build
}

running_static_webserver () {
  echo "Webserver is running"
  npm --prefix ./frontend/ run preview
}

installing_with_npm

building_frontend

running_static_webserver
