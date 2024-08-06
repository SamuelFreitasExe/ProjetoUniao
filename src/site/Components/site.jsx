import React from 'react';
import Menu from './menu';
import Banner from './banner';
import Features from './features';
import Testemunho from './testemunho';
import Precos from './precos';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Site(){
    return <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/testemunho" element={<Testemunho/>} />
          <Route path="/precos" element={<Precos/>} />
          <Route path='/*' element={<h1>Olá, tudo bem, como vai...</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>;
  }

export default Site;