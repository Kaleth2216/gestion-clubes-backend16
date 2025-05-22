/**
 * Componente visual que muestra la tarjeta de información de un club.
 * Incluye nombre, fundador, descripción y año de fundación (si está disponible).
 * Aplica estilos oscuros y efectos visuales al hacer hover.
 */

'use client';

interface ClubCardProps {
  name: string;            // Nombre del club
  founder: string;         // Nombre del fundador o responsable
  description: string;     // Breve descripción del club
  foundedYear?: string;    // Año de fundación (opcional)
}

export default function ClubCard({
  name,
  founder,
  description,
  foundedYear,
}: ClubCardProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 hover:border-yellow-400 shadow-md transition-transform duration-300 p-6 text-white hover:scale-[1.03]">
      {/* 🏷 Nombre del club */}
      <h2 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide">{name}</h2>

      {/* 🧑 Fundador del club */}
      <p className="text-sm text-white/60 mb-1 leading-snug">
        🧑‍💼 <span className="text-white/80">Responsable:</span> {founder}
      </p>

      {/* 📅 Año de fundación (si existe) */}
      {foundedYear && (
        <p className="text-sm text-white/60 mb-2 leading-snug">
          📅 <span className="text-white/80">Fundado en:</span> {foundedYear}
        </p>
      )}

      {/* 📝 Descripción del club */}
      <p className="text-sm text-white/80 leading-relaxed">{description}</p>
    </div>
  );
}
