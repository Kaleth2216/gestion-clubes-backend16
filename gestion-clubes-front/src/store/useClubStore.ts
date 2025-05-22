/**
 * Este archivo define el estado global de clubes usando Zustand.
 * Administra la selección de club actual y permite obtener desde el backend
 * la lista de clubes, eventos y transacciones asociadas.
 */

import { create } from 'zustand';
import axios from '@/lib/axios';

type Club = {
  id: string;
  name: string;
  founder: string;
  description: string;
  foundedYear?: string;
};

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
};

type Transaction = {
  id: string;
  type: 'INCOME' | 'EXPENSE';
  amount: number;
  description?: string;
  createdAt: string;
};

type ClubStore = {
  clubs: Club[];
  events: Event[];
  transactions: Transaction[];
  selectedClub: Club | null;

  // Setters
  setSelectedClub: (club: Club) => void;

  // Fetchers
  fetchClubs: () => Promise<void>;
  fetchEvents: () => Promise<void>;
  fetchTransactions: () => Promise<void>;
};

export const useClubStore = create<ClubStore>((set, get) => ({
  clubs: [],
  events: [],
  transactions: [],
  selectedClub: null,

  setSelectedClub: (club) => set({ selectedClub: club }),

  fetchClubs: async () => {
    try {
      const { data } = await axios.get('/clubs');
      set({ clubs: data });
    } catch (error) {
      console.error('Error cargando clubes:', error);
    }
  },

  fetchEvents: async () => {
    const clubId = get().selectedClub?.id;
    if (!clubId) return;

    try {
      const { data } = await axios.get(`/events?clubId=${clubId}`);
      set({ events: data });
    } catch (error) {
      console.error('Error cargando eventos:', error);
    }
  },

  fetchTransactions: async () => {
    const clubId = get().selectedClub?.id;
    if (!clubId) return;

    try {
      const { data } = await axios.get(`/finances?clubId=${clubId}`);
      set({ transactions: data });
    } catch (error) {
      console.error('Error cargando transacciones:', error);
    }
  },
}));
