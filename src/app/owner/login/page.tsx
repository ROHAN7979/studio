import { OwnerLoginForm } from '@/components/client/OwnerLoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function OwnerLoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Coffee className="w-8 h-8"/>
          <span className="font-headline">LTTS Smart Eats</span>
        </Link>
      </div>
      <Card className="w-full max-w-sm mx-4">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-primary"/>
            </div>
          <CardTitle className="text-2xl font-headline">Owner Login</CardTitle>
          <CardDescription>Login to manage cafe orders</CardDescription>
        </CardHeader>
        <CardContent>
          <OwnerLoginForm />
           <p className="mt-4 text-sm text-center text-muted-foreground">
            Are you a Cafe Administrator?{' '}
            <Link href="/admin/login" className="font-semibold text-primary hover:underline">
              Admin Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
