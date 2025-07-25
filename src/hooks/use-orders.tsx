'use client';

import type { Order } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'userId' | 'status'>) => void;
  updateOrderStatus: (orderId: string, status: 'Pending' | 'Completed') => void;
  clearOrders: () => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

const ORDERS_STORAGE_KEY = 'campus-cafe-orders';
const USER_ID_STORAGE_KEY = 'currentUserPsNumber';


export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch (error) {
      console.error('Failed to parse orders from localStorage', error);
      setOrders([]);
    }
  }, []);

  const saveOrders = (updatedOrders: Order[]) => {
    try {
      setOrders(updatedOrders);
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders));
    } catch (error) {
      console.error('Failed to save orders to localStorage', error);
    }
  };

  const addOrder = (order: Omit<Order, 'userId' | 'status'>) => {
    const userId = localStorage.getItem(USER_ID_STORAGE_KEY) || 'guest';
    const newOrder: Order = {
        ...order,
        userId,
        status: 'Pending',
    }
    const updatedOrders = [...orders, newOrder];
    saveOrders(updatedOrders);
  };

  const updateOrderStatus = (orderId: string, status: 'Pending' | 'Completed') => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status } : order
    );
    saveOrders(updatedOrders);
  };
  
  const clearOrders = () => {
    saveOrders([]);
  }

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus, clearOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
