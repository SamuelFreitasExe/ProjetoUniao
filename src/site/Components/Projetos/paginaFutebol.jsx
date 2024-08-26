import React from 'react';
import './paginaFutebol.css'; // CSS específico para esta página
import img4 from './imgProjetos/img4.jpg';

function PaginaFutebol() {
  return (
    <section className="futebol-section">
      <div className="container1">
        
        <div className="content">
          <h1>Ensinar Mais Que Futebol a Todos</h1>
          <p className="subtitulo">
            Além do esporte estamos formando um cidadão.
          </p>
          <p className="descricao">
            O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.
          </p>
          <p className="citacao">(FREIRE, 2011)</p>
        </div>
        <div className="imagem">
          <img src={img4} alt="Futebol" />
        </div>
      </div>
    </section>
  );
}

export default PaginaFutebol;
