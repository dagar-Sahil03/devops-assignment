# DevOps Assignment – Task 3

## Networking & Security Configuration

---

## 🏗️ Network Architecture

```plaintext
        [ IoT Devices ]
              |
           (BLE)
              |
        [ BLE Gateway ]
              |
     TCP/UDP (e.g. 1883 MQTT)
              |
        [ App Server ]
         (Docker Stack)
       /        |       \
   Nginx    Backend    LAMP
     |          |         |
  HTTPS      Mongo     MySQL
   443        27017     3306

         NTP (UDP 123)
```

---

## 🌐 Network Flow & Protocols

| Component         | Protocol   | Port        |
| ----------------- | ---------- | ----------- |
| IoT → Gateway     | BLE        | Bluetooth   |
| Gateway → App     | TCP/UDP    | 1883 (MQTT) |
| User → Nginx      | HTTP/HTTPS | 80 / 443    |
| Backend → MongoDB | TCP        | 27017       |
| Backend → MySQL   | TCP        | 3306        |
| Time Sync         | UDP        | 123 (NTP)   |

---

## 🔒 Firewall Configuration (UFW)

Only required ports are allowed, everything else is blocked.

### 📜 firewall.sh

```bash
#!/bin/bash

ufw default deny incoming
ufw default allow outgoing

# Allow SSH
ufw allow 22

# Allow HTTP/HTTPS
ufw allow 80
ufw allow 443

# Allow IoT Gateway communication (example MQTT)
ufw allow 1883

# Enable firewall
ufw enable

ufw status
```

---

## 🔐 Nginx Security Configuration

### Features Implemented:

* SSL/TLS (self-signed)
* Rate limiting
* Security headers

---

### 📜 nginx-secure.conf

```nginx
events {}

http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

    server {
        listen 443 ssl;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;

        # Security Headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header Content-Security-Policy "default-src 'self'";

        # Rate limiting
        location / {
            limit_req zone=one burst=20;

            proxy_pass http://frontend;
        }

        location /legacy/ {
            proxy_pass http://lamp;
        }
    }
}
```

---

## 🔑 SSL Certificate (Self-Signed)

Generate using:

```bash
openssl req -x509 -nodes -days 365 \
-newkey rsa:2048 \
-keyout key.pem \
-out cert.pem
```

---

## 🛡️ Security Checklist

### 🔐 SSH Hardening

* Disable root login
* Use SSH keys instead of passwords
* Change default SSH port (optional)

---

### 🔄 Automatic Security Updates

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

---

### 📜 Log Rotation

* Use logrotate for system and application logs
* Prevent disk space issues

---

### 🔥 Firewall Best Practices

* Default deny all incoming traffic
* Only allow required ports
* Restrict database access to internal network only

---

### 🧠 Additional Recommendations

* Use fail2ban for brute-force protection
* Enable monitoring (Prometheus/Grafana)
* Use private networks for database services

---

## ✅ Summary

✔️ Secure network architecture defined
✔️ Firewall rules implemented
✔️ Nginx hardened with SSL and headers
✔️ Security best practices documented

---
