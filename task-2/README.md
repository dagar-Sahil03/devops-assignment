# DevOps Assignment – Task 2

## CI/CD Pipeline Implementation

---

## 🏗️ Overview

This task implements a complete CI/CD pipeline for the multi-service application stack from Task 1.

The pipeline automates:

* Building Docker images
* Pushing images to Docker Hub
* Deploying the application to a staging environment

---

## ⚙️ Tools Used

* GitHub Actions (CI/CD)
* Docker & Docker Hub
* Docker Compose
* SSH-based deployment

---

## 🔄 Pipeline Stages

### 1. Build Stage

* Builds Docker images for:

  * Backend (Node.js)
  * Frontend (Nginx)
  * LAMP (PHP + Apache)

---

### 2. Push Stage

* Authenticates with Docker Hub
* Pushes images:

  * sahildagar/mern-backend:latest
  * sahildagar/mern-frontend:latest
  * sahildagar/lamp-app:latest

---

### 3. Deploy Stage

* Connects to staging server via SSH
* Pulls latest images
* Restarts containers using Docker Compose

---

## 📊 CI/CD Pipeline Flow

```plaintext
Developer pushes code → GitHub (main branch)
        ↓
GitHub Actions triggered
        ↓
Checkout code
        ↓
Login to Docker Hub
        ↓
Build Docker images
        ↓
Push images to Docker Hub
        ↓
SSH into staging server
        ↓
docker compose pull
        ↓
docker compose up -d
        ↓
Updated application running
```

---

## 🚀 Deployment Strategy

* Uses Docker Compose for service orchestration
* Pulls latest images from Docker Hub
* Ensures consistent deployment across environments

---

## 🔁 Rollback Strategy

In case of deployment failure:

1. Identify last stable image version
2. Update `docker-compose.yml` with previous tag
3. Run:

   ```
   docker compose pull
   docker compose up -d
   ```

---

## 💡 Improvements (Production Ready)

* Use versioned image tags instead of `latest`
* Implement health checks before deployment
* Add automated testing stage
* Use AWS ECR for private image storage
* Implement blue-green deployment strategy

---

## 📁 Structure

```plaintext
task-2/
├── docker-compose.yml
├── README.md
```

---

## ✅ Status

✔️ CI/CD pipeline implemented
✔️ Docker images built and pushed automatically
✔️ Automated deployment to staging server
✔️ Rollback strategy defined

---
