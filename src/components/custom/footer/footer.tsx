"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flower, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const footerMenus = [
    {
      title: "Quick Menu",
      subMenu: [
        {
          name: "Home",
          href: "#",
        },
        {
          name: "About us",
          href: "#",
        },
        {
          name: "Product",
          href: "#",
        },
        {
          name: "Collection",
          href: "#",
        },
        {
          name: "Contact us",
          href: "#",
        },
      ],
    },
    {
      title: "Legal",
      subMenu: [
        {
          name: "Privacy policy",
          href: "#",
        },
        {
          name: "Term and condition",
          href: "#",
        },
        {
          name: "Cookies spolicy",
          href: "#",
        },
      ],
    },
    {
      title: "Ressources",
      subMenu: [
        {
          name: "Documentation",
          href: "#",
        },
        {
          name: "Blog",
          href: "#",
        },
        {
          name: "Papers",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col gap-6 p-6 bg-black text-white 
                md:flex-row md:justify-between md:items-start md:gap-10 
                lg:pt-5 lg:px-14 pb-20"
    >
      <div>
        <div className="me-30 ms-10 space-y-3">
          <div className="flex items-center gap-2">
            <Flower size={40} />
            <h1 className="text-3xl font-bold">FurniSphere</h1>
          </div>
          <div>
            <p className="w-[400px] text-md text-stone-500">
              We specialize in buying and selling high-quality, marketable
              furniture, each piece reflecting our unique aesthetic.
            </p>
          </div>

          <div>
            <p className="text-lg mb-2 font-semibold">
              Subscribe to newsletter
            </p>
            <div className="relative">
              {!isFocused && !inputValue && (
                <Mail
                  className="absolute left-4 top-3 z-40 text-stone-400 "
                  size={25}
                />
              )}
              <Input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="absolute border rounded-full py-6 bg-stone-800"
              />
              {!isFocused && !inputValue && (
                <p className="absolute text-md text-stone-400 left-13 top-3">
                  Enter your email
                </p>
              )}
              <Button className="absolute left-74 py-6 border rounded-full text-md bg-white hover:bg-white text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      {footerMenus.map((item, index) => (
        <div className="flex flex-col ps-10 space-y-5" key={index}>
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
