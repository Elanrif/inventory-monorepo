"use client"

import React from 'react'

export type SubHeaderProps = {
  price: number;
  description: string;
};

export default function SubHeader() {
  const categories: SubHeaderProps[] = [
    {  description: "Total Asset Value", 
      price: 10.356788,
     },
  ];
  return (
    <div className='bg-white rounded-l-lg flex-1'>
      {categories.map((item,index) => {
        return (
       <div key={index} className='flex flex-col px-4 py-2'>
        <p className="text-gray-400 capitalize pb-2">{item.description}</p>
      <p className="font-bold text-xl">${item.price}</p>
       </div>
        )
      })}
    </div>
  );
};

export type SectionProps = {
  total: number;
  statut: string;
  color: string;
};

export function Section() {
  const categories: SectionProps[] = [
    { color: "bg-green-600", statut: "In stock", total: 1452 },
    { color: "bg-yellow-400", statut: "Low stock", total: 355 },
    { color: "bg-orange-600", statut: "Out of stock", total: 186 },
  ];

  return (
    <div className='px-8 space-y-2 bg-white rounded-r-lg flex-4 py-2'>
      <div>
        <p className='font-bold'>2379<span className='font-normal px-2'>Categories</span></p>
      </div>
      <div className='flex'>
        <p className='bg-green-600 w-[180px] h-2 rounded-full' />
        <p className='bg-yellow-400 w-[80px] h-2 rounded-full' />
        <p className='bg-orange-600 w-[120px] h-2 rounded-full' />
      </div>
      <div className='flex items-center gap-2'>
        {categories.map((data, Index) => {
          return (
            <div key={Index} className='flex items-center'>
              <p className={`${data.color} w-2 h-4 rounded-full`}></p>
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


