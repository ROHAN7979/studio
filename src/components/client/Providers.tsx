"use client";

import { OrdersProvider } from "@/hooks/use-orders";
import { CafesProvider } from "@/hooks/use-cafes";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CafesProvider>
      <OrdersProvider>
        {children}
        <Toaster />
      </OrdersProvider>
    </CafesProvider>
  );
}
