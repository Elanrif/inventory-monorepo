'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Flower, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const footerMenus = [
    {
      title: 'Quick Menu',
      subMenu: [
        {
          name: 'Home',
          href: '#',
        },
        {
          name: 'About us',
          href: '#',
        },
        {
          name: 'Product',
          href: '#',
        },
        {
          name: 'Collection',
          href: '#',
        },
        {
          name: 'Contact us',
          href: '#',
        },
      ],
    },
    {
      title: 'Legal',
      subMenu: [
        {
          name: 'Privacy policy',
          href: '#',
        },
        {
          name: 'Term and condition',
          href: '#',
        },
        {
          name: 'Cookies spolicy',
          href: '#',
        },
      ],
    },
    {
      title: 'Ressources',
      subMenu: [
        {
          name: 'Documentation',
          href: '#',
        },
        {
          name: 'Blog',
          href: '#',
        },
        {
          name: 'Papers',
          href: '#',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 bg-black p-6 pb-20 text-white md:flex-row md:items-start md:justify-between md:gap-10 lg:px-14 lg:pt-5">
      <div>
        <div className="ms-10 me-30 space-y-3">
          <div className="flex items-center gap-2">
            <Flower size={40} />
            <h1 className="text-3xl font-bold">FurniSphere</h1>
          </div>
          <div>
            <p className="text-md w-[400px] text-stone-500">
              We specialize in buying and selling high-quality, marketable
              furniture, each piece reflecting our unique aesthetic.
            </p>
          </div>

          <div>
            <p className="mb-2 text-lg font-semibold">
              Subscribe to newsletter
            </p>
            <div className="relative">
              {!isFocused && !inputValue && (
                <Mail
                  className="absolute top-3 left-4 z-40 text-stone-400"
                  size={25}
                />
              )}
              <Input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="absolute rounded-full border bg-stone-800 py-6"
              />
              {!isFocused && !inputValue && (
                <p className="text-md absolute top-3 left-13 text-stone-400">
                  Enter your email
                </p>
              )}
              <Button className="text-md absolute left-74 rounded-full border bg-white py-6 text-black hover:bg-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      {footerMenus.map((item, index) => (
        <div className="flex flex-col space-y-5 ps-10" key={index}>
          <h1 className="text-lg capitalize">{item.title}</h1>
          {item.subMenu.map((menu, menuIndex) => (
            <div
              className="flex flex-col space-y-2 text-stone-400"
              key={menuIndex}
            >
              <Link href={menu.href}>{menu.name}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
