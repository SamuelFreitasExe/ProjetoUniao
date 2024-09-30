import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './menu.css';

function Menu() {
  const [isTransparent, setIsTransparent] = useState(false);

  // Função para detectar o scroll e alterar a navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  // Adiciona e remove o event listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-md navbar-dark ${isTransparent ? 'transparent' : ''}`}>
      <Logo />
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link" aria-current="page">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/projetos" className="nav-link" aria-current="page">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link to="/relatorio" className="nav-link" aria-current="page">Transparência</Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" aria-current="page">Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
