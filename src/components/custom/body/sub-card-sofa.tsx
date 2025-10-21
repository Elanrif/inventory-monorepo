import { Button } from '@/components/ui/button';
import React from 'react';
import { Box, Car, RefreshCcw } from 'lucide-react';
import OfferCard from './offer-card';

export const OfferCardData = [
  {
    icon: <Box size={64} />,
    title: 'made your order',
    description: 'All pieces to made your order',
  },
  {
    icon: <Car size={64} />,
    title: 'free delivery',
    description: 'Free delivery for order world-wide',
  },
  {
    icon: <RefreshCcw size={64} />,
    title: 'free exchange',
    description: 'Free exchange for all products',
  },
];

export default function SubCardSofa() {
  return (
    <div>
      <div className='mb-10 flex w-full flex-col items-center justify-center space-y-5'>
        <div className='mb-20 w-fit rounded-full border border-stone-500 bg-white px-6 py-3'>
          <Button className='bg-white text-2xl text-stone-500 capitalize hover:bg-white'>
            see more collections
          </Button>
        </div>
        <h1 className='text-3xl font-bold capitalize'>What we can offer you</h1>
        <p className='w-[40%] text-center text-stone-500'>
          high-quality, stylish and functional furniture designed to elevate
          your space with comfort and elegance.
        </p>
      </div>
      <div className='mx-26 mb-20 grid space-y-5 lg:grid-cols-2 lg:space-y-8 xl:grid-cols-3'>
        {OfferCardData.map((item, index) => (
          <OfferCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
