/**
 * Componente `Sidebar` que muestra información del club seleccionado.
 * Permite seleccionar el club activo, ver sus estadísticas, miembros, y contacto.
 * Se oculta si el sidebar está cerrado (según contexto global).
 */

'use client';

import { useEffect, useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import { useClubStore } from '@/store/useClubStore';
import axios from '@/lib/axios';

export default function Sidebar() {
  const { isOpen } = useSidebar(); // Contexto para saber si el sidebar está abierto
  const {
    selectedClub,
    setSelectedClub,
    events,
    transactions,
  } = useClubStore(); // Acceso al estado global del club

  const [clubs, setClubs] = useState([]);         // Lista de clubes disponibles
  const [members, setMembers] = useState([]);     // Lista de miembros del club
  const [showMembers, setShowMembers] = useState(false); // Estado para mostrar miembros

  // Carga los clubes y selecciona el primero si aún no hay uno seleccionado
  useEffect(() => {
    axios
      .get('/clubs')
      .then(response => {
        setClubs(response.data);
        if (response.data.length > 0 && !selectedClub) {
          setSelectedClub(response.data[0]);
        }
      })
      .catch(err => console.error('Error cargando clubes:', err));
  }, [selectedClub, setSelectedClub]);

  // Muestra u oculta los miembros del club seleccionado
  const toggleMembers = async () => {
    if (!selectedClub) return;
    if (!showMembers) {
      try {
        const { data } = await axios.get(`/members?clubId=${selectedClub.id}`);
        setMembers(data);
      } catch (error) {
        console.error('Error cargando miembros:', error);
      }
    }
    setShowMembers(!showMembers);
  };

  // Si el sidebar está cerrado, no se renderiza nada
  if (!isOpen) return null;

  return (
    <aside className="w-110 h-[calc(100vh-72px)] fixed top-[72px] left-0 z-40 bg-[#121212] text-white px-4 py-6 border-r border-white/10 overflow-y-auto scrollbar-none">
      <div className="flex flex-col gap-6 text-left">
        {/* 📌 Sección de información principal del club */}
        <div className="bg-[#1a1a1a] rounded-xl shadow-md border border-white/10 p-4">
          {/* Imagen decorativa del club */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400 mb-3 mx-auto">
            <img
              src="/placeholder-profile.jpg"
              alt="Imagen del club"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Selector de clubes */}
          <select
            className="w-full bg-[#1e1e1e] border border-yellow-400 text-yellow-400 rounded-md px-2 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            value={selectedClub?.id ?? ''}
            onChange={(e) => {
              const club = clubs.find((c: any) => c.id === e.target.value);
              if (club) setSelectedClub(club);
            }}
          >
            {clubs.map((club: any) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>

          {/* Información detallada del club seleccionado */}
          {selectedClub ? (
            <div className="text-sm space-y-3">
              <div>
                <p className="text-xs text-gray-400">Nombre:</p>
                <p className="font-semibold">{selectedClub.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Fundador:</p>
                <p className="font-semibold">{selectedClub.founder}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Descripción:</p>
                <p className="text-white/70 text-justify leading-snug">{selectedClub.description}</p>
              </div>
            </div>
          ) : (
            <p className="text-white/50 text-sm">Cargando información del club...</p>
          )}
        </div>

        {/* 📊 Estadísticas del club + contacto */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3 text-sm">
          {/* Eventos y finanzas */}
          <div className="space-y-1">
            <p className="text-xs text-gray-400">Estadísticas:</p>
            <p>📅 Eventos: {events.length}</p>
            <p>💰 Finanzas: {transactions.length}</p>
          </div>

          {/* Datos de contacto */}
          <div className="pt-3 border-t border-white/10 space-y-1">
            <p className="text-xs text-gray-400">Contacto:</p>
            <p>📧 acamacho-2022@gmail.com</p>
            <p>📱 3026440772</p>
          </div>

          {/* Frase institucional */}
          <div className="pt-3 border-t border-white/10">
            <p className="text-[13px] text-white/40 italic">
              “Innovar para construir el futuro.”
            </p>
          </div>
        </div>

        {/* 👥 Sección para visualizar los miembros del club */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-sm">
          <button
            onClick={toggleMembers}
            className="w-full text-left text-yellow-400 hover:text-yellow-300 transition font-semibold"
          >
            👥 Miembros del club {showMembers ? '▲' : '▼'}
          </button>

          {showMembers && (
            <div className="mt-3 flex flex-col gap-2">
              {members.length > 0 ? (
                members.map((member: any) => (
                  <div key={member.id} className="border-b border-white/10 pb-2">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-white/50 text-xs">{member.role}</p>
                  </div>
                ))
              ) : (
                <p className="text-white/50 mt-2">No hay miembros registrados.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
