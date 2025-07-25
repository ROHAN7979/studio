'use client';

import type { Cafe } from '@/lib/types';
import { useCafes } from '@/hooks/use-cafes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export function CafeDashboard() {
  const { cafes } = useCafes();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cafes.map((cafe) => (
        <Link href={`/menu/${cafe.id}`} key={cafe.id} className="block group">
          <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="relative w-full h-48">
              <Image 
                src={cafe.image}
                alt={`Image of ${cafe.name}`}
                fill
                className="object-cover"
                data-ai-hint={cafe.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{cafe.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{cafe.building}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
