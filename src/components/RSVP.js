import React, { useState } from 'react';
import './RSVP.css';  // Importa el archivo CSS para los estilos
import styled from 'styled-components';

export const RSVPWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const RSVPCard = styled.div`
  width: 60%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const RSVPHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RSVPContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div``;

const InputField = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 15px;
  width: 100%;
  max-width: 300px;
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #9c27b0;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #7b1fa2;
    transform: translateY(-3px); /* Efecto de elevación */
  }
`;

function RSVP() {
  const [attendees, setAttendees] = useState(0); // Número de asistentes
  const [familyName, setFamilyName] = useState(""); // Nombre de la familia
  const [showFamilyInput, setShowFamilyInput] = useState(false); // Si se muestra el campo para ingresar familia
  const [isConfirmed, setIsConfirmed] = useState(false); // Estado para manejar la confirmación

  const handleRSVP = (e) => {
    setAttendees(Number(e.target.value));
  };

  const handleFamilyInputChange = (e) => {
    setFamilyName(e.target.value);
  };

  const handleConfirm = () => {
    if (attendees === 6) {
      // Si el usuario selecciona "No podré asistir"
      const message = `¡Hola! Lamento informar que no podré asistir a la fiesta de XV años de Isabella Tellez Peña.`;
      const phoneNumber = "+573214788756"; // Aquí pones tu número de WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      // Generar el mensaje para WhatsApp con los acompañantes
      const message = `¡Hola! Soy parte de la familia ${familyName} y asistiré a la fiesta de XV años de Isabella Tellez Peña, con ${attendees} acompañantes.`;
      const phoneNumber = "+573214788756"; // Aquí pones tu número de WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <RSVPWrapper>
      <RSVPCard>
        <RSVPHeader>
          <h2>Confirmación de Asistencia</h2>
        </RSVPHeader>
        <RSVPContent>
          <h3>Invitación para:</h3>
          <select value={attendees} onChange={handleRSVP}>
            <option value="0">Selecciona el número de Asistentes</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">No podré asistir</option>
          </select>

          {attendees !== 6 && showFamilyInput && (
            <InputContainer>
              <label>Ingresa tu familia:</label>
              <InputField 
                type="text" 
                placeholder="Familia ____________" 
                value={familyName} 
                onChange={handleFamilyInputChange} 
              />
            </InputContainer>
          )}

          <Button onClick={handleConfirm}>
            {isConfirmed ? 'Confirmar en WhatsApp' : 'Confirmar'}
          </Button>
        </RSVPContent>
      </RSVPCard>
    </RSVPWrapper>
  );
}

export default RSVP;
