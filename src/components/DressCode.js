import React from 'react';
import './DressCode.css';
// src/components/DressCode.js
import styled from 'styled-components';

export const DressCodeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const DressCodeCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const DressCodeHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DressCodeContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function DressCode() {
  return (
    <div className="dress-code-container">
      <h2 className="title">Código de vestimenta</h2>
      <h3 className="sub-title">FORMAL</h3>
      <div className="image-container">
        <img src="/assets/vestimenta.png" alt="Íconos de vestimenta formal" className="dress-code-image" />
      </div>
      <h4 className="gifts-title">¡Celebremos juntos este momento tan especial!</h4>
      <p className="gifts-description">
      Tu presencia será el mejor regalo, pero si deseas acompañarnos con un detalle adicional, te invitamos a ser parte de nuestra lluvia de sobres. Tu sobre, con un gesto lleno de cariño, será un recuerdo valioso para Isabella en este día tan importante.
      </p>
    </div>
  );
}

export default DressCode;
