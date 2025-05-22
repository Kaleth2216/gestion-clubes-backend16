/**
 * Este archivo define la estructura raíz del layout en Next.js.
 * Aplica la configuración global de fuentes, navbar y contexto del sidebar.
 * Renderiza el contenido principal en una estructura flexible con soporte para diseño responsive.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "../../components/context/SidebarContext";
import Navbar from "../../components/ui/Navbar";

// ✅ Importa las fuentes Geist para todo el proyecto
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadatos del sitio web
export const metadata: Metadata = {
  title: "UniClubs",
  description: "Sistema de gestión para clubes universitarios",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-[#0d0d0d]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white`}
      >
        {/* 🧠 Proveedor de contexto para el estado del sidebar */}
        <SidebarProvider>
          {/* 🔝 Navbar persistente en toda la aplicación */}
          <Navbar />

          <div className="flex min-h-screen w-full bg-[#0d0d0d] pt-[72px]">
            {/* 🟨 Espacio reservado para el sidebar (solo visible en pantallas grandes) */}
            <div className="hidden md:block w-72 shrink-0" />

            {/* 🟩 Contenido principal */}
            <main className="flex-1 w-full px-8 py-10 text-left">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
