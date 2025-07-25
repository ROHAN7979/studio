'use client';

import type { Cafe, MenuItem } from '@/lib/types';
import { initialCafes } from '@/lib/data';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CafesContextType {
  cafes: Cafe[];
  addCafe: (cafe: Omit<Cafe, 'id' | 'menu'>) => void;
  updateCafe: (cafeId: string, cafe: Omit<Cafe, 'id' | 'menu'>) => void;
  removeCafe: (cafeId: string) => void;
  addMenuItem: (cafeId: string, item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (cafeId: string, itemId: string, item: Omit<MenuItem, 'id'>) => void;
  removeMenuItem: (cafeId: string, itemId: string) => void;
}

const CafesContext = createContext<CafesContextType | undefined>(undefined);

const CAFES_STORAGE_KEY = 'campus-cafe-cafes';

export const CafesProvider = ({ children }: { children: ReactNode }) => {
  const [cafes, setCafes] = useState<Cafe[]>([]);

   useEffect(() => {
    try {
      const storedCafes = localStorage.getItem(CAFES_STORAGE_KEY);
      if (storedCafes) {
        setCafes(JSON.parse(storedCafes));
      } else {
        setCafes(initialCafes);
      }
    } catch (error) {
      console.error('Failed to parse cafes from localStorage', error);
      setCafes(initialCafes);
    }
  }, []);

  const saveCafes = (updatedCafes: Cafe[]) => {
    try {
      setCafes(updatedCafes);
      localStorage.setItem(CAFES_STORAGE_KEY, JSON.stringify(updatedCafes));
    } catch (error) {
      console.error('Failed to save cafes to localStorage', error);
    }
  };

  const addCafe = (cafe: Omit<Cafe, 'id' | 'menu'>) => {
    const newCafe: Cafe = {
        ...cafe,
        id: cafe.name.toLowerCase().replace(/\s+/g, '-'),
        menu: [],
    }
    const updatedCafes = [...cafes, newCafe];
    saveCafes(updatedCafes);
  };

  const updateCafe = (cafeId: string, cafeData: Omit<Cafe, 'id' | 'menu'>) => {
    const updatedCafes = cafes.map((cafe) =>
      cafe.id === cafeId ? { ...cafe, ...cafeData, id: cafeData.name.toLowerCase().replace(/\s+/g, '-') } : cafe
    );
    saveCafes(updatedCafes);
  };

  const removeCafe = (cafeId: string) => {
    const updatedCafes = cafes.filter(cafe => cafe.id !== cafeId);
    saveCafes(updatedCafes);
  }

  const addMenuItem = (cafeId: string, item: Omit<MenuItem, 'id'>) => {
    const updatedCafes = cafes.map(cafe => {
        if (cafe.id === cafeId) {
            const newItem: MenuItem = {
                ...item,
                id: `${cafeId}-${Math.random().toString(36).substr(2, 9)}`,
            };
            return { ...cafe, menu: [...cafe.menu, newItem] };
        }
        return cafe;
    });
    saveCafes(updatedCafes);
  };

  const updateMenuItem = (cafeId: string, itemId: string, itemData: Omit<MenuItem, 'id'>) => {
    const updatedCafes = cafes.map(cafe => {
        if (cafe.id === cafeId) {
            const updatedMenu = cafe.menu.map(item => item.id === itemId ? { ...item, ...itemData } : item);
            return { ...cafe, menu: updatedMenu };
        }
        return cafe;
    });
    saveCafes(updatedCafes);
  };

  const removeMenuItem = (cafeId: string, itemId: string) => {
    const updatedCafes = cafes.map(cafe => {
        if (cafe.id === cafeId) {
            const updatedMenu = cafe.menu.filter(item => item.id !== itemId);
            return { ...cafe, menu: updatedMenu };
        }
        return cafe;
    });
    saveCafes(updatedCafes);
  };


  return (
    <CafesContext.Provider value={{ cafes, addCafe, updateCafe, removeCafe, addMenuItem, updateMenuItem, removeMenuItem }}>
      {children}
    </CafesContext.Provider>
  );
};

export const useCafes = () => {
  const context = useContext(CafesContext);
  if (context === undefined) {
    throw new Error('useCafes must be used within a CafesProvider');
  }
  return context;
};
