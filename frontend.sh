#!/bin/bash


building_frontend () {
  echo "Frontend is building"
  npm --prefix ./frontend/ run build
}

running_static_webserver () {
  echo "Webserver is running"
  npm --prefix ./frontend/ run preview
}

building_frontend

running_static_webserver
