import React from 'react';
import './Home.css'; // Importando o arquivo CSS

function Home() {
  return (
    <section className='MyHome'>
      <header className="header bannerHome">
        <div className="header-content bannerHome-content">
          <h1>CHUTE INICIAL</h1>
            <div>
              <h5>Transformando vidas através do campo desde 2017.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat in metus ut dignissim. Sed lobortis mollis augue nec eleifend!
              </h5>
            </div>
        </div>
      </header>
      <div className='box-pattern'>
            <section id="instagram">
              <h2>Nos conheça melhor</h2>
              <div className="public-box">
                <a className="public-photo" href="/#">
                  <img src="/Images/imgContato/Direct.gif" alt="Direct"/>
                </a>
                <p>Um texto e uma imagem que tenham a ver com o assunto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus eos. Earum excepturi maxime molestias autem! Accusantium nisi quam nemo, nobis quis qui unde cum sapiente totam eos, facilis maxime!</p>
              </div>
            </section>

            <section id="facebook">
              <h2>Patrocinadores</h2>
              <div className="public-box">
                <p>Um texto e uma imagem que tenham a ver com o assunto.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus eos. Earum excepturi maxime molestias autem! Accusantium nisi quam nemo, nobis quis qui unde cum sapiente totam eos, facilis maxime!
                </p>
                <a className="public-photo" href="/#">
                  <img src="/Images/imgContato/Facebook.png" alt="Facebook"/>
                </a>
              </div>
            </section>

            <section id="whatsapp">
                <h2>Conheça Nossa Idoneidade</h2>
                <div className="public-box">
                    <a className="public-photo" href="/#">
                        <img src="/Images/imgContato/Zap.gif" alt="Whatsapp"/>
                    </a>
                    <p>Um texto e uma imagem que tenham a ver com o assunto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus eos. Earum excepturi maxime molestias autem! Accusantium nisi quam nemo, nobis quis qui unde cum sapiente totam eos, facilis maxime!</p>
                </div>
            </section>
        </div>
    </section>
  );
}

export default Home;
