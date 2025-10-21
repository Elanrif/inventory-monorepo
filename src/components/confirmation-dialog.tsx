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
import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

type ConfirmationDialogProps<T> = {
  item: T;
  onDelete: (item: T) => Promise<void>;
  triggerLabel?: string;
  title?: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
};

export function ConfirmationDialog<T>({
  item,
  onDelete,
  title = 'Êtes-vous absolument sûr ?',
  description = 'Cette action est irréversible. Cela supprimera définitivement cet élément.',
  cancelLabel = 'Annuler',
  actionLabel = 'Confirmer',
  triggerLabel,
}: ConfirmationDialogProps<T>) {
  const handleDelete = async () => {
    try {
      await onDelete(item);
      toast.success('Suppression réussie !', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Erreur lors de la suppression !', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <Trash color='red' />
          {triggerLabel && <span className='ml-2'>{triggerLabel}</span>}
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
            className='bg-red-500 text-white hover:bg-red-600'
            onClick={handleDelete}
          >
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
