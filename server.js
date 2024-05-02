const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'S15935746',
  database: 'tasks'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

// Create
app.post('/tasks', (req, res) => {
  let task = req.body;

  // Check if dueDate is empty and set it to null
  if (task.dueDate === '') {
    task.dueDate = null;
  }

  const query = 'INSERT INTO tasks SET ?';
  db.query(query, task, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Read
app.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Update
app.put('/tasks/:id', (req, res) => {
  const task = req.body;
  const query = 'UPDATE tasks SET ? WHERE id = ?';
  db.query(query, [task, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


// Delete
app.delete('/tasks/:id', (req, res) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, req.params.id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});