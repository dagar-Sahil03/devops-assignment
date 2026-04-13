# 🚀 DevOps Assignment – Syook

This repository contains the complete solution for the **DevOps Field Engineer Assignment**, covering infrastructure setup, CI/CD automation, and security hardening.

---

# 📁 Project Structure

```plaintext
.
├── task-1/   # Multi-container application setup (MERN + LAMP)
├── task-2/   # CI/CD pipeline (build, push, deploy)
├── task-3/   # Networking & security configurations
└── README.md
```

---

# 🧠 Overview

This project demonstrates a full DevOps workflow:

```plaintext
Infrastructure Setup → Containerization → CI/CD → Deployment → Security
```

---

# 🔧 Task 1 – Application Stack Deployment

## 🎯 Objective

Deploy a hybrid application stack using Docker Compose.

## 🏗️ Architecture

```plaintext
User → Nginx
      ├── /app     → MERN (Frontend + Backend + MongoDB)
      └── /legacy  → LAMP (PHP + MySQL)
```

## ⚙️ Key Steps

1. Created project structure for MERN and LAMP stacks
2. Containerized:

   * Node.js backend (Express)
   * Static frontend (Nginx)
   * PHP application (Apache)
3. Integrated:

   * MongoDB for backend
   * MySQL for PHP app
4. Configured Nginx reverse proxy for routing
5. Orchestrated all services using Docker Compose

## ✅ Outcome

* Multi-service architecture running locally
* Reverse proxy routing working (`/app`, `/legacy`)
* Databases connected successfully

---

# ⚙️ Task 2 – CI/CD Pipeline

## 🎯 Objective

Automate build, push, and deployment of the application stack.

## 🏗️ Pipeline Flow

```plaintext
Developer → GitHub Push
        ↓
GitHub Actions
        ↓
Build Docker Images
        ↓
Push to Docker Hub
        ↓
Deploy to Staging Server (SSH)
```

## ⚙️ Key Steps

1. Created Docker Hub repositories
2. Tagged and pushed images manually (validation step)
3. Implemented GitHub Actions workflow:

   * Build images
   * Push to Docker Hub
4. Added deployment stage:

   * SSH into server
   * Pull latest images
   * Restart containers
5. Created separate `task-2/docker-compose.yml` using images (not build)

## 🔁 Rollback Strategy

* Use versioned image tags instead of `latest`
* Switch to previous stable version in `docker-compose.yml`
* Redeploy using:

  ```bash
  docker compose pull
  docker compose up -d
  ```

## ✅ Outcome

* Fully automated CI/CD pipeline
* Image-based deployment (production-style)
* Staging environment updated via pipeline

---

# 🔐 Task 3 – Networking & Security

## 🎯 Objective

Secure the application in a restricted network environment with IoT communication.

## 🏗️ Architecture

```plaintext
IoT Devices → BLE Gateway → App Server → Database
```

## ⚙️ Key Implementations

### 🔥 Firewall (UFW)

* Default deny all incoming traffic
* Allowed only required ports:

  * 22 (SSH)
  * 80 / 443 (Web)
  * 1883 (IoT communication)

---

### 🔐 Nginx Security

* SSL/TLS termination (self-signed certificate)
* Security headers:

  * HSTS
  * X-Frame-Options
  * Content Security Policy
* Rate limiting to prevent abuse

---

### 🛡️ System Security

* SSH hardening (disable root login, key-based auth)
* Automatic security updates
* Log rotation configuration

---

## ✅ Outcome

* Hardened server configuration
* Controlled network access
* Secure application exposure via HTTPS

---

# 🧠 Key Learnings

* Containerized multi-stack applications
* Service-to-service communication in Docker
* CI/CD pipeline design and automation
* Secure deployment practices
* Real-world debugging and troubleshooting

---

# 🚀 Final Result

```plaintext
✔ Fully containerized application stack
✔ Automated CI/CD pipeline
✔ Secure and production-aware deployment
✔ Networking and security best practices applied
```

---

# 📌 Notes

* Task-1 focuses on infrastructure setup
* Task-2 introduces CI/CD automation
* Task-3 enhances security and networking

---

# 🙌 Conclusion

This project simulates a real-world DevOps workflow from deployment to automation and security, demonstrating practical skills required for a DevOps Field Engineer role.

---

## 🤖 Use of AI Tools

During the development of this assignment, AI tools were used as a learning aid to accelerate understanding and problem-solving.

However:

* All concepts, configurations, and workflows were carefully studied and implemented manually
* Each component (Docker, CI/CD, networking, security) was understood step-by-step
* Debugging, integration, and final implementation were performed independently

This project reflects my practical understanding of:

* Containerization and service orchestration
* CI/CD pipeline design and deployment
* Networking and security best practices

While I may not claim perfection, I am confident in my ability to:

* Explain each part of the system
* Debug issues
* Extend and improve the implementation in real-world scenarios
