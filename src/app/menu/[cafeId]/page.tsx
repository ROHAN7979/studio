'use client';

import { MenuPage } from '@/components/client/MenuPage';
import { Header } from '@/components/Header';
import { useCafes } from '@/hooks/use-cafes';
import { notFound } from 'next/navigation';
import type { Cafe } from '@/lib/types';

type Props = {
  params: { cafeId: string };
};

export default function CafeMenuPage({ params }: Props) {
  const { cafes } = useCafes();
  
  // Directly find the cafe. The useCafes hook handles the loading state.
  const cafe = cafes.find((c) => c.id === params.cafeId);

  if (cafes.length === 0) {
     return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-8">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (!cafe) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MenuPage cafe={cafe} />
      </main>
    </div>
  );
}
