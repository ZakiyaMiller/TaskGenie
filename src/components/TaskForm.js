import './styles.css';
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { title, description, dueDate, priority };

    // Create
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        addTask(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Reset form fields
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="task-title" className="form-label">Title:</label>
      <input type="text" id="task-title" value={title} onChange={(e) => setTitle(e.target.value)} required className="form-input" />
      <label htmlFor="task-description" className="form-label">Description:</label>
      <textarea id="task-description" value={description} onChange={(e) => setDescription(e.target.value)} rows="2" className="form-input"></textarea>
      <label htmlFor="task-due-date" className="form-label">Due Date:</label>
      <input type="date" id="task-due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-input" />
      <label htmlFor="task-priority" className="form-label">Priority:</label>
      <select id="task-priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="form-input">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="form-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
