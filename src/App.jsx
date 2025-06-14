import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import React, { useState } from 'react';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const validUsers = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
    { username: 'john', password: 'john123' },
    { username: 'demo', password: 'demo' }
  ];

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} validUsers={validUsers} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My SPA Application</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </nav>

        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />              
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/" />} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App