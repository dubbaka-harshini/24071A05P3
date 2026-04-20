const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'dfvoeuygq7024tdfbhdvlwdg204t587';

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store student data
let students = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B' }
];

// Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token.' });
    }
    req.user = user;
    next();
  });
}

// LOGIN: POST /login - to authenticate and issue a token
app.post('/login', (req, res) => {
  // Use optional chaining so that if req.body is undefined, it won't crash
  const username = req.body?.username || 'testuser';
  const user = { name: username };

  const accessToken = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ accessToken });
});

// READ ALL: GET /students
app.get('/students', authenticateToken, (req, res) => {
  res.json(students);
});

// READ ONE: GET /students/:id
app.get('/students/:id', authenticateToken, (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});

// CREATE: POST /students
app.post('/students', authenticateToken, (req, res) => {
  const { name, age, grade } = req.body;

  if (!name || !age || !grade) {
    return res.status(400).json({ error: 'Name, age, and grade are required' });
  }

  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1, // Generate next ID
    name,
    age,
    grade
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// UPDATE: PUT /students/:id
app.put('/students/:id', authenticateToken, (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name, age, grade } = req.body;

  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Update fields if provided in the body
  if (name) students[studentIndex].name = name;
  if (age) students[studentIndex].age = age;
  if (grade) students[studentIndex].grade = grade;

  res.json(students[studentIndex]);
});

// DELETE: DELETE /students/:id
app.delete('/students/:id', authenticateToken, (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const deletedStudent = students.splice(studentIndex, 1);
  res.json({ message: 'Student deleted successfully', deletedStudent: deletedStudent[0] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
