import React from 'react';
<<<<<<< HEAD
import Menu from './menu';

import Home from './home';
import Sobre from './sobre';
import Projetos from './projetos';
import Relatorio from './relatorio';
import Contato from './contato';
import Footer from './footer';

=======
import Menu from './Menu/menu';
import Home from './Home/home';
import Sobre from './Sobre/sobre';
import Projetos from './Projetos/projetos';
import Relatorio from './Relatorio/relatorio';
import Contato from './Contato/contato';
import Footer from './Footer/footer';
>>>>>>> 87e36e3a51693158fc79e3eb8b6d8e968f8f8fb5
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