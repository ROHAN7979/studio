import { CafeDashboard } from '@/components/client/CafeDashboard';
import { Header } from '@/components/Header';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Select a Café</h1>
            <p className="text-muted-foreground">Choose a building to see the menu and place an order.</p>
          </div>
          <div className="mt-8">
            <CafeDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}
