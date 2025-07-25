import { AdminLoginForm } from '@/components/client/AdminLoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
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
              <Settings className="w-12 h-12 text-primary"/>
            </div>
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>Login to manage cafe listings</CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
          <p className="mt-4 text-sm text-center text-muted-foreground">
            Are you a Cafe Owner?{' '}
            <Link href="/owner/login" className="font-semibold text-primary hover:underline">
              Owner Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
