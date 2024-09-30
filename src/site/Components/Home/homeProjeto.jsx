import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homeProjeto.css'; 
import img1 from './imgProjetos/img1.jpg';
import img2 from './imgProjetos/img2.jpg';
import img3 from './imgProjetos/img3.jpg';
import img4 from './imgProjetos/img4.jpg';

function VitrineProjetos() {
  const navigate = useNavigate();

  const projetos = [
    { imgSrc: img1, title: 'Educação para Todos' },
    { imgSrc: img2, title: 'Esporte e Cidadania' },
    { imgSrc: img3, title: 'Arte e Cultura' },
    { imgSrc: img4, title: 'Saúde e Bem-Estar' },
  ];

  const handleNavigate = () => {
    navigate('/projetos'); // Redireciona para a página de projetos
  };

  return (
    <section id="vitrine-projetos" className="vitrine-projetos-section">
      <h2>Conheça Nossos Projetos</h2>
      <div className="vitrine-projetos-list-container">
        {projetos.map((projeto, index) => (
          <div key={index} className="vitrine-projeto-item" onClick={handleNavigate}>
            <img src={projeto.imgSrc} alt={projeto.title} className="vitrine-projeto-img" />
            <div className="vitrine-projeto-content">
              <h3>{projeto.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VitrineProjetos;
