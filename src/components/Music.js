import React, { useState, useEffect, useRef } from 'react';
import './Music.css';
// src/components/Music.js
import styled from 'styled-components';

export const MusicWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const MusicCard = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const MusicHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #d5a6bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MusicContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function Music() {
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la música
  const audio = useRef(new Audio('/assets/isa-music.mp3')); // Usamos useRef para mantener una sola instancia del audio

  // Reproducir música automáticamente cuando el componente se monte
  useEffect(() => {
    audio.current.play();  // Reproducir música automáticamente
    audio.current.loop = true; // Hacer que la música se repita

    return () => {
      audio.current.pause(); // Detener la música cuando el componente se desmonte
    };
  }, []);

  // Función para cambiar el estado de la música (play/pause)
  const togglePlayPause = () => {
    if (isPlaying) {
      audio.current.pause();  // Pausar la música
    } else {
      audio.current.play();  // Reproducir la música
    }
    setIsPlaying(!isPlaying);  // Cambiar el estado de la música
  };

  return (
    <div className="container" onClick={togglePlayPause}>
      <input className="play-btn" type="checkbox" checked={isPlaying} onChange={togglePlayPause} />
      <div className={`play-icon ${isPlaying ? 'green' : 'red'}`} />
      <div className={`pause-icon ${isPlaying ? 'hidden' : ''}`} />
    </div>
  );
}

export default Music;
