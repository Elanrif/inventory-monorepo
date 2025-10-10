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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { updateCategory } from "@/lib/category/services/category.service";
import { CategoryDto } from "@/lib/category/models/category.model";

type EditCategoryProps = {
  editCategory: CategoryDto;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom de la catégorie doit comporter au moins 2 caractères.",
  }),
  description: z.string().min(2, {
    message: "La description doit comporter au moins 2 caractères.",
  }),
  imageUrl: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  isFeatured: z.boolean(),
});

export function EditCategory({ editCategory }: EditCategoryProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: editCategory.name,
      description: editCategory.description,
      imageUrl: editCategory.imageUrl || "",
      status: editCategory.status,
      isFeatured: editCategory.isFeatured,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const category = await updateCategory({ id: editCategory.id, ...data });

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
          className={`space-y-4 w-[450px]`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de la catégorie</FormLabel>
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
                  <Input
                    placeholder="Saisissez la description de la catégorie"
                    {...field}
                  />
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
          <div className="flex justify-between items-center">
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
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button type="submit" className="bg-purple-700 hover:bg-purple-800 rounded-full w-full">
              <span>Modifier la catégorie</span>
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
