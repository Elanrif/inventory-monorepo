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
import { ROUTES } from "@/utils/route";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryReq } from "@/lib/categorry/models/category.model";
import { updateCategory } from "@/lib/categorry/services/category.service";

type CategoryProps = {
  className?: string;
  editCategory: CategoryReq & { id: number };
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom du catégorie doit comporter au moins 2 caractères.",
  }),
  description: z.string(),
});

export function EditCategory({ className, editCategory }: CategoryProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: editCategory.name,
      description: editCategory.description,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const category = await updateCategory(editCategory.id, data);
      // category = axios.then ->  Category || axios.catch -> throw new Error
      if (category) {
        toast.success("Modification réussie !", {
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
          className={`space-y-4 w-[450px] ${className}`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nom du catégorie
                </FormLabel>
                <FormControl>
                  <Input placeholder="Entrez le nom du catégorie" {...field} />
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
                  <Input placeholder="Entrer une description du catégorie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center gap-4">
            <Button type="submit" className="bg-purple-700 rounded-full w-full">
              <span>Modifier votre catégorie</span>
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
