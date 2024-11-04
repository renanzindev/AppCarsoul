import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../pages/loginForm';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contacts';
import Navbar from '../componentes/navbar';

function AppRoutes() {
    return (
      <Router>
        <Routes>
          {/* Tela inicial com LoginForm e o carrossel */}
          <Route 
            path="/" 
            element={
              <>
                <LoginForm />
                <div className="carousel-container">
                  <carrossel />
                </div>
              </>
            } 
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
export default AppRoutes;
