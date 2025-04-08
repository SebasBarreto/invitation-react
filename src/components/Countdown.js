import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';
// src/components/Countdown.js
import styled from 'styled-components';

export const CountdownWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const CountdownCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const CountdownHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountdownContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function Countdown() {
  const eventDateRef = useRef(new Date('2025-04-26T20:00:00')); // Usar useRef para almacenar la fecha del evento
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDateRef.current - now; // Acceder a la fecha a través de current

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Días restantes
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
        const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Segundos restantes
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); // El arreglo de dependencias está vacío porque no depende de ninguna variable

  const containerStyle = {
    backgroundImage: `url('/assets/fondo-isa.png')`,  // La ruta debe ser relativa a la raíz del proyecto
    backgroundSize: 'cover',
    backgroundPosition: 'absolute',
    backgroundAttachment: 'absolute',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '12px',
    position: 'relative',
  };
  

  const timeItemStyle = {
    fontSize: '3rem', // Tamaño del texto para los días, horas, minutos y segundos
    fontWeight: 'bold', // Para que el texto sea más visible
    margin: '0 15px', // Espaciado entre los elementos de tiempo
    color: 'black',
    padding: '10px 20px',
    borderRadius: '10px', // Bordes redondeados
  };

  return (
    <div className="countdown" style={containerStyle}>
      <div className="countdown-content">
        <h3 className="countdown-title">Faltan:</h3>
        <div className="countdown-time">
          <div className="countdown-time-item" style={timeItemStyle}>
            <span>{timeLeft.days}</span>
            <p>DÍAS</p>
          </div>
          <div className="countdown-time-item" style={timeItemStyle}>
            <span>{timeLeft.hours}</span>
            <p>HRS</p>
          </div>
          <div className="countdown-time-item" style={timeItemStyle}>
            <span>{timeLeft.minutes}</span>
            <p>MIN</p>
          </div>
          <div className="countdown-time-item" style={timeItemStyle}>
            <span>{timeLeft.seconds}</span>
            <p>SEG</p>
          </div>
        </div>
        <p className="countdown-footer">para mis XV años</p>
      </div>
    </div>
  );
}

export default Countdown;
