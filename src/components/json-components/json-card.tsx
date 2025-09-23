import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

export type JsonCardProps = {
  imageUrl1: string;
  h1: string;
  desc:string
  products: {
    name: string;
    price: number;
    image: string;
  }[];
};

export default function JsonCard({
  imageUrl1,
  h1,
  desc,
  products
}:JsonCardProps) {
  return (
    <Card className="w-fit p-10 ms-5 mt-5">
      <div className="flex items-center gap-4">
        <Image
          src={imageUrl1}
          height={150}
          width={70}
          alt="image"
          className="border rounded-md"
        />
        <div className="flex flex-col">
          <h1 className="text-xl capitalize font-bold">{h1}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-md">Produit phares :</p>
        {products.map((product, index) => (
          <Card key={index} className="py-3 pe-10 ps-2 mt-1 mb-4">
            <div className="flex items-center gap-4">
              <Image
                src={product.image}
                height={100}
                width={50}
                alt="image"
                className="border rounded-md"
              />
              <div className="flex flex-col">
                <h1 className="text-lg capitalize font-bold">{product.name}</h1>
                <p>{product.price} €</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
