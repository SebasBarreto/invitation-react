import React from 'react';
import './Header.css';  
import useIntersectionObserver from './useIntersectionObserver';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const HeaderCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const HeaderSection = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function Header() {
  const isVisible = useIntersectionObserver({
    target: '.unique-header',  // Usamos la nueva clase única
  });

  return (
    <div className={`unique-header ${isVisible ? 'fade-in' : ''}`}>
      <img src="/assets/isa-header.png" alt="isa-foto" className="header-image1" />
      <h1>Mis Quince Años ♛ </h1>
      <h2> Sharon sabella 
        Tellez Peña 
      </h2>
      <p className="event-date">26 de Abril 2025</p>
    </div>
  );
}

export default Header;
