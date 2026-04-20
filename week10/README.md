# 📚 Student API (Express.js)

## 🚀 Setup

Run the following commands:

```bash
npm init -y
npm install express
```

---

## 🛠️ Create Server

Create a file named `server.js` and implement your Express server.

---

## ▶️ Run the Server

```bash
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints (Test using Postman)

### 1️⃣ Get All Students

* **Method:** GET
* **URL:**

```
http://localhost:3000/students
```

---

### 2️⃣ Get Single Student

* **Method:** GET
* **URL:**

```
http://localhost:3000/students/1
```

---

### 3️⃣ Create New Student

* **Method:** POST
* **URL:**

```
http://localhost:3000/students
```

* **Body (JSON):**

```json
{
  "name": "Alice Bob",
  "age": 21,
  "grade": "A+"
}
```

---

### 4️⃣ Update Student

* **Method:** PUT
* **URL:**

```
http://localhost:3000/students/1
```

* **Body (JSON):**

```json
{
  "grade": "A+"
}
```

---

### 5️⃣ Delete Student

* **Method:** DELETE
* **URL:**

```
http://localhost:3000/students/1
```

---

## 🧪 Testing

Use tools like **Postman** to test all endpoints.

---

## 📌 Notes

* Ensure server is running before testing
* Use `Content-Type: application/json` for POST/PUT requests

---

<img width="1873" height="1033" alt="{B0F607E7-87A1-4A59-9144-47BD1525548E}" src="https://github.com/user-attachments/assets/d0059d92-2838-49ff-9d1c-ebf78e3edb8b" />

<img width="1888" height="950" alt="{2EFCE785-8CB4-4A46-B6F3-5BDA833067E2}" src="https://github.com/user-attachments/assets/37d39fc1-da10-4a20-9c18-f6c5d4076967" />

<img width="1819" height="936" alt="{97622E6B-4410-4337-82E7-FBD8A574BDD3}" src="https://github.com/user-attachments/assets/fc50c6b2-4e3e-405a-a1ac-c651552de93e" />


<img width="1861" height="959" alt="{ABD62528-65DB-4B23-B1EE-DE3A8C6342CA}" src="https://github.com/user-attachments/assets/e1e65a98-727a-4f28-bb5e-acadce83e8a2" />



