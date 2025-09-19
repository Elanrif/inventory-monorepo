"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    Username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.email(),
    phone: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    }),
     Phone: z.string().min(20, {
        message: "Phone must be at least 2 characters.",
    }),
     Address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),

})

export function Register() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Username: "",
            email: "",
            password: "",
            Phone: "",
            Address: "",
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[600px]">
                <div>
                    <p className="font-bold text-2xl">Create your account</p>
                    <span> Join Nucleus UI and start deseigning with ease</span>
                </div>
                <FormField
                    control={form.control}
                    name="Username"
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
                            <FormLabel>password</FormLabel>
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
                            <FormLabel>phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez votre numéro de téléphone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>addresse</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez votre adresse" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-4"> 
                <Button type="submit" className="bg-purple-700 rounded-full w-3xs">Create account</Button>
                <Button type="submit" className="bg-gray-200 rounded-full w-3xs text-black font-bold">Sing up with Google</Button>
                </div>
                <p>Have an account? </p>
            </form>
        </Form>
    )
}