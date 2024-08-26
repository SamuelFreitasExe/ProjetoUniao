import React from 'react';

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <section id="footer">    
      <div>
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/UniaoAlexandrense/" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/uniaoalexandrense/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:uniaoalexandrense@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <a href="images/Logos-01-1.png" download>Projeto teste</a>
      <p>Samuel - {ano}</p>
    </section>
  );
}

export default Footer;
