'use client';

import { MenuPage } from '@/components/client/MenuPage';
import { Header } from '@/components/Header';
import { useCafes } from '@/hooks/use-cafes';
import { notFound, useParams } from 'next/navigation';
import type { Cafe } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function CafeMenuPage() {
  const { cafes } = useCafes();
  const params = useParams();
  const cafeId = Array.isArray(params.cafeId) ? params.cafeId[0] : params.cafeId;
  const [cafe, setCafe] = useState<Cafe | undefined>(undefined);
  
  useEffect(() => {
    if (cafes.length > 0 && cafeId) {
      const foundCafe = cafes.find((c) => c.id === cafeId);
      if (foundCafe) {
        setCafe(foundCafe);
      } else {
        // Handle case where cafe is not found once cafes are loaded
        notFound();
      }
    }
  }, [cafes, cafeId]);


  if (cafes.length === 0 || !cafe) {
     return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-8">
          <p>Loading...</p>
        </main>
      </div>
    );
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
