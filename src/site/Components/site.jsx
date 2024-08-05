import React from 'react';
import Menu from './menu';
import Banner from './banner';
import Features from './features';
import Testemunho from './testemunho';
import Precos from './precos';
import Footer from './footer';

function Site(){
    return <div>
      <Menu/>
      <Banner/>
      <Features/>
      <Testemunho/>
      <Precos/>
      <Footer/>
    </div>;
  }

export default Site;