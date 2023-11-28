import React, { useState, useEffect } from 'react';
import './Date.css'

export function Fecha() {
    const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaActual(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  const Weekday = { weekday: 'long' };
  const Day = { day: 'numeric' };
  const formatoMonth = { month: 'long' };

  return (
    <div className='date-container'>
      <p className='date'>{fechaActual.toLocaleDateString('en-US', Weekday)}, {fechaActual.toLocaleDateString('en-US', Day)}</p>
      <p className='month'>{fechaActual.toLocaleDateString('en-US', formatoMonth)}</p>
    </div>
  );
}