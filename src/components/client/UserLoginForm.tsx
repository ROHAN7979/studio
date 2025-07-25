'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

const formSchema = z.object({
  psNumber: z.string().min(1, { message: 'PS Number is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export function UserLoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      psNumber: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    // Mock login logic for any PS number and password
    if (values.psNumber && values.password) {
        localStorage.setItem('currentUserPsNumber', values.psNumber);
        router.push('/dashboard');
    } else {
        setError('Please enter your PS Number and password.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
            <Alert variant="destructive">
                <AlertCircle className="w-4 h-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>
                    {error}
                </AlertDescription>
            </Alert>
        )}
        <FormField
          control={form.control}
          name="psNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PS Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 1234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold">
          Login
        </Button>
      </form>
    </Form>
  );
}
