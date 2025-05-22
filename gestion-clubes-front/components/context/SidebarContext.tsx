/**
 * Contexto global para controlar la visibilidad del sidebar en la aplicación.
 * Permite abrir/cerrar el panel lateral desde cualquier componente utilizando el hook `useSidebar`.
 */

'use client';

import { createContext, useContext, useState } from 'react';

// Tipo de datos que maneja el contexto del sidebar
type SidebarContextType = {
  isOpen: boolean;               // Estado que indica si el sidebar está abierto
  toggleSidebar: () => void;     // Función para alternar su visibilidad
};

// Contexto creado (inicialmente sin valor definido)
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Proveedor de contexto que encapsula el estado y lo expone a los hijos
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // Estado del sidebar

  // Función que alterna el valor de isOpen
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Hook personalizado para consumir el contexto del sidebar
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
}
