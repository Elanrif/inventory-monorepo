import { Card } from '@/components/ui/card';
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function SubFooter() {
  const socialCards = [
    { name: 'Twitter', icon: <Twitter className="fill-white" /> },
    { name: 'Facebook', icon: <Facebook className="fill-white" /> },
    {
      name: 'Instagram',
      icon: <Instagram className="fill-white text-black" />,
    },
    { name: 'LinkedIn', icon: <Linkedin className="fill-white" /> },
  ];

  return (
    <div className="bg-black">
      <div className="mx-16 flex flex-col items-center border-t border-stone-800 px-5 py-10 text-white md:flex-row md:justify-between">
        <p className="text-lg text-stone-500">
          © 2025 Copyright by FurniSphere
        </p>

        <div className="flex flex-col gap-3 space-y-3 p-10 md:flex-row md:space-y-0 md:space-x-3">
          {socialCards.map((item, index) => (
            <Card
              key={index}
              className="text-md flex flex-row items-center gap-2 rounded-full border border-stone-900 bg-stone-900 px-4 py-3 text-white"
            >
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
