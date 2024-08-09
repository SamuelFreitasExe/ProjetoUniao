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
<<<<<<< HEAD
=======
          <Route path='/*' element={<h1>Olá, tudo bem, como vai...</h1>} />
>>>>>>> 89ed3cdb7d15008c1361eddd2d8824d752da1f3a
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>;
  }

export default Site;