import React, { useState, useEffect } from 'react';
import './ImageComponent.css'; // Asegúrate de tener el archivo CSS correcto
// src/components/ImageComponent.js
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const ImageCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Función que se ejecuta al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {  // Ajusta este valor según cuando quieras que ocurra el cambio
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Añadir el listener para el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-component-container">
      <img 
        src="/assets/isa-header.png" 
        alt="Niña" 
        className={`image-header ${isScrolled ? 'shrink' : ''}`} 
      />
    </div>
  );
};

export default ImageComponent;
