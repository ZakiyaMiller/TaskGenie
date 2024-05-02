import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Tasks from './Tasks';



const App = () => {
  return (
    <Auth0ProviderWithHistory>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />

      </Routes>
    </Auth0ProviderWithHistory>
  );
};

export default App;
