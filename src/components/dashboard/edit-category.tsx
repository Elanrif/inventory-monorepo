"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CategoryDto } from "@/lib/category/models/category.model";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ROUTES } from "@/utils/route";
import { updateCategory } from "@/lib/category/services/category.service";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

type EditCategoryProps = {
    editCategory: CategoryDto;
};

const formSchema = z.object({
    name: z.string().min(2, "Le nom de la catégorie doit comporter au moins 2 caractères."),
    description: z.string().min(2, "La description doit comporter au moins 2 caractères."),
    imageUrl: z.string(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    isFeatured: z.boolean(),
});

export function EditCategory({ editCategory }: EditCategoryProps) {
    const [loading, setLoading] = useState(false);
    const route = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: editCategory.name,
            description: editCategory.description,
            imageUrl: editCategory.imageUrl || "",
            status: editCategory.status === "active" ? "ACTIVE" : "INACTIVE",
            isFeatured: editCategory.isFeatured,
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            await updateCategory(editCategory.id, data);
            toast.success("Modification réussie !", {
                position: "top-right",
                autoClose: 1000,
            });
            setLoading(false);
            route.push(ROUTES.DASHBOARD_CATEGORIES);
            route.refresh();
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(`Erreur : ${error.message}`, {
                    position: "top-right",
                    autoClose: 1000,
                });
            } else {
                toast.error("Une erreur inconnue est survenue", {
                    position: "top-right",
                    autoClose: 1000,
                });
            }
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center w-full px-2">
            <Card className="w-full max-w-lg shadow-md">
                <CardHeader>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nom de la catégorie</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrez le nom de la catégorie" {...field} />
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
                                            <Textarea
                                                placeholder="Saisissez la description"
                                                rows={6}
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
                                        <FormLabel>URL de l&apos;image</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrez l'URL de l'image" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex justify-between items-center gap-5">
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Status</FormLabel>
                                                <FormControl>
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger>
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
                                                        onValueChange={(v) => field.onChange(v === "true")}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Choisir la mise en avant" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Mise en avant</SelectLabel>
                                                                <SelectItem value="true">Yes</SelectItem>
                                                                <SelectItem value="false">No</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button type="submit" disabled={loading} className="bg-purple-700 hover:bg-purple-800 rounded-full w-full">
                                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Modifier la catégorie"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
