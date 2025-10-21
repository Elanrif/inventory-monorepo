import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export type ButtonVariant = 'outline' | 'default';

interface HeaderButtonsType {
  icon: LucideIcon;
  label: string;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
}

interface HeaderButtonsProps {
  title: string;
  headerButtons: HeaderButtonsType[];
}

export default function HeaderSection({
  title,
  headerButtons,
}: HeaderButtonsProps) {
  return (
    <div className='mt-3 mb-4 flex items-center justify-between'>
      <h1 className='text-xl font-bold capitalize'>{title}</h1>
      <div className='flex items-center gap-3'>
        {headerButtons.map((headerButton, index) => (
          <Link key={index} href={headerButton.href ?? '#'}>
            <Button
              className={cn('py-2', headerButton.className)}
              variant={headerButton.variant ?? 'outline'}
            >
              <headerButton.icon />{' '}
              <span className='text-xs'>{headerButton.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
