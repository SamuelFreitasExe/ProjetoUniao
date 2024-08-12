import React from 'react';

function Sobre(){
    return <section id="sobre">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-5x"></i>
                    <h3>Fácil de usar</h3>
                    <p>O sistema possui uma interface muito simples e fácil de utilizar.</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe-americas fa-5x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu fluxo de negócios de forma eficiente, onde quer que você esteja.</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-columns fa-5x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua lista de cadastro muito bem organizada e de fácil consulta .</p>
                </div>
            </div>
        </div>
    </section>
  }

export default Sobre;