import React, { useState } from 'react';
import './components/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // check if dueDate is empty and set it to null
    let dueDate = task.dueDate;
    if (dueDate === '') {
      dueDate = null;
    }

    const id = Math.max(...tasks.map((task) => task.id), 0) + 1;
  
    // add the task to the server
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...task, dueDate }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Log the added task
      // update the local state
      setTasks([...tasks, data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Log the deleted task
      // update the local state
      setTasks(tasks.filter((task) => task.id !== id));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  
  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <h5 className='leftalign'>To Do:</h5>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
};

export default Tasks;