import { Card } from '@/components/ui/card';
import { Handbag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export type CardSofaProps = {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  circle1: string;
  circle2: string;
  circle3: string;
  circle4: string;
};

export default function CardSofa({
  imageUrl,
  title,
  price,
  description,
  circle1,
  circle2,
  circle3,
  circle4,
}: CardSofaProps) {
  return (
    <Card className='relative ms-5 mb-10 h-[400px] w-[370px] bg-stone-200'>
      <Image
        src={imageUrl}
        alt='sofa'
        width={300}
        height={30}
        className='absolute top-10 left-10 rounded-3xl object-cover mix-blend-multiply'
      />
      <p className='absolute top-4 left-4 rounded-full bg-white px-3 py-1 font-bold capitalize'>
        {title}
      </p>
      <div className='absolute left-60 flex'>
        <p className={`absolute left-2 rounded-full border p-4 ${circle1}`}></p>
        <p className={`absolute left-7 rounded-full border p-4 ${circle2}`}></p>
        <p
          className={`absolute left-14 rounded-full border p-4 ${circle3}`}
        ></p>
        <p
          className={`absolute left-20 rounded-full border p-4 ${circle4}`}
        ></p>
      </div>
      <div className='absolute bottom-5 left-5 flex w-[90%] items-center justify-between'>
        <div>
          <p className='pb-2 text-lg capitalize'>{description}</p>
          <p className='text-xl font-bold'>${price}.00</p>
        </div>
        <div className='rounded-full border bg-white p-3'>
          <Handbag size={30} />
        </div>
      </div>
    </Card>
  );
}
