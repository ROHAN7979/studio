'use client';

import { useOrders } from '@/hooks/use-orders';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function UserOrders() {
  const { orders } = useOrders();

  const pendingOrders = orders.filter((o) => o.status === 'Pending').sort((a, b) => b.id.localeCompare(a.id));
  const completedOrders = orders.filter((o) => o.status === 'Completed').sort((a, b) => b.id.localeCompare(a.id));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight font-headline">Current Orders</h2>
        {pendingOrders.length === 0 ? (
          <p className="mt-4 text-muted-foreground">You have no active orders.</p>
        ) : (
          <div className="grid gap-6 mt-4 md:grid-cols-2">
            {pendingOrders.map((order) => (
              <Link href={`/order/${order.id}`} key={order.id} className="block group">
                <Card className="transition-all duration-300 ease-in-out group-hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Order <Badge variant="outline" className="font-mono text-accent-foreground bg-accent border-accent">{order.id}</Badge></CardTitle>
                       <Badge variant="secondary">{order.status}</Badge>
                    </div>
                     <CardDescription className="flex items-center gap-2 pt-2">
                        <Clock className="w-4 h-4"/>
                        <span>Estimated Wait: {order.estimatedTime}</span>
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="my-2" />
                     <ul className="text-sm list-disc list-inside text-muted-foreground">
                        {order.items.map((item) => (
                          <li key={item.id}>
                            {item.quantity}x {item.name}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between mt-4 font-bold">
                        <span>Total</span>
                        <span>₹{order.total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight font-headline">Past Orders</h2>
        {completedOrders.length === 0 ? (
          <p className="mt-4 text-muted-foreground">You have no completed orders yet.</p>
        ) : (
          <div className="grid gap-6 mt-4 md:grid-cols-2">
            {completedOrders.map((order) => (
              <Card key={order.id} className="opacity-70">
                <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Order <Badge variant="default" className="font-mono">{order.id}</Badge></CardTitle>
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="w-5 h-5"/>
                        <span className="font-semibold">{order.status}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Separator className="my-2" />
                    <ul className="text-sm list-disc list-inside text-muted-foreground">
                        {order.items.map((item) => (
                          <li key={item.id}>
                            {item.quantity}x {item.name}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between mt-4 font-semibold">
                        <span>Total</span>
                        <span>₹{order.total.toFixed(2)}</span>
                    </div>
                  </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
