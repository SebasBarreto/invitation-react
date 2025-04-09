import React, { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollPosition / documentHeight) * 100;
    setScrollPercentage(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="schedule-container">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
      <div className="timeline">
        <div className="event">
          <div className="circle"></div>
          <div className="event-details">
            <p><strong>07:00 Pm:</strong> Inicio de entrada</p>
            <img src="/assets/ceremonia-icon.jpg" alt="Ceremonia" />
          </div>
        </div>
        <div className="event">
          <div className="circle"></div>
          <div className="event-details">
            <p><strong>08:00 PM:</strong> Presentación</p>
            <img src="/assets/presentacion-icon.jpg" alt="Presentación" />
          </div>
        </div>
        <div className="event">
          <div className="circle"></div>
          <div className="event-details">
            <p><strong>09:00 PM:</strong> Celebración</p>
            <img src="/assets/celebracion-icon.jpg" alt="Celebración" />
          </div>
        </div>
        <div className="event">
          <div className="circle"></div>
          <div className="event-details">
            <p><strong>11:00 PM:</strong> A Bailar</p>
            <img src="/assets/music-icon.jpg" alt="A Bailar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
