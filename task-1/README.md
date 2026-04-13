# DevOps Assignment – Task 1

## On-Premise Application Stack Deployment

---

## 🏗️ Architecture Overview

This project simulates a real-world **on-premise deployment** of a hybrid application stack consisting of:

* **MERN Stack** (Modern application)
* **LAMP Stack** (Legacy application)

All services are containerized using Docker and orchestrated using Docker Compose.
An Nginx reverse proxy is used as a single entry point for routing traffic.

### Architecture Flow

```
User
  ↓
Nginx (Reverse Proxy)
   ├── /app     → MERN Frontend (Nginx) → Node.js Backend → MongoDB
   └── /legacy  → Apache + PHP → MySQL
```

---

## ⚙️ Tech Stack

* **Docker & Docker Compose**
* **Nginx (Reverse Proxy)**
* **Node.js (Express)**
* **MongoDB**
* **Apache + PHP**
* **MySQL**

---

## 📦 Services

| Service  | Description                      |
| -------- | -------------------------------- |
| frontend | Static frontend served via Nginx |
| backend  | Node.js Express API              |
| mongo    | MongoDB database for MERN        |
| lamp     | Apache + PHP application         |
| mysql    | MySQL database for LAMP          |
| nginx    | Reverse proxy for routing        |

---

## 🚀 Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd syook-devops-assignment/task-1
```

---

### 2. Run the setup script

```
chmod +x scripts/setup.sh
./scripts/setup.sh
```

---

### 3. Verify services

```
docker compose ps
```

---

## 🌐 Access the Applications

| Application | URL                      |
| ----------- | ------------------------ |
| MERN App    | http://localhost/app/    |
| LAMP App    | http://localhost/legacy/ |

---

## 🔗 API Endpoint

```
http://localhost:3000/api/health
```

---

## 🧠 Key Design Decisions

### 1. Dockerized Multi-Service Architecture

All components are isolated into containers for portability and scalability.

### 2. Service-to-Service Communication

Containers communicate using Docker's internal DNS:

* `mongo` for MongoDB
* `mysql` for MySQL

### 3. Reverse Proxy with Nginx

Nginx acts as a single entry point and routes:

* `/app` → MERN stack
* `/legacy` → LAMP stack

### 4. Multi-Stage Build (Frontend)

Used to simulate production-grade frontend builds and keep final image lightweight.

---

## ⚠️ Challenges & Fixes

* **MongoDB connection errors** due to deprecated options → resolved by updating connection config
* **MySQL startup delay** → handled via container restart
* **YAML indentation errors** → corrected structure inside `services`
* **PHP MySQL extension missing** → installed using `docker-php-ext-install mysqli`

---

## 🔐 Best Practices Followed

* Containerized services (no host dependency)
* Clean project structure
* Minimal base images (alpine)
* Service-based networking (no localhost misuse)
* Reproducible setup via script

---

## 📁 Project Structure

```
task-1/
│
├── mern/
│   ├── backend/
│   └── frontend/
│
├── lamp/
│   └── php-app/
│
├── nginx/
│   └── nginx.conf
│
├── scripts/
│   └── setup.sh
│
└── docker-compose.yml
```

---

## ✅ Status

✔️ MERN stack deployed and connected to MongoDB
✔️ LAMP stack deployed and connected to MySQL
✔️ Nginx reverse proxy routing working
✔️ Fully containerized and reproducible setup

---

## 📌 Notes

* This setup simulates an **on-premise deployment scenario**
* Designed for clarity, modularity, and ease of testing
* Can be extended with CI/CD and cloud deployment

---
