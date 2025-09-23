import React from "react";
import Image from "next/image";
import { describe } from "node:test";

  const menus = [
    {
      title: "Electronique",
      describe: "Appareils électroniques et high-tech",
      products: [
        {
          name: "iPhone 15  Pro",
          price: "1299 €",
          image: "/images/categories/category-1.jpeg",
        },
        {
          name: "Samsung Galaxy S24",
          price: "1099 €",
          image: "/images/categories/category-1.jpeg",
        },
        {
          name: "MacBook Air M3",
          price: "1599 €",
          image: "/images/categories/category-1.jpeg",
        }, 
      ],
    },
     {
      title: "Mobilier",
      describe: "Meubles et équipements d'ameublement",
      products: [
        {
          name: "Canapé d'angle",
          price: "899 €",
          image: "/images/categories/category-1.jpeg",
        },
        {
          name: "Table basse",
          price: "199 €",
          image: "/images/categories/category-1.jpeg",
        },
        {
          name: "Fauteuil relax",
          price: "299 €",
          image: "/images/categories/category-1.jpeg",
        },
      ],
    },
    {
      title: "Vêtements",
      describe: "Vêtements et accessoires de mode",
      products: [
        {
          name: "T-shirt en coton",
          price: "29",
          image: "/images/categories/category-1.jpeg",
        },
        {
          name: "Jean slim",
          price: "59",
          image: "/images/categories/category-1.jpeg",
        }, 
      ],
    },
  ];

export default function pageJson() {
  return (
 <div className="grid grid-cols-3 gap-10 px-20 my-10">
  {menus.map((menu, index) => (
    <div key={index} className="p-4 bg-white rounded-lg border border-blue-500">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={menu.products[0].image}
          alt={menu.products[0].name}
          width={100}
          height={100}
        />
        <div>
          <h3 className="text-lg font-semibold">{menu.title}</h3>
          <p className="text-gray-600 two-lines">{menu.describe}</p>
        </div>
      </div>
        <p className="font-semibold my-3">Produits phares :</p>
      {/* Boucle sur les produits */}
      <div className="flex flex-wrap gap-4">
        {menu.products.map((product, productIndex) => (
          <div
            key={productIndex}
            className="flex items-center gap-4 p-4 border border-red-500 rounded-lg bg-white w-fit"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
            <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

  );
}