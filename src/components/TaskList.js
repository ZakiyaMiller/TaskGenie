import './styles.css';
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ deleteTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!tasks.length) {
    return <div>No tasks</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;