import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <h2>Welcome to TaskGenie</h2>

      <div className="button-container special-container">
        <Link className="button" to="/profile">Profile</Link>
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/tasks">Manage Tasks</Link>
      </div>
      <h4>Getting Started</h4>
      <h6 className='heading'>Sign Up or Log In:</h6>
      <h6>New to TaskGenie? Click on the 'Sign Up' button to create an account or 'Log In' if you're already a member.</h6>

      <h6 className='heading'>Manage Your Tasks:
      </h6>
      <h6> Once logged in, start adding your tasks using the 'Add Task' feature. Whether it's personal errands or work-related assignments, TaskGenie has you covered.</h6>
      <h6 className='heading'>Stay Organized:</h6>
      <h6> Keep track of all your tasks effortlessly. Need to remove a task? Simply hit the delete button next to it.</h6>

      <h6 className='heading'>Ready to get started? Sign up or log in now to experience the power of TaskGenie!
      </h6>
      
      <footer>
        <p>&copy; 2024 TaskGenie</p>
      </footer>
    </div>
    
  );
};

export default Home;