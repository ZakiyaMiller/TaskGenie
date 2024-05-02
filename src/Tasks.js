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
  
    const newTask = { id, ...task, dueDate };
  
    // add the task 
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        window.location.reload();
      }
    })
    .then(data => {
      console.log(data);  // Log the added task

      // update the local state with the task object returned from the server
      //setTasks(prevTasks => [...prevTasks, data]);

      alert('Task added successfully');
      window.location.reload();
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
  
      // Update the state of tasks after a task is deleted
      setTasks(tasks.filter(task => task.id !== id));
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