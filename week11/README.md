## ▶️ Step 1: Start the Server

Run the following command to start your Node.js server:

```powershell
node server.js
```

You should see a message saying:
`Server is running on http://localhost:3000`

---

## 🧪 Step 2: How to Test the Application (using Postman or cURL)

Because this application uses JWT Authentication, you cannot just open the URLs in your browser. You need to log in first to get an access token, and then pass that token to access the other routes.

---

### 1️⃣ Login to Get a Token

Make a **POST** request to:

```
http://localhost:3000/login
```

👉 No body is required — it will create a dummy user automatically.

You will receive a response like this:

```json
{
  "accessToken": "eyJh... (a very long string) ...xw"
}
```

📌 Copy the `accessToken` value.

---

### 2️⃣ Access the Protected Routes

Now you can make requests to any of the student endpoints (**GET, POST, PUT, DELETE**), but you must include the token in the request headers.

**Header Configuration:**

```
Key: Authorization
Value: Bearer YOUR_ACCESS_TOKEN_HERE
```

⚠️ Replace `YOUR_ACCESS_TOKEN_HERE` with the token you copied.
Make sure to include the word **Bearer** followed by a space.

---

### 📌 Example: Get All Students

Make a **GET** request to:

```
http://localhost:3000/students
```

Include the Authorization header.

**Response:**

```json
[
  { "id": 1, "name": "John Doe", "age": 20, "grade": "A" },
  { "id": 2, "name": "Jane Smith", "age": 22, "grade": "B" }
]
```


<img width="1824" height="905" alt="{C26B08E0-B130-49E1-B1A2-780D24B79FC4}" src="https://github.com/user-attachments/assets/35591836-13aa-41c2-89d0-2c8480b8d548" />



<img width="1837" height="939" alt="{09FB0EA7-BE47-436C-93FB-E6A791D054E7}" src="https://github.com/user-attachments/assets/717dfdef-224e-4231-88b3-a68f3c5f6b4d" />


<img width="1851" height="887" alt="{AC5E734B-4349-47E3-B545-F6093230AC57}" src="https://github.com/user-attachments/assets/6e9ae185-02b7-4644-ac4a-2cffa408dd0e" />

