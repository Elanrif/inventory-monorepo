"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/categorry/models/category.model";
import { deleteCategory } from "@/lib/categorry/services/category.service";
import { UserDto } from "@/lib/user/models/user.model";
import { deleteUser } from "@/lib/user/services/user.service";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type DialogConfirmationProps = {
  user?: UserDto;
  category?: Category;
  triggerLabel?: string;
  title?: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
  onDeleted?: () => void; 
  handleDeleteCategory?: () => Promise<void>;
};

export function ConfirmationDialog({
  user,
  category,
  title = "Êtes-vous absolument sûr ?",
  description = "Cette action est irréversible. Cela supprimera définitivement cet élément.",
  cancelLabel = "Annuler",
  actionLabel = "Confirmer",
}: DialogConfirmationProps) {

  const router = useRouter();

  const handleDelete = async () => {
    try {
      if (user) {
        await deleteUser(user.id);
        toast.success("Utilisateur supprimé avec succès !");
      } else if (category) {
        await deleteCategory(category.id);
        toast.success("Catégorie supprimée avec succès !");
        router.refresh();
      } else {
        return;
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de la suppression !");
      console.error(error);
    }
  };

/* 
   const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategory(categoryId);

    toast.success("Suppression réussie !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.refresh();
  }; */

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Trash color="red" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white hover:bg-red-600"
            onClick={handleDelete}
          >
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}