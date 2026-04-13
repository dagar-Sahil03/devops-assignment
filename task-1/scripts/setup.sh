#!/bin/bash

echo "🚀 Starting Syook DevOps Stack..."

# Stop old containers
docker compose down

# Build and start
docker compose up --build -d

echo "✅ Stack is up!"

echo "Access:"
echo "MERN App: http://localhost/app/"
echo "LAMP App: http://localhost/legacy/"
