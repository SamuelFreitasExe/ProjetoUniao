import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação
import './projeto.css'; // Certifique-se de que o caminho para o CSS está correto

import img1 from './imgProjetos/img1.jpg';
import img2 from './imgProjetos/img2.jpg';
import img3 from './imgProjetos/img3.jpg';
import img4 from './imgProjetos/img4.jpg';



function Projetos() {
  const navigate = useNavigate(); // Cria uma instância de navigate

  const projetos = [
    {
      imgSrc: img1,
      title: 'Educação para Todos',
      description: 'Oferecemos aulas de reforço escolar e atividades extracurriculares para garantir que cada criança tenha acesso à educação de qualidade.',
    },
    {
      imgSrc: img2,
      title: 'Esporte e Cidadania',
      description: 'Promovemos atividades esportivas que incentivam o trabalho em equipe, disciplina e a saúde física e mental.',
    },
    {
      imgSrc: img3,
      title: 'Arte e Cultura',
      description: 'Organizamos oficinas de arte e eventos culturais que estimulam a criatividade e a expressão artística.',
    },
    {
      imgSrc: img4,
      title: 'Saúde e Bem-Estar',
      description: 'Realizamos campanhas de conscientização e atividades de promoção da saúde para a comunidade.',
    },
  ];

  const navegarParaPaginaFutebol = () => {
    navigate('/pagina-futebol'); // Navega para a página desejada
  };

  return (
    <section id="projetos" className="projetos-section">
      <header className="header">
        <h2>Nossos Projetos</h2>
      </header>
      <div className="intro">
        <p>Conheça os projetos que desenvolvemos para impactar positivamente a vida das pessoas na comunidade de Foz do Iguaçu.</p>
      </div>
      <div className="projetos-list-container">
        <ul className="projetos-list">
          {projetos.map((projeto, index) => (
            <li key={index} className="projeto-item">
              <img src={projeto.imgSrc} alt={projeto.title} className="projeto-img" />
              <div className="projeto-content">
                <h3>{projeto.title}</h3>
                <p>{projeto.description}</p>
                <button className="projeto-btn" onClick={navegarParaPaginaFutebol}>Saiba Mais</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2>Transformando Vidas</h2>
        <p>Veja como nossas ações têm mudado a vida de crianças e adolescentes na comunidade.</p>
        <ul>
            <li>85 crianças e adolescentes atendidos</li>
            <li>1200 refeições distribuídas</li>
            <li>50 voluntários ativos</li>
        </ul>
        <div class="depoimento">
            <h3>Maria Silva</h3>
            <p>"Graças ao apoio da organização, meu filho tem se destacado na escola e se tornado mais confiante."</p>
        </div>
    </section>
  );
}

export default Projetos;
