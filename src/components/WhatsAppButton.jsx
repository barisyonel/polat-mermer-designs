import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '905418291708'; // Güncellenen WhatsApp numarası
  const message = 'Merhaba, bilgi almak istiyorum.'; // Varsayılan mesaj

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton; 