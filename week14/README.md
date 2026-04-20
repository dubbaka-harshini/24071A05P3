# 📧 Todo Email Alert App (React + Node.js)

## 🚀 Project Overview

This project is a full-stack application that allows users to create tasks (todos) and receive email notifications using a backend powered by Node.js and Nodemailer.

---

## 🛠️ Step 1: Initialize Project & Install Dependencies

### Frontend (React with Vite)

```bash
npm create vite@latest . --template react
npm install react react-dom bootstrap
```

### Backend (Node.js)

```bash
npm init -y
npm install express nodemailer cors dotenv
```

---

## ⚙️ Step 2: Build Backend Server (`server.js`)

* Used **Express** to create API endpoints
* Enabled **CORS** to allow frontend-backend communication
* Used **dotenv** to manage environment variables securely
* Configured **Nodemailer** with Gmail SMTP

### Features:

* POST route: `/send-email`
* Accepts:

  * Email
  * Task
* Sends email notification using Nodemailer
* Runs on **Port 5000**

---

## 🔐 Step 3: Setup Environment Variables (`.env`)

Create a `.env` file in the backend folder:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

👉 Access securely in code using:

```javascript
process.env.EMAIL_USER
process.env.EMAIL_PASS
```

---

## 💻 Step 4: Build React Frontend (`src/App.jsx`)

### Features:

* Uses **useState hooks** for:

  * Task input
  * Email input
  * Todo list

### Functions:

* `addTodo()`

  * Adds task to UI
  * Calls backend API

* `sendEmailAlert()`

  * Sends POST request to backend

```bash
http://localhost:5000/send-email
```

---

## ▶️ Step 5: Run the Project

Since this is a full-stack app, run both servers:

### Start Backend:

```bash
node server.js
```

### Start Frontend:

```bash
npm run dev
```

---

## 🧪 How It Works

1. User enters a task and email
2. Task is added to UI
3. Backend receives request
4. Email is sent using Nodemailer

---

## 📌 Notes

* Make sure to use **App Password** for Gmail (not your actual password)
* Ensure `.env` file is not pushed to GitHub (`.gitignore`)
* Backend must be running before frontend sends requests

---

## 🎯 Tech Stack

* Frontend: React, Vite, Bootstrap
* Backend: Node.js, Express
* Email Service: Nodemailer (Gmail SMTP)

---

## 📸 Future Improvements

* Add database (MongoDB)
* Add authentication
* Improve UI/UX
* Add task completion tracking

---





<img width="1875" height="846" alt="{200705B7-2ED4-4317-8476-8F15B5632D2A}" src="https://github.com/user-attachments/assets/da407b69-f1b4-407f-982b-487a565eef5c" />



<img width="1825" height="724" alt="{2F4A6B09-35E3-4083-A755-695EA71C0DF5}" src="https://github.com/user-attachments/assets/f6cc24e1-d41b-4ea6-9127-7a73601eed33" />

