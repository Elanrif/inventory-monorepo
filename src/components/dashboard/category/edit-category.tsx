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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type CategoryProps = {
  className?: string;
  editCategory: CategoryReq & { id: number };
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom du catégorie doit comporter au moins 2 caractères.",
  }),
  description: z.string(),
  imageUrl: z.string(),
  status: z.string(),
  isFeatured: z.boolean(),
});

export function EditCategory({ className, editCategory }: CategoryProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: editCategory.name,
      description: editCategory.description,
      imageUrl: editCategory.imageUrl,
      status: editCategory.status,
      isFeatured: editCategory.isFeatured,
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
               <Textarea
                    placeholder="Saisissez la description"
                    rows={6}
                    {...field}
                  />
                <FormControl>
                  <Input placeholder="Entrer une description du catégorie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de l&#39;image</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez l'URL de l'image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                    value={field.value}
                    onValueChange={field.onChange} 
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choisir le status..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Status</SelectLabel>
                          <SelectItem value="ACTIVE">Active</SelectItem>
                          <SelectItem value="INACTIVE">Inactive</SelectItem>
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
              name="isFeatured"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mise en avant</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ? "true" : "false"}
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choisir le status..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Mise en avant</SelectLabel>
                          <SelectItem value="true">Vrai</SelectItem>
                          <SelectItem value="false">Faux</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <div className="flex justify-between items-center"></div>
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
