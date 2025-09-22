"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { createUser } from "@/lib/user/services/user.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email(),
  phone: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
});

export function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const user = await createUser(data);
      // user = axios.then ->  User || axios.catch -> throw new Error
      if (user) {
        toast.success("Inscription réussie !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`Erreur: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-[400px]"
        >
          <div className="flex flex-col items-center text-center">
            <p className="font-bold text-2xl">Créer votre compte</p>
            <span className="opacity-60 whitespace-nowrap overflow-hidden overflow-ellipsis px-3">
              Rejoignez Nucleus UI et commencez à concevoir en toute simplicité
            </span>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre Nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Saisir votre email" {...field} />
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
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre mot de passe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrez votre numéro de téléphone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Addresse</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre adresse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <Button type="submit" className="bg-purple-700 rounded-full w-full">
              Créer un compte
            </Button>
            <div className="w-[355px] flex items-center text-gray-700">
              <div className="flex-1 border-t border-gray-300" />
              <span className="mx-4">OR</span>
              <div className="flex-1 border-t border-gray-300" />
            </div>
            <Button
              type="submit"
              className="bg-gray-200 rounded-full w-full text-black font-bold flex items-center px-4"
            >
              <FcGoogle className="size-6" />
              <span className="flex-1 text-center">Se connecter avec Google</span>
            </Button>
          </div>
          <p>Vous avez un compte? <span className="text-purple-700">Se connecter</span></p>
        </form>
      </Form>
    </>
  );
}
