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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/route";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { createCategory } from "@/lib/categorry/services/category.service";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom de la catégorie doit comporter au moins 2 caractères.",
  }),
  description: z.string().min(2, {
    message: "La description doit comporter au moins 2 caractères.",
  }),
  imageUrl: z.string(),
});

export function CreateCategory() {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const category = await createCategory(data);
      if (category) {
        toast.success("Categorie ajoutée avec succès !", {
          position: "top-right",
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
        position: "top-right",
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
          className={`space-y-4 w-[450px]`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de votre catégorie</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrez le nom de la catégorie"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Saisissez la description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center gap-4">
            <Button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 rounded-full w-full"
            >
              <span>Ajouter une catégorie</span>
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}