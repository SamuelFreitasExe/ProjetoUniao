import React from 'react';
import FAQ from './faq';
import GraficoPizza from './gráfico';


function Relatorio() {
  return (

    <>
      <section id="relatorio">
        <section id="intro">
          <h1>Transparência e Relatórios</h1>
          <h2>Transparência e Compromisso com a Comunidade</h2>
          <p>A Associação União Alexandrense valoriza profundamente a transparência e acredita que a confiança é a base de qualquer relacionamento bem-sucedido. Desde nossa fundação, em 2019, nos comprometemos a ser abertos e claros sobre nossas operações, finanças e impacto na comunidade. Nossa página de transparência foi criada para garantir que nossos membros, doadores, parceiros e a comunidade em geral tenham acesso a informações precisas e atualizadas sobre nosso trabalho. Acreditamos que a transparência fortalece nossa responsabilidade e nos permite mostrar os resultados do apoio que recebemos, demonstrando como estamos cumprindo nossa missão de fomentar o esporte e contribuir para o desenvolvimento social da região.</p>
          <p>Nosso compromisso com a transparência reflete nossa dedicação à integridade e responsabilidade.</p>
        </section>
        <section id="resumo-financeiro">
          <h2>Resumo Financeiro</h2>
          <GraficoPizza />
          <div id='btn-download'>
          <a href="relatorios/relatorio-financeiro-2023.pdf" download>Download de Relatório Completo 2023</a>
          </div>
        </section>
        <section id="relatorios-atividades">
          <h2>Relatórios de Atividades</h2>
          <p>Confira nossos projetos e o impacto que causamos na comunidade.</p>
            {/* Detalhes e infograficos aqui */}
        </section>

        <section id="governanca">
          <h2>Governança</h2>
          <p>Conheça nossa estrutura de governança e nossos processos de tomada de decisão.</p>
          {/* Organograma e informações aqui */}
        </section>

        <section id="parcerias">
            <h2>Parcerias e Colaborações</h2>
            <p>Trabalhamos com diversas organizações para alcançar nossos objetivos.</p>
            <div id="logotipos">{/* Logotipos e descrições de parceiros aqui */}</div>
        </section>
        <div>
          <FAQ />
        </div>

      </section>
    </>
  );
}

export default Relatorio;
