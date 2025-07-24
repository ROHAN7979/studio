'use client';

import { useOrders } from '@/hooks/use-orders';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Order } from '@/lib/types';
import { CircleCheck, Clock } from 'lucide-react';
import QRCode from "react-qr-code";

type Props = {
    orderId: string;
}

export function OrderConfirmationPage({ orderId }: Props) {
    const { orders } = useOrders();
    const [order, setOrder] = useState<Order | undefined>(undefined);

    useEffect(() => {
        const foundOrder = orders.find(o => o.id === orderId);
        setOrder(foundOrder);
    }, [orders, orderId]);

    if (!order) {
        return (
            <Card className="w-full max-w-md mx-4 text-center">
                <CardHeader>
                    <CardTitle>Order Not Found</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>We couldn't find details for this order. It might have been cleared or there was an error.</p>
                    <Button asChild className="mt-4 font-bold">
                        <Link href="/dashboard">Back to Dashboard</Link>
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-md mx-4 text-center">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <CircleCheck className="w-16 h-16 text-green-500"/>
                </div>
                <CardTitle className="text-3xl font-headline">Order Confirmed!</CardTitle>
                <CardDescription>Your order has been placed successfully.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                     <p className="mb-2 text-sm text-muted-foreground">Your Order Token</p>
                    <div className="flex justify-center p-4 bg-white rounded-lg">
                       <QRCode value={order.id} size={128} />
                    </div>
                     <Badge variant="outline" className="px-6 py-2 mt-4 text-2xl font-bold tracking-widest text-accent-foreground bg-accent border-accent">
                        {order.id}
                    </Badge>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Estimated Wait Time</p>
                    <p className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                        <Clock className="w-5 h-5"/>
                        {order.estimatedTime}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="text-lg font-semibold">₹{order.total.toFixed(2)}</p>
                </div>
                <Button asChild className="w-full font-bold">
                    <Link href="/dashboard">Order More Food</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
