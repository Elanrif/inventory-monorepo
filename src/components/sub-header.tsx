"use client"

import React from 'react'

export type SubHeaderProps = {
  price: number;
  description: string;
  totalCategory: string;
};

export default function SubHeader({  
  price,
  description,
  totalCategory,
}: SubHeaderProps) {

  return (
    <div className='flex justify-between items-center m-4'>
        <div className='flex flex-col'>
          <p className="text-lg capitalize pb-2">{description}</p>
          <p className="font-bold text-xl">${price}</p>
        </div>
        <div>
          <p className="text-lg capitalize pb-2">{totalCategory}</p>  
        </div>  
    </div>
  );
}
