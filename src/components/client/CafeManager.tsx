'use client';

import { useCafes } from '@/hooks/use-cafes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil, Plus, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import type { Cafe } from '@/lib/types';
import { Separator } from '../ui/separator';

const cafeSchema = z.object({
  name: z.string().min(1, 'Cafe name is required.'),
  building: z.string().min(1, 'Building is required.'),
  image: z.string().url('Must be a valid URL.'),
  imageHint: z.string().min(1, 'Image hint is required.'),
});

type CafeFormValues = z.infer<typeof cafeSchema>;

function CafeDialog({ onSave, cafe, children }: { onSave: (values: CafeFormValues) => void; cafe?: Cafe | null, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const form = useForm<CafeFormValues>({
    resolver: zodResolver(cafeSchema),
    defaultValues: cafe || {
      name: '',
      building: '',
      image: 'https://placehold.co/600x400.png',
      imageHint: '',
    },
  });

  const handleSubmit = (values: CafeFormValues) => {
    onSave(values);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{cafe ? 'Edit Cafe' : 'Add New Cafe'}</DialogTitle>
          <DialogDescription>
            {cafe ? 'Update the details for this cafe.' : 'Fill in the details for the new cafe.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cafe Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="building"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageHint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Hint</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. south indian food" />
                  </FormControl>
                   <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Save Cafe</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


export function CafeManager() {
  const { cafes, addCafe, updateCafe, removeCafe } = useCafes();

  const handleAddCafe = (values: CafeFormValues) => {
    addCafe(values);
  };

  const handleUpdateCafe = (cafeId: string, values: CafeFormValues) => {
    updateCafe(cafeId, values);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Cafe List</CardTitle>
        <CafeDialog onSave={handleAddCafe}>
            <Button><Plus className="mr-2"/> Add Cafe</Button>
        </CafeDialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cafes.map((cafe) => (
            <div key={cafe.id}>
                <div className="flex items-center justify-between p-4 rounded-md hover:bg-muted/50">
                <div>
                    <h3 className="font-semibold">{cafe.name}</h3>
                    <p className="text-sm text-muted-foreground">{cafe.building}</p>
                </div>
                <div className="flex items-center gap-2">
                    <CafeDialog onSave={(values) => handleUpdateCafe(cafe.id, values)} cafe={cafe}>
                        <Button variant="outline" size="icon"><Pencil className="w-4 h-4"/></Button>
                    </CafeDialog>
                    <Button variant="destructive" size="icon" onClick={() => removeCafe(cafe.id)}>
                        <Trash className="w-4 h-4"/>
                    </Button>
                </div>
                </div>
                <Separator/>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
