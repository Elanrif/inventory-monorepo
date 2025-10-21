import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowDown, Flower, Handbag, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/utils/route';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#' },
  { name: 'Product', href: '#' },
  { name: 'Collection', href: '#' },
  { name: 'Contact', href: '#' },
];
export default function Header() {
  return (
    <div className='relative h-[638px]'>
      <Card className='absolute z-20 w-full bg-transparent px-5 text-white'>
        <CardHeader className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2 text-2xl'>
            <Flower size={40} />
            <h1 className='text-2xl font-bold'>FurniSphere</h1>
          </Link>
          <div className='flex items-center gap-8'>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex items-center gap-6'>
            <Search className='sm:hidden lg:block' />
            <Handbag className='sm:hidden lg:block' />
            <p className='sm:hidden lg:block'>|</p>
            <Link href={ROUTES.LOGIN}>Login</Link>
          </div>
        </CardHeader>
        <CardContent className='flex flex-col items-center pt-20 text-center'>
          <h1 className='mb-7 text-6xl font-bold capitalize'>
            find the perfect furniture to <br /> complete your home
          </h1>
          <p className='mb-9'>
            We specialize in buying and selling high-quality marketable
            furniture, <br /> each piece reflecting our unique aesthetic.
          </p>
          <Button className='rounded-full border bg-white px-14 py-9 text-2xl text-black capitalize hover:bg-white'>
            shop now
          </Button>
          <p className='pt-20'>
            <ArrowDown size={60} className='rounded-full border p-2' />
          </p>
        </CardContent>
      </Card>
      <Image
        className='absolute h-[638px] w-full object-cover brightness-50'
        src='/images/salon.jpg'
        alt='Salon'
        height={400}
        width={600}
      />
    </div>
  );
}
