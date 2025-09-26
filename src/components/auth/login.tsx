"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "@/lib/user/services/user.service";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/route";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Votre email doit être unique.",
  }),
  password: z.string().min(8, {
    message: "Votre mot de passe doit contenir au moins 8 caractères.",
  }),
});

export default function Login() {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const user = await loginUser(data);
      if (user) {
        toast.success("Connexion réussie !", {
          position: "top-right",
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
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-[450px">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Saisir votre Email" {...field} />
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
                  <Input placeholder="Saisir votre mot de passe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <a href="#" className="text-md text-blue-500 hover:underline">
            Mot de passe oublié ?
          </a>
          <div className="flex items-center gap-31 mt-4">
            <p>Se souvenir des détails de connexion</p>
            <button
              type="button"
              onClick={() => setChecked((v) => !v)}
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out
                    ${checked ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                      ${checked ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Button type="submit" className="bg-purple-700 rounded-full w-full">
              Se connecter
            </Button>
            <div className="w-[355px] flex items-center text-gray-700">
              <div className="flex-1 border-1 border-gray-300" />
              <span className="mx-2 text-gray-500">OU</span>
              <div className="flex-1 border-1 border-gray-300" />
            </div>
            <Button
              type="submit"
              className="bg-gray-200 hover:bg-slate-200 rounded-full w-full text-black font-bold flex items-center px-4"
            >
              <FcGoogle className="size-6" />
              <span className="flex-1 text-center">
                Se connecter avec Google
              </span>
            </Button>
          </div>
          <div className="opacity-60">
            Vous n&apos;avez pas de compte?{" "}
            <Link href={ROUTES.REGISTER}>
              <span className="text-purple-700 hover:underline cursor-pointer font-bold">
                S&apos;inscrire
              </span>
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
