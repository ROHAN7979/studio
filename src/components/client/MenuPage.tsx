'use client';

import type { Cafe, CartItem, MenuItem as MenuItemType } from '@/lib/types';
import { predictWaitingTime } from '@/ai/flows/predict-waiting-time';
import { useOrders } from '@/hooks/use-orders';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Clock, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';
import { PaymentDialog } from './PaymentDialog';
import Image from 'next/image';

type MenuPageProps = {
  cafe: Cafe;
};

export function MenuPage({ cafe }: MenuPageProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrdering, setIsOrdering] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(true);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  
  const { addOrder } = useOrders();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchWaitTime = async () => {
      setIsPredicting(true);
      try {
        const pendingOrders = Math.floor(Math.random() * 20) + 1; // Simulate pending orders
        const prediction = await predictWaitingTime({ pendingOrders });
        setEstimatedTime(prediction.estimatedTime);
      } catch (error) {
        console.error('Error predicting waiting time:', error);
        setEstimatedTime('5-10 minutes'); // Fallback
      } finally {
        setIsPredicting(false);
      }
    };

    fetchWaitTime();
  }, []);

  const addToCart = (item: MenuItemType) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter((item) => item.id !== itemId);
      }
      return currentCart.map((item) => (item.id === itemId ? { ...item, quantity } : item));
    });
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handlePlaceOrder = () => {
    if (!estimatedTime) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not get an estimated waiting time. Please try again.",
        });
        return;
    }
    setIsPaymentDialogOpen(true);
  };
  
  const handleConfirmPayment = async () => {
    if (!estimatedTime) return;
    
    setIsOrdering(true);
    setIsPaymentDialogOpen(false);
    
    const orderId = `CCC-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    addOrder({
      id: orderId,
      items: cart,
      total: cartTotal,
      estimatedTime: estimatedTime,
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    router.push(`/order/${orderId}`);
    setIsOrdering(false);
  };

  return (
    <>
    <div className="container grid gap-12 py-8 md:grid-cols-3 lg:grid-cols-4">
      <div className="md:col-span-2 lg:col-span-3">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight font-headline">{cafe.name}</h1>
            <p className="text-muted-foreground">Browse the menu and add items to your cart.</p>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 xl:grid-cols-3">
          {cafe.menu.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="flex-grow">
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                </div>
                <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                 <p className="font-semibold text-primary">Rs. {item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-bold" onClick={() => addToCart(item)}>
                  <Plus className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <aside className="md:col-span-1 lg:col-span-1">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <ShoppingCart className="w-6 h-6" /> Your Order
            </CardTitle>
            <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Estimated Wait:</span>
                {isPredicting ? (
                    <span className="font-semibold text-primary animate-pulse">Predicting...</span>
                ) : (
                    <span className="font-semibold text-primary">{estimatedTime}</span>
                )}
            </div>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className="py-10 text-center text-muted-foreground">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Rs. {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="w-6 h-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="w-3 h-3"/></Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="w-6 h-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="w-3 h-3"/></Button>
                          <Button variant="ghost" size="icon" className="w-6 h-6 text-destructive/70 hover:text-destructive" onClick={() => updateQuantity(item.id, 0)}><Trash2 className="w-4 h-4"/></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator/>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs. {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            )}
          </CardContent>
          {cart.length > 0 && (
            <CardFooter>
              <Button className="w-full font-bold" onClick={handlePlaceOrder} disabled={isOrdering || isPredicting}>
                {isOrdering ? 'Placing Order...' : 'Place Order'}
              </Button>
            </CardFooter>
          )}
        </Card>
      </aside>
    </div>
    <PaymentDialog 
        open={isPaymentDialogOpen}
        onOpenChange={setIsPaymentDialogOpen}
        totalAmount={cartTotal}
        onConfirm={handleConfirmPayment}
    />
    </>
  );
}
