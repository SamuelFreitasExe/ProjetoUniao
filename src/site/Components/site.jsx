import React from 'react';
import Menu from './Menu/menu';
import Home from './Home/home';
import Sobre from './Sobre/sobre';
import Projetos from './Projetos/projetos';
import Relatorio from './Relatorio/relatorio';
import Contato from './Contato/contato';
import Footer from './Footer/footer';
<<<<<<< HEAD
import PaginaFutebol from './Projetos/paginaFutebol'; // Importe o componente PaginaFutebol

=======
>>>>>>> 5052e9de5e9366c882fed8024c105e18d93a92f6
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Site() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/pagina-futebol" element={<PaginaFutebol />} /> {/* Adicione a rota para PaginaFutebol */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Site;
