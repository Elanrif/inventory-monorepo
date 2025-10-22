import React from 'react';
import { Card, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface SubHeaderProps {
  subHeader: {
    totalTitle: string;
    totalValue: string;
    title: string;
    value: string;
  };
  colors: {
    className: string;
  }[];
  data: {
    className: string;
    text: string;
    number: string;
  }[];
}

export default function SubHeaderSection({
  subHeader,
  data,
  colors,
}: SubHeaderProps) {
  return (
    <div className='mt-4 flex flex-col items-center justify-center gap-2 md:flex-row'>
      <Card className='w-full ps-6 md:w-1/4'>
        <CardDescription className='capitalize'>
          {subHeader.totalTitle}
        </CardDescription>
        <p className='text-2xl font-bold'>${subHeader.totalValue}</p>
      </Card>
      <Card className='w-full space-y-2 ps-7 md:w-3/4'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <h1 className='text-lg font-bold'>{subHeader.value}</h1>
            <CardDescription className='capitalize'>
              {subHeader.title}
            </CardDescription>
          </div>
          <div className='flex items-center gap-1'>
            {colors.map((color, index) => (
              <span
                key={index}
                className={cn('rounded-full border py-1', color.className)}
              />
            ))}
          </div>
          <div className='flex items-center gap-2 text-sm'>
            {data.map((data, index) => (
              <div className='flex items-center gap-1' key={index}>
                <p className={cn('rounded-full border', data.className)} />
                <p className='text-stone-500 capitalize'>{data.text}</p>
                <p className='font-medium'>{data.number}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
