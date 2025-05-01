import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WakaSend</div>
      <div className="nav-box">
        <a href="#features">Features</a>
        <a href="#download">How It Works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="button">Get Started</a>
      
    </nav>
  );
}

export default Navbar;
