import { Card } from "@/components/ui/card";
import { Handbag } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    <Card className="relative bg-stone-200 w-[370px] h-[400px] ms-5 mb-10">
      <Image
        src={imageUrl}
        alt="sofa"
        width={300}
        height={30}
        className="absolute rounded-3xl object-cover mix-blend-multiply top-10 left-10"
      />
      <p className="absolute top-4 left-4 bg-white font-bold capitalize px-3 py-1 rounded-full">
        {title}
      </p>
      <div className="flex absolute left-60">
        <p className={`absolute left-2 border rounded-full p-4 ${circle1}`}></p>
        <p className={`absolute left-7 border rounded-full p-4 ${circle2}`}></p>
        <p className={`absolute left-14 border rounded-full p-4 ${circle3}`}></p>
        <p className={`absolute left-20 border rounded-full p-4 ${circle4}`}></p>
      </div>
      <div className="absolute bottom-5 left-5 flex justify-between items-center w-[90%]">
        <div>
          <p className="text-lg capitalize pb-2">{description}</p>
          <p className="font-bold text-xl">${price}.00</p>
        </div>
        <div className="p-3 border rounded-full bg-white">
          <Handbag size={30} />
        </div>
      </div>
    </Card>
  );
}
