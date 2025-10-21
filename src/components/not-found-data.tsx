import { AlertCircleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type NotFoundDataProps = {
  title?: string;
  description?: string;
  details?: string[];
};

export function NotFoundData({
  title = 'Donnée introuvable',
  description = "La ressource demandée n'a pas été trouvée.",
  details = [
    "Vérifiez l'identifiant ou les paramètres.",
    'Essayez de rafraîchir la page.',
    'Contactez le support si le problème persiste.',
  ],
}: NotFoundDataProps) {
  return (
    <div className='mx-auto flex min-h-[96vh] min-w-xl flex-col items-center justify-center gap-4 px-7 py-4'>
      <Alert variant='destructive' className='bg-yellow-50'>
        <AlertCircleIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>
          <p>{description}</p>
          <ul className='list-inside list-disc text-sm'>
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
