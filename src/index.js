import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales
import App from './App'; // Componente principal
import { BrowserRouter as Router } from 'react-router-dom'; // Importamos Router de react-router-dom

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
