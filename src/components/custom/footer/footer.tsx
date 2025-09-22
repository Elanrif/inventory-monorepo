"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flower, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white 
                md:flex-row md:justify-between md:items-center md:gap-10 
                lg:pt-5 lg:px-14 pb-20">
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
            <p className="text-lg mb-2 font-semibold">Subscribe to newsletter</p>
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
      <div className="flex flex-col pt-20 ps-10 capitalize space-y-5">
        <h1 className="text-lg font-bold">quick menu</h1>
        <div className="flex flex-col space-y-2 text-stone-400">
          <Link href="/">home</Link>
          <Link href="#">about us</Link>
          <Link href="#">product</Link>
          <Link href="#">collection</Link>
          <Link href="#">contact us</Link>
        </div>
      </div>
      <div className="flex flex-col ps-10 space-y-5">
        <h1 className="text-lg font-bold capitalize">legal</h1>
        <div className="flex flex-col  space-y-2 text-stone-400">
          <Link href="#" className="capitalize">
            privacy policy
          </Link>
          <Link href="#">Term and condition</Link>
          <Link href="#">Cookies policy</Link>
        </div>
      </div>
      <div className="flex flex-col ps-10 capitalize space-y-5">
        <h1 className="text-lg font-bold">ressources</h1>
        <div className="flex flex-col space-y-2 text-stone-400">
          <Link href="#">documentation</Link>
          <Link href="#">blog</Link>
          <Link href="#">papers</Link>
        </div>
      </div>
    </div>
  );
}
