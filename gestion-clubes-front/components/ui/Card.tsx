'use client';

import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-2xl shadow-lg p-6 border border-white/10 hover:border-yellow-400 transition-all duration-300">
      <h2 className="text-xl font-semibold text-yellow-400">{title}</h2>
      {subtitle && <p className="text-sm text-white/50 mb-4">{subtitle}</p>}
      <div>{children}</div>
    </div>
  );
}
