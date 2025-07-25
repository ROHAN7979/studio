'use client';

import { Button } from "@/components/ui/button";
import { Coffee, ShieldCheck, Soup, Sandwich, CupSoda } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 md:p-6">
        <div className="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
          <Coffee className="w-8 h-8"/>
          <span className="font-headline">LTTS Smart Eats</span>
        </div>
      </header>

      <main className="flex-1">
        <div className="container grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Your Campus Coffee, Faster.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-foreground/80 md:text-xl lg:mx-0">
              Skip the line. Order ahead from your favorite campus cafes and get notified when it's ready.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
               <div className="absolute -top-16 -left-16 w-32 h-32 bg-accent rounded-full opacity-20 animate-blob"></div>
               <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary rounded-full opacity-20 animate-blob animation-delay-2000"></div>
               <div className="absolute -bottom-8 -left-24 w-24 h-24 bg-secondary rounded-full opacity-30 animate-blob animation-delay-4000"></div>

              <div className="relative grid grid-cols-3 gap-4 p-8 rounded-lg bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-center p-6 bg-background rounded-lg shadow-md aspect-square transform hover:scale-110 transition-transform">
                  <Soup className="w-12 h-12 text-accent" />
                </div>
                <div className="flex items-center justify-center p-6 bg-background rounded-lg shadow-md aspect-square transform hover:scale-110 transition-transform mt-8">
                  <Sandwich className="w-12 h-12 text-primary" />
                </div>
                <div className="flex items-center justify-center p-6 bg-background rounded-lg shadow-md aspect-square transform hover:scale-110 transition-transform">
                  <CupSoda className="w-12 h-12 text-accent" />
                </div>
                 <div className="flex items-center justify-center p-6 bg-background rounded-lg shadow-md aspect-square transform hover:scale-110 transition-transform -mt-4 ml-12">
                  <Coffee className="w-12 h-12 text-primary" />
                </div>
                 <div className="flex items-center justify-center p-6 bg-background rounded-lg shadow-md aspect-square transform hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21H7a2 2 0 0 1-2-2v-2.5a3.5 3.5 0 0 1 7 0V19a2 2 0 0 1-2 2Z"/><path d="M15.5 21a2.5 2.5 0 0 0 0-5v-1a5 5 0 0 0-5-5H12a5 5 0 0 0-5 5v1a2.5 2.5 0 0 0 0 5"/><path d="M12 10V4a2 2 0 1 1 4 0v2"/><path d="M12 9a2 2 0 1 0-4 0v1"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}
