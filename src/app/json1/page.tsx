import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type CategoryType = {
  id: number;
  title: string;
  description: string;
  image: string;
  Products: {
    name: string;
    price: number;
    image: string;
  }[];
};

const categories: CategoryType[] = [
  {
    id: 1,
    title: "Électronique",
    description: "Appareils électroniques et high-tech",
    image: "/images/json/electronique.jpg",
    Products: [
      {
        name: "iPhone 15 Pro",
        price: 1299,
        image: "/images/json/iphone15pro.jpg",
      },
      {
        name: "Samsung Galaxy S24",
        price: 1099,
        image: "/images/json/Samsung.jpg",
      },
      {
        name: "MacBook Air M3",
        price: 1599,
        image: "/images/json/macbookAirM3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Mobilier",
    description: "Meubles et équipements d'ameublement",
    image: "/images/json/mobilier.jpg",
    Products: [
      {
        name: "Canapé d'angle",
        price: 899,
        image: "/images/json/canapeAngle.jpg",
      },
      {
        name: "Table basse",
        price: 199,
        image: "/images/json/tableBasse.jpg",
      },
      {
        name: "Fauteuil relax",
        price: 299,
        image: "/images/json/fauteuilRelax.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Vêtements",
    description: "Vêtements et accessoires de mode",
    image: "/images/json/vetements.jpg",
    Products: [
      {
        name: "T-shirt coton",
        price: 29,
        image: "/images/json/tshirtCoton.jpg",
      },
      {
        name: "Jean slim",
        price: 59,
        image: "/images/json/jeanSlim.jpg",
      },
    ],
  },
];

export default function page() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5 mx-5">
      {categories.map((category) => (
        <Card className="w-fit p-10 ms-5 mt-5" key={category.id}>
          <div className="flex items-center gap-4">
            <Image
              src={category.image}
              height={150}
              width={70}
              alt="image"
              className="border rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-xl capitalize font-bold">{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-md">Produit phares :</p>
            {category.Products.map((product, index) => (
              <Card key={index} className="py-3 mb-4 pe-10 ps-2 mt-1">
                <div className="flex items-center gap-4">
                  <Image
                    src={product.image}
                    height={100}
                    width={50}
                    alt="image"
                    className="border rounded-md"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg capitalize font-bold">
                      {product.name}
                    </h1>
                    <p>{product.price} €</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
