#!/bin/bash
git pull origin main
docker build -t museee .
docker run -d -p 80:3000 museee
