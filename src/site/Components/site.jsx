import React from 'react';
import Menu from './menu';
import Banner from './banner';
import Sobre from './sobre';
import Projetos from './projetos';
import Relatorio from './relatorio';
import Footer from './footer';
import Contato from './contato';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Site(){
    return <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/relatorio" element={<Relatorio/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>;
  }

export default Site;