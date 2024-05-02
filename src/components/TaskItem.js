import './styles.css';
import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  if (!task) {
    return <div>No task</div>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      fetch(`http://localhost:3001/tasks/${task.id}`, { 
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        deleteTask(task.id);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  
  return (
    <li className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <div className="task-actions">
        <button className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;