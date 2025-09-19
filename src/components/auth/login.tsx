"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaBowlingBall } from 'react-icons/fa'
import React, { useState } from 'react'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Votre email doit être unique.",
  }),
  password: z.string().min(8, {
    message: "Votre mot de passe doit contenir au moins 8 caractères.",
  }),
})

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex min-h-screen rounded-3xl overflow-hidden m-4 ">
      <div className="relative w-1/3 h-screen">
        <Image
          src="/images/loginImage.jpg"
          alt="Description de l'image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" >
            <div className="absolute bottom-0 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-4xl font-bold mb-4">Simply all the tools that <br />
                my team and i need.</h1>
                <p className=""><span className='font-bold'>Karen Yue</span><br />
                Director of Digital Marketing Technologie</p>
            </div>
            <div className="absolute top-5 left-10 m-4 flex items-center gap-2">
                <p><FaBowlingBall  className='text-white text-2xl' /></p>
                <p className='text-white text-2xl'>Nucleus</p>
            </div>
        </div>
      </div>
      <div className="w-2/3  flex flex-col gap-5 items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-start ">
            <h2 className="text-3xl font-bold mb-6">Welcome back to Nucleus</h2>
            <p className="text-slate-600 text-center">
                Build your design system effortlessly with our <br /> powerful components library.
            </p>
        </div>
        <div className="w-[355px]"> 
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
            <a href="#" className="text-md text-blue-500 hover:underline font-bold">Mot de passe oublié ?</a>
            <div className="flex items-center gap-31 mt-4">
                <p>Remember Sign in details</p>
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
            <Button type="submit" className="rounded-3xl w-[355px] text-white bg-blue-500 hover:bg-blue-600 mt-3">Se connecter</Button>
            </form>
            </Form> 
        </div>
        <div className="w-[355px] flex items-center">
            <hr className="flex-1 border-t" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-1 border-t" />
        </div>
        <Button type="submit" className="rounded-3xl w-[355px] bg-gray-300 text-black relative flex items-center justify-center pl-10 ">
        <FcGoogle  className=" absolute left-4 size-7"/>Continuer avec Google
        </Button>
        <p className="text-center text-gray-500">Vous n&apos;avez pas de compte ? <a href="#" className="text-blue-500 hover:underline">Inscrivez-vous</a></p>
      </div>
    </div>
  )
}