import React from 'react';
import Menu from './menu';

import Home from './home';
import Sobre from './sobre';
import Projetos from './projetos';
import Relatorio from './relatorio';
import Contato from './contato';
import Footer from './footer';

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
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>;
  }

export default Site;