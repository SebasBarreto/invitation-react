import React from 'react';
import './EventDetails.css'; 

function EventDetails() {
  return (
    <div className="unique-event-details">
      {/* Imagen en la parte superior */}
      <h3>¿Dónde y Cuándo?</h3>
      <img src="/assets/gastrobar.png" alt="Imagen del evento" className="unique-event-image" />
      <p>Aldany Music Resto Bar</p>
      <p>20:00 hrs</p>
      <p>calle 74c sur #12-17, Barrio Santa Librada!</p>
      
      {/* Botones para Waze y Google Maps */}
      <div className="unique-buttons-container">
        <button 
          className="unique-waze-button"
          onClick={() => window.open('https://www.waze.com/en/live-map/directions?latlng=4.515377394520813%2C-74.11543250083925')}
        >
          <img src="/assets/waze.png" alt="Waze" className="unique-map-icon" />
        </button>
        <button 
          className="unique-google-maps-button"
          onClick={() => window.open('https://maps.app.goo.gl/PBLhpqW5uvEmyfUh8')}
        >
          <img src="/assets/maps.jpg" alt="Google Maps" className="unique-map-icon" />
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
