# CVTech Mini Recruitment Platform

[![Angular](https://img.shields.io/badge/Angular-16.2.16-red)](https://angular.io/)

---

## 🚀 Overview

A streamlined recruitment platform built with Angular that enables efficient CV management and candidate hiring processes. CVTech provides a modern interface for managing candidate CVs, handling hiring workflows, and maintaining recruitment data.

---

## ✨ Features

### 📋 CV Management
* **Browse & Filter** - Comprehensive CV listings with advanced filtering
* **Detailed Profiles** - In-depth candidate information viewing
* **Hiring Workflow** - Streamlined candidate hiring process
* **Data Management** - Easy CV deletion and updates
* **Smart Navigation** - Intuitive movement between views

### 🔔 Real-time Notifications
* Integrated notification system using **ngx-toaster**
* Success confirmations for hiring actions
* Error alerts for failed operations

### 🛡️ Robust Error Handling
* Graceful fallback to placeholder data
* Clear error messaging
* Continuous system availability

### 🎯 Advanced UI Components
* Dynamic header navigation
* Image slideshow with Observable integration
* Custom image handling with defaultImage pipe
* Responsive design for all screen sizes

---

## 📊 Data Structure

Each CV record contains:
* Unique identifier
* Full name (First name and Last name)
* Age
* CIN (National ID)
* Job title
* Profile image

---

## 🔧 Technical Details

### API Integration
* RESTful API connectivity
* Automatic fallback to FakeCvs service
* Swagger API 👉 **[Swagger API Explorer](https://apilb.tridevs.net/explorer/)**

### Technologies Used
```json
{
  "framework": "Angular 16.2.16",
  "notifications": "ngx-toaster"
}
```
## 🚀 Setup and Launch

```bash
# Install dependencies
npm install

# Start development server
ng serve
```
---

<div align="center">
  <sub>Exercise completed as part of Angular course</sub>
</div>
