import React from 'react';
import Menu from './Menu/menu';
import Home from './Home/home';
import Sobre from './Sobre/sobre';
import Projetos from './Projetos/projetos';
import Relatorio from './Relatorio/relatorio';
import Contato from './Contato/contato';
import Footer from './Footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Site(){
    return <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/relatorio" element={<Relatorio/>} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path='/*' element={<h1>Olá, tudo bem, como vai...</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>;
  }

export default Site;