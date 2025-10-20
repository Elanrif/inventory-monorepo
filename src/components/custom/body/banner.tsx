import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <Card className="relative mx-20 mb-10 h-110 overflow-hidden rounded-4xl border">
      <Image
        src="/images/salon1.jpg"
        alt="Banner Image"
        fill
        className="absolute object-cover brightness-80"
      />
      <div className="absolute z-50 flex flex-col items-center justify-center space-y-5 ps-32 pt-20 text-white">
        <h1 className="w-[850px] text-center text-5xl font-bold capitalize">
          build your home with a comfortable room by using our interior
        </h1>
        <p className="text-md text-center text-stone-100">
          Looking for quality design furniture? then your choice is right have
          visited our website. <br /> We have furniture with reverse quality
          ready to be sent to you
        </p>
        <Button className="rounded-full border bg-stone-100 px-10 py-7 text-lg text-black capitalize hover:bg-stone-100">
          shop now
        </Button>
      </div>
    </Card>
  );
}
