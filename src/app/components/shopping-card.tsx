import Image from "next/image";
import React from "react";

export type ShoppingCardProps = {
  percentage: number;
  imageUrl: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  color: string;
};

export default function ShoppingCard({
  percentage,
  imageUrl,
  title,
  oldPrice,
  newPrice,
  color
}: ShoppingCardProps) {
  return (
    <div className="w-[300px] space-y-3 p-3 bg-white">
      {/* SOLDES + PERCENTAGE */}
      <div className="flex justify-between">
        <div className="flex justify-center items-center bg-black text-sm text-white size-14 rounded-full">
          <p>soldes</p>
        </div>
        <p className="p-2 h-fit bg-red-600 text-white">{percentage}%</p>
      </div>
      <Image
        src={imageUrl}
        alt="Product Image"
        width={500}
        height={500}
        className="w-full h-80 object-contain"
      />
      <h1 className="uppercase">{title}</h1>
      <div className="flex justify-between items-center">
        <div>
          <span className="line-through text-gray-500">{oldPrice} MAD</span>
          <span className="text-red-500"> {newPrice} MAD</span>
        </div>
        <div className={`size-8 ${color} rounded-full`} />
      </div>
    </div>
  );
}
