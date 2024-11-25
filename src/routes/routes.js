import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from '../pages/loginForm';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contacts';
import Header from '../componentes/Header';

function AppRoutes() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

// Componente que controla o layout com Navbar condicional
function Layout() {
  const location = useLocation();

  // Verifica se o caminho atual é "/". Se for, oculta o Navbar.
  const hideNavbar = location.pathname === '/login';

  return (
    <>
      {/* Renderiza o Navbar apenas se o usuário não estiver na página de login */}
      {!hideNavbar && <Header />}

      {/* Conteúdo principal das rotas */}
      <div className="main-content">
        <Routes>
          {/* Rota para a página inicial (Home) */}
          <Route path="/" element={<Home/>} />

          {/* Rota para a página de Login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Outras páginas */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
