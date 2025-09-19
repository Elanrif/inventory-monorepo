import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDown, Flower, Handbag, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative h-[638px]">
      <Card className="absolute w-full z-20 bg-transparent text-white px-5">
        <CardHeader className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl gap-2">
            <Flower size={40} />
            <h1 className="text-2xl font-bold">FurniSphere</h1>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Product</Link>
            <Link href="#">Collection</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <Search />
            <Handbag />
            <p>|</p>
            <Link href="#">Login</Link>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center pt-20">
          <h1 className="text-6xl capitalize font-bold mb-7">
            find the perfect furniture to <br /> complete your home
          </h1>
          <p className="mb-9">
            We specialize in buying and selling high-quality marketable
            furniture, <br /> each piece reflecting our unique aesthetic.
          </p>
          <Button className="bg-white text-black border py-9 px-14 rounded-full text-2xl capitalize hover:bg-white">
            shop now
          </Button>
          <p className="pt-20 ">
            <ArrowDown size={60} className="border rounded-full p-2" />
          </p>
        </CardContent>
      </Card>
      <Image
        className="absolute w-full h-[638px] brightness-50 object-cover"
        src="/images/salon.jpg"
        alt="Salon"
        height={400}
        width={600}
      />
    </div>
  );
}
