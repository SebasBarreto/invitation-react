import React from 'react';
import { motion } from 'framer-motion';
import './Envelope.css';  
import styled from 'styled-components';

export const EnvelopeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const EnvelopeCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const Envelope = ({ onClick }) => {
  return (
    <motion.div
      className="envelope"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}  /* Efecto de aumentar el tamaño al pasar el ratón */
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}  /* Efecto suave */
    >
      <img src="/assets/envelope-with-seal.jpg" alt="Sobre" />
    </motion.div>
  );
};

export default Envelope;
