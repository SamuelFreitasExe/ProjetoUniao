import React from 'react';
import './footer.css'; // Importe o CSS para aplicar os estilos
import JoinChatButton from './JoinChatButton';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
function Footer() {
  const ano = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="container">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/UniaoAlexandrense/" target="_blank" rel="noreferrer">
              <FaFacebook className="fa fa-facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="fa fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/uniaoalexandrense/" target="_blank" rel="noreferrer">
              <FaInstagram className="fa fa-instagram" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:uniaoalexandrense@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="fa fa-envelope" />
            </a>
          </li>
        </ul>
        <div className="acao-cidadania">
          <p>PROJETO CHUTE INICIAL © 2024</p>
          <p>ASSOCIAÇÃO RECREATIVA, CULTURAL E <br/>
          DESPORTIVA UNIÃO ALEXANDRENSE </p>
          <p>CNPJ: 36.089.294/0001-17</p>
        </div>
        <a href="images/Logos-01-1.png" download>Projeto teste</a>
      </div>
      <div className="dois">
        
        <p>&copy; {ano} União Alexandrense. Todos os direitos reservados.</p>
        <JoinChatButton/>
      </div>
    
  

    </section>
  );
}

export default Footer;
