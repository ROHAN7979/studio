import { AdminDashboard } from '@/components/client/AdminDashboard';
import { OrderAnalysis } from '@/components/client/OrderAnalysis';
import { Header } from '@/components/Header';
import { Separator } from '@/components/ui/separator';

export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header isAdmin />
            <main className="flex-1">
                <div className="container py-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight font-headline">Incoming Orders</h1>
                        <p className="text-muted-foreground">Manage and fulfill customer orders.</p>
                    </div>
                    <div className="mt-8">
                       <AdminDashboard />
                    </div>

                    <Separator className="my-12" />
                    
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight font-headline">Order Analysis</h2>
                        <p className="text-muted-foreground">Insights into customer orders and popular items.</p>
                    </div>
                     <div className="mt-8">
                        <OrderAnalysis />
                    </div>
                </div>
            </main>
        </div>
    );
}
