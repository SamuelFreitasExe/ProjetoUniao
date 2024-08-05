import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma de cadastro simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus produtos em um único lugar.</h4>
                    <a href="/app/novaconta" className="btn btn-dark btn-lg btn-banner">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                    <a href="/app/novapagina.jsx" className="btn btn-outline-light btn-lg btn-banner">lista</a>
                    <a href="/app/novapagina2.jsx" className="btn btn-outline-light btn-lg btn-banner">lista2</a>
                  
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

export default Banner;