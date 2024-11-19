import React, { useState, useEffect } from 'react';import './projeto.css';
import img7 from './imgProjetos/img4.jpg';
import useIntersectionObserver from './hooks/useIntersectionObserver';


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



function Projetos() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.5 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.5 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.5 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.5 });
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <section>
      <header className="header banner">
        <div className="header-content banner-content">
          <h1>NOSSOS PROJETOS</h1>
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

      
      <div
        className={`container-inf ${isVisible1 ? 'appear' : ''}`}
        ref={ref1}
      >
        
        <div className="projetos-list-inf">
        <h3 className="custom-h3">EDUCAÇÃO PARA TODOS</h3>
        <h4 class="custom-h4">O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.</h4>
        </div>
        <div className="projeto-img-inf">
          <img src={img7} alt="img" />
        </div>
      </div>

      <div
        className={`projetos-list-container ${isVisible2 ? 'appear' : ''}`}
        ref={ref2}
      >
        <div className="projeto-img">
          <img src={img7} alt="img" />
        </div>
        <div className="projetos-list">
        <h3 className="custom-h3">ESPORTE E CIDANANIA</h3>
        <h4 class="custom-h4">O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.</h4>
        </div>
      </div>
      
      <div
        className={`container-inf ${isVisible2 ? 'appear' : ''}`}
        ref={ref2}
      >
       
        <div className="projetos-list-inf">
          <h3 className="custom-h3">ESPORTE E CIDANANIA</h3>
          <h4 class="custom-h4">O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.</h4>
        </div> 
        <div className="projeto-img-inf">
          <img src={img7} alt="img" />
        </div>
      </div>
      <div
        className={`projetos-list-container ${isVisible3 ? 'appear' : ''}`}
        ref={ref3}
      >
        <div className="projeto-img">
          <img src={img7} alt="img" />
        </div>
        <div className="projetos-list">
          <h3 className="custom-h3">ARTE E CULTURA</h3>
          <h4 class="custom-h4">O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.</h4>
        </div>
      </div>
      <div
        className={`container-inf ${isVisible4 ? 'appear' : ''}`}
        ref={ref4}
      >
        <div className="projetos-list"s>
          <h3 className="custom-h3">SAÚDE E BEM-ESTAR</h3>
          <h4 class="custom-h4">O ensino do futebol pode ir além dele, podendo aprender habilidades para outros esportes, seu desenvolvimento moral e social, aprendendo a conviver em grupo e com regras. Além do esporte, pensamos na condição humana.</h4>
        </div>
        <div className="projeto-img">
          <img src={img7} alt="img" />
        </div>
      </div>

      {/* continuação*/}
      <h2>Transformando Vidas</h2>
      <p>Veja como nossas ações têm mudado a vida de crianças e adolescentes na comunidade.</p>
      <ul className="stats-list" ref={ref}>
        <li><span>{isVisible ? <AnimatedNumber end={85} start={0} /> : '85'}</span> crianças e adolescentes atendidos</li>
        <li><span>{isVisible ? <AnimatedNumber end={1200} start={0} /> : '1200'}</span> refeições distribuídas</li>
        <li><span>{isVisible ? <AnimatedNumber end={50} start={0} /> : '50'}</span> voluntários ativos</li>
      </ul>

      <div className="inscricaoContainer">
       
        <div className="projetos-list-inf">
          <h3 className="custom-h3">JUNTE-SE A NÓS!</h3>
          <h4 class="custom-h4">Você sonha em jogar bola? Esta é a sua chance! Venha fazer parte de um time que valoriza o esporte, a amizade e a comunidade. Com treinamentos regulares, jogos emocionantes e a chance de fazer novos amigos, você não vai querer perder essa oportunidade! Inscreva-se e descubra como o esporte pode transformar a sua vida!</h4>
          <div>      
            <button className='inscricao'>INSCREVA-SE</button>
        </div>
         <div className="projeto-img-inf">
          <img src={img7} alt="img" />
        </div>
        </div>
        
      </div>

    </section>
  );
}

export default Projetos;
