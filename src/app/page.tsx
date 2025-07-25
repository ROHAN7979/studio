import { Button } from "@/components/ui/button";
import { Coffee, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <div className="absolute top-0 left-0 p-4 md:p-6">
        <div className="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
          <Coffee className="w-8 h-8"/>
          <span className="font-headline">LTTS Smart Eats</span>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          Your Campus Coffee, Faster.
        </h1>
        <p className="max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
          Skip the line. Order ahead from your favorite campus cafes and get notified when it's ready.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8 sm:flex-row">
        <Button asChild size="lg" className="font-bold">
          <Link href="/login">
            <Coffee className="mr-2"/> Order Food
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="font-bold">
          <Link href="/owner/login">
            <ShieldCheck className="mr-2"/> Owner Login
          </Link>
        </Button>
      </div>
    </div>
  );
}
