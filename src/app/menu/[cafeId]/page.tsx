import { MenuPage } from '@/components/client/MenuPage';
import { Header } from '@/components/Header';
import { cafes } from '@/lib/data';
import { notFound } from 'next/navigation';

type Props = {
  params: { cafeId: string };
};

export default function CafeMenuPage({ params }: Props) {
  const cafe = cafes.find((c) => c.id === params.cafeId);

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
