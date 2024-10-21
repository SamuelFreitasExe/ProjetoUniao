import React from 'react';
import './inscricaoFutebol.css';

function InscricaoFutebol() {
  return (
    <section id="inscricao-futebol" className="inscricao-container">
      <div className="content">
        <h1>Junte-se ao União Alexandrense!</h1>
        <p>Você sonha em jogar bola? Esta é a sua chance!</p>
        <p>Venha fazer parte de um time que valoriza o esporte, a amizade e a comunidade.</p>
        <p>Com treinamentos regulares, jogos emocionantes e a chance de fazer novos amigos, você não vai querer perder essa oportunidade!</p>
        <p>Inscreva-se e descubra como o esporte pode transformar a sua vida!</p>
        <a href="https://forms.gle/amgxZGAUA9F5S3qx7">
          <button className="btn-inscricao">inscreva-se</button>
        </a>
      </div>
    </section>
  );
}

export default InscricaoFutebol;
