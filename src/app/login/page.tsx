import { UserLoginForm } from '@/components/client/UserLoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee } from 'lucide-react';
import Link from 'next/link';

export default function UserLoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Coffee className="w-8 h-8"/>
          <span className="font-headline">Campus Cafe Connect</span>
        </Link>
      </div>
      <Card className="w-full max-w-sm mx-4">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
             <Coffee className="w-12 h-12 text-primary"/>
          </div>
          <CardTitle className="text-2xl font-headline">Student Login</CardTitle>
          <CardDescription>Enter your PS Number to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <UserLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
