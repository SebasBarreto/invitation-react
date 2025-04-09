import React from 'react';
import './Header.css';  
import useIntersectionObserver from './useIntersectionObserver';
import styled from 'styled-components';

// Estilos con styled-components
export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const HeaderCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: none;  /* Eliminar sombra o borde */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const HeaderContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Asegura que el texto quede en la parte inferior */
  align-items: center;
  position: absolute;
  bottom: 20px; /* Coloca el texto en la parte inferior de la imagen */
  z-index: 2; /* Asegura que el contenido esté por encima de la imagen */
  width: 100%;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Mejor contraste */
  font-size: 3.5rem; /* Tamaño de la fuente */
  text-align: center;
`;

const HeaderImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Imagen detrás del texto */
`;

function Header() {
  const isVisible = useIntersectionObserver({
    target: '.unique-header',
  });

  return (
    <HeaderWrapper>
      <HeaderCard>
        <HeaderImageWrapper>
          <img src="/assets/isa-header.png" alt="isa-foto" className="header-image1" />
        </HeaderImageWrapper>

        <HeaderContent>
          <h5>Mis Quince Años ♛ <br/> Sharon Isabella Tellez Peña <br/> 26 de Abril 2025</h5>
        </HeaderContent>
      </HeaderCard>
    </HeaderWrapper>
  );
}

export default Header;
