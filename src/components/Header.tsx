import { Coffee, History } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

type HeaderProps = {
    isAdmin?: boolean;
}

export function Header({ isAdmin = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <Link href={isAdmin ? "/admin/dashboard" : "/dashboard"} className="flex items-center gap-2 mr-6">
          <Coffee className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold font-headline">
            LTTS Smart Eats
          </span>
        </Link>
        <div className="flex items-center flex-1 gap-4 sm:justify-end">
            {!isAdmin && (
              <Button asChild variant="outline">
                <Link href="/orders">
                  <History className="mr-2" />
                  My Orders
                </Link>
              </Button>
            )}
            <Button asChild variant="ghost">
                <Link href="/">Logout</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
