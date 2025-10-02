"use client"

import React from 'react'

export type SubHeaderProps = {
  price: number;
  description: string;
};

export default function SubHeader({ categories }: { categories: SubHeaderProps[] }) {
  return (
    <div className="bg-white rounded-l-lg flex-1">
      {categories.map((item, index) => (
        <div key={index} className="flex flex-col px-4 py-2">
          <p className="text-gray-400 capitalize pb-2">{item.description}</p>
          <p className="font-bold text-xl">${item.price}</p>
        </div>
      ))}
    </div>
  );
}


export type SectionProps = {
  total: number;
  statut: string;
  color: string;
};
export function Section({ categories }: { categories: SectionProps[] }) {

  return (
    <div className='px-8 space-y-2 bg-white rounded-r-lg flex-4 py-2'>
      <div>
        <p className='font-bold'>2379<span className='font-normal px-2'>Categories</span></p>
      </div>
      <div className='flex gap-0.5'>
        <p className='bg-green-600 w-[180px] h-2 rounded-full' />
        <p className='bg-yellow-400 w-[80px] h-2 rounded-full' />
        <p className='bg-orange-600 w-[120px] h-2 rounded-full' />
      </div>
      <div className='flex items-center gap-2'>
        {categories.map((data, Index) => {
          return (
            <div key={Index} className='flex items-center text-sm'>
              <p className={`${data.color} w-[6px] h-[12px] rounded-full`}></p>
              <span className='text-gray-600 px-1'>{data.statut}:</span>
              <span className='font-medium'>{data.total}</span>
            </div>
          );
        }
        )}
      </div>
    </div>

  );
}


