'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import { createCategory } from '@/lib/category/services/category.service';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils/route';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Card, CardContent, CardHeader } from '../ui/card';

const statusOptions = [
  {
    value: 'ACTIVE',
    label: 'Active',
  },
  {
    value: 'INACTIVE',
    label: 'Inactive',
  },
];
const featuredOptions = [
  { value: 'true', label: 'Oui' },
  { value: 'false', label: 'Non' },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom de la catégorie doit comporter au moins 2 caractères.',
  }),
  description: z.string().min(2, {
    message: 'La description doit comporter au moins 2 caractères.',
  }),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  isFeatured: z.boolean().optional(),
  imageUrl: z.string(),
});

export function CreateCategory({ className }: { className?: string }) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      imageUrl: '',
      status: 'INACTIVE',
      isFeatured: false,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const category = await createCategory(data);
      if (category) {
        toast.success('Categorie ajoutée avec succès !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        route.push(ROUTES.DASHBOARD_CATEGORIES);
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`Erreur: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  }

  return (
    <div className='flex w-full items-center justify-center px-2'>
      <Card className='w-full max-w-lg shadow-md'>
        <CardHeader></CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={`w-[450px] space-y-6 ${className}}`}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de la catégorie</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Entrez le nom de la catégorie'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Saisissez la description'
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='imageUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez l'URL de l'image" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex flex-col items-center gap-4'>
                <div className='flex w-full items-center justify-between gap-4'>
                  <FormField
                    control={form.control}
                    name='status'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder='Choisir le status...' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                {statusOptions.map((status, index) => (
                                  <SelectItem key={index} value={status.value}>
                                    {status.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='isFeatured'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mise en avant</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value ? 'true' : 'false'}
                            onValueChange={(v) => field.onChange(v === 'true')}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder='Choisir la mise en avant' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Mise en avant</SelectLabel>
                                {featuredOptions.map((option, item) => (
                                  <SelectItem key={item} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full rounded-full bg-purple-700 hover:bg-purple-800'
                >
                  <span>Ajouter une catégorie</span>
                  {loading && <Loader2 className='ml-2 h-4 w-4 animate-spin' />}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
