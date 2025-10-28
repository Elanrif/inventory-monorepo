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
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '@/lib/user/services/user.service';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils/route';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Votre email doit être unique.',
  }),
  password: z.string().min(8, {
    message: 'Votre mot de passe doit contenir au moins 8 caractères.',
  }),
});

export default function Login() {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const user = await loginUser(data);
      if (user) {
        toast.success('Connexion réussie !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //nextNavigation to dashboard.
        route.push(ROUTES.DASHBOARD);
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
    }
  }
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-[450px space-y-5'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Saisir votre Email' {...field} />
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
                  <Input placeholder='Saisir votre mot de passe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <a href='#' className='text-md text-blue-500 hover:underline'>
            Mot de passe oublié ?
          </a>
          <div className='mt-4 flex items-center gap-31'>
            <p>Se souvenir des détails de connexion</p>
            <button
              type='button'
              onClick={() => setChecked((v) => !v)}
              className={`flex h-6 w-12 items-center rounded-full p-1 duration-300 ease-in-out ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <div
                className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            <Button type='submit' className='w-full rounded-full bg-purple-700'>
              Se connecter
            </Button>
            <div className='flex w-[355px] items-center text-gray-700'>
              <div className='flex-1 border-1 border-gray-300' />
              <span className='mx-2 text-gray-500'>OU</span>
              <div className='flex-1 border-1 border-gray-300' />
            </div>
            <Button
              type='submit'
              className='flex w-full items-center rounded-full bg-gray-200 px-4 font-bold text-black hover:bg-slate-200'
            >
              <FcGoogle className='size-6' />
              <span className='flex-1 text-center'>
                Se connecter avec Google
              </span>
            </Button>
          </div>
          <div className='opacity-60'>
            Vous n&apos;avez pas de compte?{' '}
            <Link href={ROUTES.REGISTER}>
              <span className='cursor-pointer font-bold text-purple-700 hover:underline'>
                S&apos;inscrire
              </span>
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
