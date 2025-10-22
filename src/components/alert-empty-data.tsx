import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import Link from 'next/link';

type EmptyAction = {
  label: string;
  href?: string;
};

type EmptyProps = {
  className?: string;
  message?: string;
  action?: EmptyAction;
};

export default function AlertEmptyData({
  className,
  message = 'Aucune donnée disponible.',
  action,
}: EmptyProps) {
  return (
    <Alert
      variant='destructive'
      className={`flex flex-col items-center gap-3 bg-amber-50 p-6 ${className}`}
    >
      <AlertCircleIcon className='h-8 w-8' />
      <div className='text-center'>
        <AlertTitle>{message}</AlertTitle>
        {action?.label && (
          <div className='mt-3'>
            {action.href ? (
              <Link
                href={action.href}
                className='bg-primary inline-flex items-center rounded-md px-3 py-1 text-sm text-white'
              >
                {action.label}
              </Link>
            ) : (
              <button
                className='bg-primary inline-flex items-center rounded-md px-3 py-1 text-sm text-white'
                onClick={(e) => e.preventDefault()}
              >
                {action.label}
              </button>
            )}
          </div>
        )}
      </div>
      {/* extra description area if needed */}
      <AlertDescription />
    </Alert>
  );
}
