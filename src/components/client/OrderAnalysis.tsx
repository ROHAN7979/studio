'use client';

import { useOrders } from '@/hooks/use-orders';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function OrderAnalysis() {
  const { orders } = useOrders();

  const analysis = useMemo(() => {
    if (orders.length === 0) {
      return { topCustomers: [], popularItems: [], prebookedMeals: [] };
    }

    // Customer analysis
    const customerOrders = new Map<string, number>();
    orders.forEach(order => {
      customerOrders.set(order.userId, (customerOrders.get(order.userId) || 0) + 1);
    });
    const topCustomers = Array.from(customerOrders.entries())
      .map(([userId, orderCount]) => ({ name: userId, 'Number of Orders': orderCount }))
      .sort((a, b) => b['Number of Orders'] - a['Number of Orders'])
      .slice(0, 5);

    // Item analysis
    const itemCounts = new Map<string, number>();
    const prebookedCounts = new Map<string, number>();

    orders.forEach(order => {
      order.items.forEach(item => {
        // Increment total item counts
        itemCounts.set(item.name, (itemCounts.get(item.name) || 0) + item.quantity);
        
        // Increment pre-booked counts if applicable
        if (item.description.includes('(Pre-book only)')) {
          prebookedCounts.set(item.name, (prebookedCounts.get(item.name) || 0) + item.quantity);
        }
      });
    });

    const popularItems = Array.from(itemCounts.entries())
      .map(([name, count]) => ({ name, 'Times Ordered': count }))
      .sort((a, b) => b['Times Ordered'] - a['Times Ordered'])
      .slice(0, 5);

    const prebookedMeals = Array.from(prebookedCounts.entries())
      .map(([name, count]) => ({ name, 'Times Pre-booked': count }))
      .sort((a, b) => b['Times Pre-booked'] - a['Times Pre-booked']);

    return { topCustomers, popularItems, prebookedMeals };
  }, [orders]);

  if (orders.length === 0) {
    return (
        <Alert className="max-w-sm mx-auto">
            <AlertTitle className="font-headline">No data to analyze!</AlertTitle>
            <AlertDescription>
                Once orders are placed, you'll see analysis here.
            </AlertDescription>
        </Alert>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Customers</CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysis.topCustomers} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Number of Orders" fill="hsl(var(--primary))" />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Most Popular Items</CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysis.popularItems} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={120} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Times Ordered" fill="hsl(var(--accent))" />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      {analysis.prebookedMeals.length > 0 && (
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pre-booked Meal Analysis</CardTitle>
          </CardHeader>
          <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analysis.prebookedMeals} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis allowDecimals={false}/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Times Pre-booked" fill="hsl(var(--chart-2))" />
                  </BarChart>
              </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
