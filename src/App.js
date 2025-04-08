import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Envelope from './components/Envelope';
import Header from './components/Header'; 
import Phrase from './components/Phrase';
import Fathers from './components/Fathers';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Music from './components/Music'
import DressCode from './components/DressCode';
import ImageComponent from './components/ImageComponent';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  // Función para manejar el clic en el sobre y hacer scroll al header
  const handleEnvelopeClick = () => {
    setShowInvitation(true);

    setTimeout(() => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  };

  return (
    <div className="App">
      <div className="box-container">
        {!showInvitation ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Envelope onClick={handleEnvelopeClick} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header id="header" />
            <Phrase />
            <Fathers />
            <Countdown />
            <EventDetails />
            <Schedule />
            <RSVP />
            <DressCode />
            <Footer />
            <Music />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
