/**
 * Componente visual que representa una tarjeta de transacción financiera.
 * Muestra información sobre ingresos o gastos, incluyendo tipo, monto, descripción y fecha.
 * El color y estilo varían dinámicamente según el tipo de transacción.
 */

'use client';

import React from 'react';
import { TransactionType } from '@/types/transaction';

// Props que recibe la tarjeta de finanzas
interface FinanceCardProps {
  type: TransactionType;      // 'INCOME' o 'EXPENSE'
  amount: number;             // Monto en pesos colombianos
  description?: string;       // Descripción opcional
  date?: string;              // Fecha opcional en formato ISO
}

export default function FinanceCard({ type, amount, description, date }: FinanceCardProps) {
  // Formatea el monto en pesos colombianos sin decimales
  const formattedAmount = amount.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  // Determina si es ingreso o gasto y aplica colores/icono respectivos
  const isIncome = type === 'INCOME';
  const borderColor = isIncome ? 'border-green-500' : 'border-red-500';
  const textColor = isIncome ? 'text-green-400' : 'text-red-400';
  const icon = isIncome ? '⬆️' : '⬇️';

  return (
    <div
      className={`bg-[#1a1a1a] border-l-4 ${borderColor} p-5 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
    >
      {/* 🗓 Tipo de transacción y fecha */}
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-semibold ${textColor} tracking-wide`}>
          {icon} {isIncome ? 'Ingreso' : 'Gasto'}
        </span>
        {date && (
          <span className="text-xs text-white/50">
            {new Date(date).toLocaleDateString('es-CO', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        )}
      </div>

      {/* 💰 Monto */}
      <p className="text-white text-2xl font-bold leading-tight">{formattedAmount}</p>

      {/* 📝 Descripción */}
      {description && (
        <p className="text-sm text-white/60 mt-2 leading-snug">{description}</p>
      )}
    </div>
  );
}
