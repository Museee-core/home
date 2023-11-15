#!/bin/bash

# 常量
CONTAINER_NAME="museee_homepage"
IMAGE_NAME="museee"

# 构建镜像
git pull origin main
echo "Starting build image..."
docker build -t museee .

# 停止并移除上一次运行的容器
if docker ps -a | grep -q $CONTAINER_NAME; then
    echo "Stopping and removing the previous container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 启动新的容器
echo "Starting the new container..."
docker run -d -p 80:3000 --name $CONTAINER_NAME $IMAGE_NAME