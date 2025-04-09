import React from 'react';
import './Fathers.css';  // Asegúrate de tener el archivo de estilos para este componente

function Fathers() {
  return (
    <div className="fathers-container">
      <h2 className="heading">Con la bendición de Dios y en compañía de mis padres y mi Familia</h2>
      
      <div className="parents">
        <h3>Mis Padres</h3>
        <p>Sr. Evencio Tellez</p>
        <p>Sra. Rosa Peña</p>
      </div>

      <div className="godparents">
        <h3>Mi Amada Familia</h3>
      </div>

      <p className="invitation-text">Nos complace invitarte a ser parte de este gran día.</p>
    </div>
  );
}

export default Fathers;
