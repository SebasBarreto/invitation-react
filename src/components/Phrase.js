import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Estilos con styled-components
const PhraseWrapper = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  text-align: center;
  background-color: #83225e; /* Color de fondo morado */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`;

const PhraseText = styled.h3`
  font-size: 1.5rem;
  font-family: 'Montserrat', cursive;
  font-weight: normal;
  color: #ffffff;
  margin-top: 20px;
  text-align: center;
  line-height: 1.5;

  /* Media Query para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.3rem; /* Reducir tamaño de la frase en pantallas más pequeñas */
  }

  /* Media Query para pantallas muy pequeñas (móviles) */
  @media (max-width: 480px) {
    font-size: 1.1rem; /* Reducir aún más el tamaño de la frase */
  }
`;

function Phrase() {
  const { ref, inView } = useInView({
    triggerOnce: true,      // Se activa solo una vez cuando el componente entra en vista
    threshold: 0.2,         // El 20% del componente debe ser visible para disparar la animación
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}  // La opacidad cambia según si el componente está en vista
      transition={{ duration: 2 }}   // Duración de la animación
    >
      <PhraseWrapper>
        <PhraseText>
          Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños, metas y grandes logros. ❤️
        </PhraseText>
      </PhraseWrapper>
    </motion.div>
  );
}

export default Phrase;
