'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  psNumber: z.string().min(1, { message: 'PS Number is required.' }),
});

export function UserLoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      psNumber: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock login logic
    localStorage.setItem('currentUserPsNumber', values.psNumber);
    router.push('/dashboard');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        <Button type="submit" className="w-full font-bold">
          Login
        </Button>
      </form>
    </Form>
  );
}
