import { Card } from '@/components/ui/card';
import React from 'react';

export type OfferCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function OfferCard({
  icon,
  title,
  description,
}: OfferCardProps) {
  return (
    <Card className="flex h-[260px] w-[330px] flex-col items-center bg-stone-100">
      <div className="flex flex-col items-center pt-9">
        {icon}
        <h1 className="pt-5 pb-1 text-3xl font-semibold capitalize">{title}</h1>
        <p className="text-md text-stone-500">{description}</p>
      </div>
    </Card>
  );
}
