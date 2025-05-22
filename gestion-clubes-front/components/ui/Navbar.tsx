'use client';

import { useSidebar } from '../context/SidebarContext';

interface NavbarProps {
  onSectionChange?: (section: string) => void;
}

export default function Navbar({ onSectionChange }: NavbarProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Botón hamburguesa */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300 transition duration-200 text-2xl font-bold"
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Navegación */}
        <div className="flex gap-6 text-[16px] font-semibold">
          <button
            onClick={() => onSectionChange?.('clubs')}
            className="px-3 py-1 rounded-md text-yellow-400 hover:text-yellow-300 hover:bg-white/10 transition"
          >
            Clubes
          </button>
          <button
            onClick={() => onSectionChange?.('events')}
            className="px-3 py-1 rounded-md text-yellow-400 hover:text-yellow-300 hover:bg-white/10 transition"
          >
            Eventos
          </button>
          <button
            onClick={() => onSectionChange?.('finances')}
            className="px-3 py-1 rounded-md text-yellow-400 hover:text-yellow-300 hover:bg-white/10 transition"
          >
            Finanzas
          </button>
        </div>
      </div>
    </nav>
  );
}
