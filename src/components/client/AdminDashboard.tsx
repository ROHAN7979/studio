'use client';

import { useOrders } from '@/hooks/use-orders';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Trash } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AdminDashboard() {
  const { orders, updateOrderStatus, clearOrders } = useOrders();

  const pendingOrders = orders.filter(o => o.status === 'Pending').sort((a, b) => a.id.localeCompare(b.id));
  const completedOrders = orders.filter(o => o.status === 'Completed').sort((a, b) => b.id.localeCompare(a.id));

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle>Order Queue</CardTitle>
        <Button variant="destructive" onClick={() => clearOrders()} disabled={orders.length === 0}>
            <Trash className="w-4 h-4 mr-2"/>
            Clear All Orders
        </Button>
      </CardHeader>
      <CardContent>
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-lg bg-muted/50">
             <Alert className="max-w-sm mx-auto">
                <AlertTitle className="font-headline">No orders yet!</AlertTitle>
                <AlertDescription>
                New orders from customers will appear here automatically.
                </AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-sm font-bold text-accent-foreground bg-accent border-accent">
                        {order.id}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <ul className="text-sm list-disc list-inside">
                        {order.items.map((item) => (
                          <li key={item.id}>
                            {item.quantity}x {item.name}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="text-right font-medium">Rs. {order.total.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="secondary">{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" onClick={() => updateOrderStatus(order.id, 'Completed')}>
                          <Check className="w-4 h-4 mr-2"/>
                        Mark Completed
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {completedOrders.map((order) => (
                   <TableRow key={order.id} className="bg-muted/50">
                      <TableCell>
                        <Badge variant="default" className="font-mono text-sm font-bold opacity-70">
                          {order.id}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="text-sm list-disc list-inside">
                          {order.items.map((item) => (
                            <li key={item.id}>
                              {item.quantity}x {item.name}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell className="text-right font-medium text-muted-foreground">Rs. {order.total.toFixed(2)}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="default" className="opacity-70">{order.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                          -
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
