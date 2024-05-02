import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <h2>Welcome to TaskGenie</h2>
      <p>This is the home page.</p>
      <div className="button-container special-container">
        <Link className="button" to="/profile">Profile</Link>
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/tasks">Manage Tasks</Link>
      </div>
    </div>
  );
};

export default Home;