import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './projeto.css';

import img1 from './imgProjetos/img1.jpg';
import img2 from './imgProjetos/img2.jpg';
import img3 from './imgProjetos/img3.jpg';
import img4 from './imgProjetos/img4.jpg';

import useIntersectionObserver from './hooks/useIntersectionObserver';
import Testemunho from './Testemunho';
import InscricaoFutebol from '../Projetos/InscricaoFutebol';

function AnimatedNumber({ end, start }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startValue = start;
    const duration = 2000;
    const increment = (end - startValue) / (duration / 100);

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.ceil(startValue));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [end, start]);

  return <span>{count}</span>;
}

function ProjetoItem({ projeto, onClick }) {
  return (
    <li className="projeto-item">
      <img src={projeto.imgSrc} alt={projeto.title} className="projeto-img" />
      <div className="projeto-content">
        <h3>{projeto.title}</h3>
        <p>{projeto.description}</p>
        <button className="projeto-btn" onClick={onClick}>Saiba Mais</button>
      </div>
    </li>
  );
}

function Projetos() {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  const projetos = [
    { imgSrc: img1, title: 'Educação para Todos', description: 'Oferecemos aulas de reforço escolar e atividades extracurriculares para garantir que cada criança tenha acesso à educação de qualidade.' },
    { imgSrc: img2, title: 'Esporte e Cidadania', description: 'Promovemos atividades esportivas que incentivam o trabalho em equipe, disciplina e a saúde física e mental.' },
    { imgSrc: img3, title: 'Arte e Cultura', description: 'Organizamos oficinas de arte e eventos culturais que estimulam a criatividade e a expressão artística.' },
    { imgSrc: img4, title: 'Saúde e Bem-Estar', description: 'Realizamos campanhas de conscientização e atividades de promoção da saúde para a comunidade.' },
  ];

  const navegarParaPaginaFutebol = () => {
    navigate('/pagina-futebol');
  };

  return (
    <section>
      <header className="header banner">
        <div className="header-content banner-content">
          <h1>Nossos Projetos</h1>
          <div>
            <h5>A Associação União Alexandrense é uma organização da sociedade
              civil sem fins lucrativos que se sustenta por meio de doação e de trabalho
              voluntário que agora está apta a participar de chamada pública municipal para
              pleitear recursos da lei de incentivo ao esporte.
            </h5>
          </div>
          <div>
            <button className='saibaMais'>Saiba mais</button>
          </div>
        </div>
       
      </header>

      <div className="intro">
        <p>Conheça os projetos que desenvolvemos para impactar positivamente a vida das pessoas na comunidade de Foz do Iguaçu.</p>
      </div>

      <div className="projetos-list-container">
        <ul className="projetos-list">
          {projetos.map((projeto, index) => (
            <ProjetoItem key={index} projeto={projeto} onClick={navegarParaPaginaFutebol} />
          ))}
        </ul>
      </div>

      <h2>Transformando Vidas</h2>
      <p>Veja como nossas ações têm mudado a vida de crianças e adolescentes na comunidade.</p>
      <ul className="stats-list" ref={ref}>
        <li><span>{isVisible ? <AnimatedNumber end={85} start={0} /> : '85'}</span> crianças e adolescentes atendidos</li>
        <li><span>{isVisible ? <AnimatedNumber end={1200} start={0} /> : '1200'}</span> refeições distribuídas</li>
        <li><span>{isVisible ? <AnimatedNumber end={50} start={0} /> : '50'}</span> voluntários ativos</li>
      </ul>
      <Testemunho />
      <InscricaoFutebol />
    </section>
  );
}

export default Projetos;
