import React from 'react';
import './Footer.css';  // Asegúrate de importar el archivo CSS para el footer
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const FooterCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const FooterSection = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

function Footer() {
  return (
    <div className="footer">
      <p className="hashtag">#mis-xv-Isabella</p>
      <p className="thanks-message">Gracias por acompañarme en este día tan especial ❤️</p>
      <img className="footer-image" src="imagen4.jpg" alt="agradecimiento" />
      
      <ImageWrapper>
        <img className="footer-image" src="/assets/isa1.jpeg" alt="imagen 1" />
        <img className="footer-image" src="/assets/isa2.png" alt="imagen 2" />
        <img className="footer-image" src="/assets/isa3.png" alt="imagen 3" />
        <img className="footer-image" src="/assets/isa4.jpeg" alt="imagen 4" />
      </ImageWrapper>
    </div>
  );
}

export default Footer;
