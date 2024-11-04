import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
}

export default Navbar;
