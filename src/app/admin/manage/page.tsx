import { CafeManager } from '@/components/client/CafeManager';
import { Header } from '@/components/Header';

export default function AdminManagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAdmin />
      <main className="flex-1">
        <div className="container py-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Cafes</h1>
            <p className="text-muted-foreground">Add, edit, or remove cafes from the list.</p>
          </div>
          <div className="mt-8">
            <CafeManager />
          </div>
        </div>
      </main>
    </div>
  );
}
