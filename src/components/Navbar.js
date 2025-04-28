import React from 'react';
import './Navbar.css'; // We can create a small css file later if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WakaSend</div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#contact" className="button">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;