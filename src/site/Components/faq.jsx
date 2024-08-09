import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'O que é a Associação União Alexandrense?',
      answer: 'A Associação União Alexandrense é uma organização sem fins lucrativos fundada em 2019, com o objetivo de promover o esporte e oferecer atividades sociais para crianças e adolescentes da região de Alexandra.',
    },
    {
      question: 'Qual é a missão da Associação?',
      answer: 'Nossa missão é fomentar o esporte como uma ferramenta de inclusão social e desenvolvimento pessoal, contribuindo para a melhoria da qualidade de vida das crianças e adolescentes da região de Alexandra.',
    },
    {
      question: 'Como a Associação é financiada?',
      answer: 'Recebemos financiamento através de doações, parcerias com empresas e organizações, e colaboração da lei municipal de incentivo ao esporte.',
    },
    {
      question: 'Como os recursos financeiros são utilizados?',
      answer: 'Os recursos são destinados à manutenção de atividades esportivas, compra de equipamentos, remuneração de instrutores e despesas administrativas.',
    },
    {
      question: 'Quantas crianças e adolescentes são atendidos pela Associação?',
      answer: 'Atualmente, atendemos 85 alunos com idades entre 5 e 17 anos.',
    },
    {
      question: 'Como posso contribuir com a Associação?',
      answer: 'Você pode contribuir através de doações financeiras, doação de equipamentos, ou se voluntariando para participar de nossas atividades e eventos.',
    },
    {
      question: 'A Associação possui título de utilidade pública?',
      answer: 'Sim, a Associação União Alexandrense possui título de utilidade pública municipal.',
    },
    {
      question: 'Quais atividades são oferecidas pela Associação?',
      answer: 'Oferecemos diversas atividades esportivas, como futebol, basquete, e atividades recreativas, além de eventos comunitários e programas de apoio educacional.',
    },
    {
      question: 'Como posso acompanhar as atividades da Associação?',
      answer: 'Você pode acompanhar nossas atividades através do nosso site, redes sociais, e boletins informativos que enviamos periodicamente.',
    },
    {
      question: 'Onde posso encontrar os relatórios financeiros da Associação?',
      answer: 'Nossos relatórios financeiros estão disponíveis para download nesta página de transparência, onde você encontrará detalhes sobre nossas receitas, despesas e o impacto de nossas atividades.',
    },
    {
      question: 'Como a Associação garante a transparência em suas operações?',
      answer: 'Mantemos uma política rigorosa de transparência, publicando relatórios financeiros e de atividades regularmente, e estamos sempre disponíveis para responder a perguntas e fornecer informações adicionais conforme necessário.',
    },
    {
      question: 'Quem pode participar das atividades oferecidas pela Associação?',
      answer: 'Nossas atividades são destinadas a crianças e adolescentes da região de Alexandra, com idades entre 5 e 17 anos.',
    },
    {
      question: 'Como posso entrar em contato com a Associação?',
      answer: 'Você pode entrar em contato conosco através do nosso formulário de contato no site, e-mail, telefone, ou pelas nossas redes sociais.',
    },
    {
      question: 'Há algum custo para participar das atividades da Associação?',
      answer: 'Todas as atividades oferecidas pela Associação são gratuitas para os participantes.',
    },
    {
      question: 'Como a Associação mede o impacto de suas atividades?',
      answer: 'Utilizamos várias métricas para medir o impacto de nossas atividades, incluindo a participação dos alunos, feedback dos pais e comunidade, e indicadores de desenvolvimento social e esportivo dos participantes.',
    },
  ];

  return (
    <section id="faqs">
      <h2>FAQs</h2>
      <p>Aqui estão as respostas para algumas perguntas frequentes.</p>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          <p className="faq-answer" style={{ display: openIndex === index ? 'block' : 'none' }}>
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;