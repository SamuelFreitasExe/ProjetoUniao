import React from 'react';
import img1 from './imgProjetos/img1.jpg';
import img2 from './imgProjetos/img2.jpg';

function Testemunho() {
    return (
        <section id="testemunho">
            <div className="container">
                <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <h2>"Esta organização tem sido fundamental para o nosso crescimento pessoal e profissional. As oportunidades oferecidas são inestimáveis e a dedicação da equipe é evidente em cada aspecto do trabalho."</h2>
                            <img src={img1} alt="Depoente 1" />                
                            <em>Maria Oliveira - São Paulo</em>  
                        </div>

                        <div className="carousel-item" data-bs-interval="5000">
                            <h2>"Participar das atividades aqui tem sido uma experiência transformadora. A abordagem personalizada e o suporte contínuo nos ajudaram a alcançar nossos objetivos de maneira eficaz."</h2>
                            <img src={img2} alt="Depoente 2"/>
                            <em>Pedro Santos - Rio de Janeiro</em>  
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testemunho;
