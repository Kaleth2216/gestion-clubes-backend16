/**
 * Componente visual para mostrar la tarjeta de un evento.
 * Incluye imagen, título, fecha, hora y descripción.
 * Aplica estilos y efectos visuales al pasar el cursor.
 */

'use client';

import React from 'react';

// Props que recibe el componente
interface EventCardProps {
  imageUrl?: string;     // Ruta de la imagen del evento (opcional)
  title: string;         // Título del evento
  date: string;          // Fecha y hora en formato ISO
  description: string;   // Descripción del evento
}

export default function EventCard({
  imageUrl = '/placeholder-event.jpg',
  title,
  date,
  description,
}: EventCardProps) {
  // Formatea la fecha para mostrar día, mes y año
  const formattedDate = new Date(date).toLocaleDateString('es-CO', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Formatea la hora en formato corto
  const formattedTime = new Date(date).toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400 shadow-md transition-all duration-300 hover:scale-[1.03] text-left">
      {/* 🖼 Imagen del evento */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📋 Contenido textual del evento */}
      <div className="p-5 text-white space-y-2">
        <h2 className="text-xl font-bold text-yellow-400 tracking-wide">
          {title}
        </h2>

        <p className="text-sm text-white/60 leading-snug">
          📅 {formattedDate} · 🕒 {formattedTime}
        </p>

        <p className="text-sm text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
