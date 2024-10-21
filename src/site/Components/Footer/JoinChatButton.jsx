import React from 'react';
import './JoinChat.css'; // Importe o arquivo CSS para os estilos

const JoinChatButton = () => {
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const whatsappURL = "https://wa.me/5511999999999"; // Substitua com seu número
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="joinchat">
      <button 
        className="joinchat__button__open" 
        onClick={openWhatsApp}
      >
        {/* Ícone ou conteúdo do botão */}
      </button>
    </div>
  );
};

export default JoinChatButton;
