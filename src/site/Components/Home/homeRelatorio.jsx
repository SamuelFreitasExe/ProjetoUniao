import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeRelatorio.css';

function RelatorioResumido() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/relatorio');
  };

  return (
    <section id="relatorio-resumido" onClick={handleClick}>
      <div className="resumo-container">
        <h2>Transparência e Relatórios</h2>
        <p>Descubra como nossa dedicação à transparência tem gerado impacto na comunidade desde 2019.</p>
        <p className="curiosidade">Clique aqui para explorar mais detalhes sobre nossa missão e resultados.</p>
      </div>
    </section>
  );
}

export default RelatorioResumido;
