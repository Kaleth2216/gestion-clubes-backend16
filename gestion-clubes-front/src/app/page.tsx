/**
 * Página principal del sistema de gestión de clubes universitarios.
 * Permite navegar entre secciones: eventos, clubes y finanzas.
 * Cada sección muestra información cargada desde el backend usando Zustand.
 */

'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/ui/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import EventCard from '../../components/modules/Event/EventCard';
import ClubCard from '../../components/modules/Club/ClubCard';
import FinanceCard from '../../components/modules/Finance/FinanceCard';
import { useClubStore } from '@/store/useClubStore';

export default function HomePage() {
  // Sección activa en la vista (events, clubs, finances)
  const [activeSection, setActiveSection] = useState('events');

  // Variables y funciones del estado global de clubes (Zustand)
  const {
    clubs,
    events,
    transactions,
    selectedClub,
    setSelectedClub,
    fetchClubs,
    fetchEvents,
    fetchTransactions,
  } = useClubStore();

  // Efecto que carga datos dependiendo de la sección seleccionada
  useEffect(() => {
    if (activeSection === 'clubs') fetchClubs();
    if (activeSection === 'events') fetchEvents();
    if (activeSection === 'finances') fetchTransactions();
  }, [activeSection, selectedClub?.id]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {/* 🔹 Navbar superior con botones para cambiar sección */}
      <Navbar onSectionChange={setActiveSection} />

      <div className="flex flex-1">
        {/* 🔸 Sidebar lateral con detalles del club */}
        <aside className="w-[23rem] h-[calc(100vh-72px)] fixed top-[72px] left-0 z-40 bg-zinc-900 border-r border-zinc-800 p-6 overflow-y-auto scrollbar-none shadow-xl">
          <Sidebar />
        </aside>

        {/* 🔹 Contenido principal dinámico */}
        <div className="flex-1 ml-[10rem] px-1 py-1">
          <main className="flex flex-col gap-12 items-start">
            {/* 📅 Sección: Eventos del club seleccionado */}
            {activeSection === 'events' && (
              <section className="w-full">
                <h2 className="text-xl font-semibold mb-4 text-white/90 border-b border-white/10 pb-1">
                  Eventos del Club
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.length > 0 ? (
                    events.map((event: any) => (
                      <EventCard
                        key={event.id}
                        imageUrl={event.imageUrl}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                      />
                    ))
                  ) : (
                    <p className="text-white/60 mt-2">
                      {selectedClub
                        ? 'Este club aún no tiene eventos registrados.'
                        : 'Selecciona un club para ver sus eventos.'}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* 🏛 Sección: Lista de clubes registrados */}
            {activeSection === 'clubs' && (
              <section className="w-full">
                <h2 className="text-xl font-semibold mb-4 text-white/90 border-b border-white/10 pb-1">
                  Clubes Registrados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clubs.map((club: any) => (
                    <ClubCard
                      key={club.id}
                      name={club.name}
                      founder={club.founder}
                      foundedYear={club.foundedYear}
                      description={club.description}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 💰 Sección: Finanzas del club seleccionado */}
            {activeSection === 'finances' && (
              <section className="w-full">
                <h2 className="text-xl font-semibold mb-4 text-white/90 border-b border-white/10 pb-1">
                  Transacciones Financieras
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Ingresos del club */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      Ingresos
                    </h3>
                    {transactions.filter((tx: any) => tx.type === 'INCOME').length > 0 ? (
                      transactions
                        .filter((tx: any) => tx.type === 'INCOME')
                        .map((tx: any) => (
                          <FinanceCard
                            key={tx.id}
                            type={tx.type}
                            amount={tx.amount}
                            description={tx.description}
                            date={tx.createdAt}
                          />
                        ))
                    ) : (
                      <p className="text-white/50">No hay ingresos registrados.</p>
                    )}
                  </div>

                  {/* Egresos del club */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-400 mb-2">
                      Egresos
                    </h3>
                    {transactions.filter((tx: any) => tx.type === 'EXPENSE').length > 0 ? (
                      transactions
                        .filter((tx: any) => tx.type === 'EXPENSE')
                        .map((tx: any) => (
                          <FinanceCard
                            key={tx.id}
                            type={tx.type}
                            amount={tx.amount}
                            description={tx.description}
                            date={tx.createdAt}
                          />
                        ))
                    ) : (
                      <p className="text-white/50">No hay egresos registrados.</p>
                    )}
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
