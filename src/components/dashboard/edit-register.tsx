'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { updateUser } from '@/lib/user/services/user.service';
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
import { ROUTES } from '@/utils/route';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserReqDTO } from '@/lib/user/models/user.model';

type ResgisterProps = {
  className?: string;
  editUser: UserReqDTO & { id: number };
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
  }),
  email: z.email(),
  phone: z.string().min(2, {
    message: "L'adresse mail doit comporter au moins 2 caractères.",
  }),
  password: z.string().min(8, {
    message: 'Le mot de passe doit comporter au moins 8 caractères.',
  }),
  address: z.string().min(2, {
    message: 'Le adresse doit comporter au moins 2 caractères.',
  }),
});

export function EditRegister({ className, editUser }: ResgisterProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: editUser.username,
      email: editUser.email,
      password: '',
      phone: editUser.phone,
      address: editUser.address,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const user = await updateUser(editUser.id, data);
      // user = axios.then ->  User || axios.catch -> throw new Error
      if (user) {
        toast.success('Modification réussie !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        route.push(ROUTES.DASHBOARD_USERS);
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-[450px] space-y-4 ${className}`}
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Nom de l&apos;utilisateur</FormLabel>
                <FormControl>
                  <Input placeholder='Entrez votre Nom' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Saisissez votre email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Mot de passe</FormLabel>
                <FormControl>
                  <Input placeholder='Entrez votre mot de passe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Téléphone</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Entrez votre numéro de téléphone'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Adresse</FormLabel>
                <FormControl>
                  <Input placeholder='Entrez votre adresse' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col items-center gap-4'>
            <Button type='submit' className='w-full rounded-full bg-purple-700'>
              <span>Modifier le compte</span>
              {loading && <Loader2 className='ml-2 h-4 w-4 animate-spin' />}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
