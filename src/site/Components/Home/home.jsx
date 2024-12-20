import React from 'react';
import './Home.css'; // Importando o arquivo CSS
import ProjetoMapa from './ProjetoMapa.jsx';


function Home() {

  return (
    <section>
      <header className=" headerBanner bannerHome">
        <div className="headerBanner-content bannerHome-content">
          <h1>CHUTE INICIAL</h1>
          <div>
            <h5>Transformando vidas através do campo desde 2017.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat in metus ut dignissim. Sed lobortis mollis augue nec eleifend!
            </h5>
          </div>
        </div>
      </header>
      <div>

        <div
          className="home-list-container">
          <div className="imgQurmSomos">
            <img src={`${process.env.PUBLIC_URL}/Images/image11.png`} alt="Imagem" />
          </div>
          <div className="home-list" s>
            <h3>QUEM SOMOS</h3>
            <h4>A ASSOCIAÇÃO UNIÃO ALEXANDRENSE - é uma organização sem fins lucrativos fundada em 2019, com o objetivo de promover o esporte e oferecer atividades sociais para crianças e adolescentes da região de Alexandra.</h4>
          </div>
        </div>

        <div className="container-custon">
          <div className="box">
            <h2>Visão</h2>
            <p>Nossa visão é ser líder no mercado, oferecendo produtos inovadores e sustentáveis, impactando positivamente a sociedade.</p>
          </div>
          <div className="box">
            <h2>Missão</h2>
            <p>A nossa missão é fornecer soluções de alta qualidade que atendam às necessidades dos nossos clientes, com foco em excelência e compromisso.</p>
          </div>
          <div className="box">
            <h2>Valores</h2>
            <ul className="value-list">
              <li>Inovação</li>
              <li>Compromisso</li>
              <li>Transparência</li>
              <li>Sustentabilidade</li>
            </ul>
          </div>
          <div className="box">
            <h2>Crença</h2>
            <p>O União Alexandrense acredita que é possível o crescimento da cultura esportiva no distrito de Alexandra, desde que haja profissionalismo na organização e administração das ações junto com toda a comunidade esportiva e também de nossos atletas.</p>
          </div>
        </div>
      </div>
      <ProjetoMapa />

      <div className="containerinf">
        <h1 className="title">PROJETO CHUTE INICIAL</h1>
        <p className="text">
          De maneira social a Associação União Alexandrense vem mantendo através de doações e trabalho voluntário e, a partir de 2022, ficou apta a participar de chamada pública municipal para pleitear recursos da Lei de Incentivo ao Esporte. Aulas de futebol para crianças e jovens de 05 a 17 anos são divididas em 7 categorias no contraturno escolar. Os alunos precisam estar todos matriculados na Educação Básica.
          <br /><br />
          O projeto conta com uma boa estrutura oferecida através de parceria com a Sub-Prefeitura de Alexandra (PREFEITURA DE PARANAGUÁ), incluindo vestiários, Campo de Grama e Campo Sintético, além de um espaço coberto para atividades extras.
          <br /><br />
          O Projeto também é cadastrado no Conselho Municipal da Criança e do Adolescente. Hoje, o projeto realiza atividades de futebol, atividades específicas para goleiros, e conta com um regulamento interno e cadastro dos alunos. As aulas são ministradas por Professor de Educação Física e monitores.
        </p>
      </div>

      <div className="containerProjetos">
        <h1>Saiba mais sobre nossos projetos</h1>
        <a href="/projetos">
          <button>Saiba Mais</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
