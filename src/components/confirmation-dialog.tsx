'use client';

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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { UserDto } from '@/lib/user/models/user.model';
import { deleteUser } from '@/lib/user/services/user.service';
import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

type DialogConfirmationProps = {
  user: UserDto;
  triggerLabel?: string;
  title?: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
};

export function ConfirmationDialog({
  user,
  title = 'Êtes-vous absolument sûr ?',
  description = 'Cette action est irréversible. Cela supprimera définitivement votre compte et effacera vos données de nos serveurs.',
  cancelLabel = 'Annuler',
  actionLabel = 'Confirmer',
}: DialogConfirmationProps) {
  const handleDelete = async () => {
    await deleteUser(user.id);
    toast.success('Suppression réussie !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
