import React from 'react';

function Home(){
    return <section id="home">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma de cadastro simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus produtos em um único lugar.</h4>
                    <a href="/app/novaconta" className="btn btn-dark btn-lg btn-home">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-home">Fazer Login</a>
                    <a href="/app/novapagina.jsx" className="btn btn-outline-light btn-lg btn-home">lista</a>
                    <a href="/app/novapagina2.jsx" className="btn btn-outline-light btn-lg btn-home">lista2</a>

                    <li className="nav-item">

                    </li>

                </div>,

                <div className="col-lg-6">
                    <img src="" alt="Logos-01-1.png" />
                </div>

            </div>
        </div>
    </section>;
  }

export default Home;