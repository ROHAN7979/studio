'use client';

import { MenuPage } from '@/components/client/MenuPage';
import { Header } from '@/components/Header';
import { useCafes } from '@/hooks/use-cafes';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Cafe } from '@/lib/types';

type Props = {
  params: { cafeId: string };
};

export default function CafeMenuPage({ params }: Props) {
  const { cafes } = useCafes();
  const [cafe, setCafe] = useState<Cafe | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCafe = cafes.find((c) => c.id === params.cafeId);
    setCafe(foundCafe);
    setLoading(false);
  }, [cafes, params.cafeId]);

  if (loading) {
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
