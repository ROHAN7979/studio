import { UserOrders } from '@/components/client/UserOrders';
import { Header } from '@/components/Header';

export default function OrdersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight font-headline">My Orders</h1>
            <p className="text-muted-foreground">Here's a history of your recent orders.</p>
          </div>
          <div className="mt-8">
            <UserOrders />
          </div>
        </div>
      </main>
    </div>
  );
}
