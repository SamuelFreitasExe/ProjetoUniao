import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">

        <a className="navbar-brand" href="/#">
          <img src=" " alt="" height="28" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/features" className="nav-link" aria-current="page">Features</Link>
            </li>
            <li className="nav-item">
            <Link to="/testemunho" className="nav-link" aria-current="page">Produtos</Link>
            </li>

            <li className="nav-item">
            <Link to="/contato" className="nav-link" aria-current="page">Contato</Link>
            </li>
          </ul>
        </div>

    </div>
  </nav>;
  }

export default Menu;