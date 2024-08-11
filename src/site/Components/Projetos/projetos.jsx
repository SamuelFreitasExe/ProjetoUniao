import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação
import './projeto.css'; // Certifique-se de que o caminho para o CSS está correto

function Projetos() {
  const navigate = useNavigate(); // Cria uma instância de navigate

  const projetos = [
    {
      imgSrc: '/imgProjetos/educacao.jpg',
      title: 'Educação para Todos',
      description: 'Oferecemos aulas de reforço escolar e atividades extracurriculares para garantir que cada criança tenha acesso à educação de qualidade.',
    },
    {
      imgSrc: '/imgProjetos/esporte.jpg',
      title: 'Esporte e Cidadania',
      description: 'Promovemos atividades esportivas que incentivam o trabalho em equipe, disciplina e a saúde física e mental.',
    },
    {
      imgSrc: '/imgProjetos/arte.jpg',
      title: 'Arte e Cultura',
      description: 'Organizamos oficinas de arte e eventos culturais que estimulam a criatividade e a expressão artística.',
    },
    {
      imgSrc: '/imgProjetos/saude.jpg',
      title: 'Saúde e Bem-Estar',
      description: 'Realizamos campanhas de conscientização e atividades de promoção da saúde para a comunidade.',
    },
  ];


  const navegarParaPaginaFutebol = () => {
    navigate('/pagina-futebol'); // Navega para a página desejada
  };

  return (
    <section id="projetos" className="projetos-section">
      <div className="header">

        <h2>Nossos Projetos</h2>
      </div>
      <div className="">
        <p>Conheça os projetos que desenvolvemos para impactar positivamente a vida das pessoas na comunidade de Foz do Iguaçu.</p>

      </div>

      <div className="projetos-list-container">
        <ul className="projetos-list">
          {projetos.map((projeto, index) => (
            <li key={index} className="projeto-item">
              <img src="imgProjetos/img1.jpg" alt="Descrição da Imagem" />
              <div className="projeto-content">
                <h3>{projeto.title}</h3>
                <p>{projeto.description}</p>
                <button className="projeto-btn" onClick={navegarParaPaginaFutebol}>Saiba Mais</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projetos;
