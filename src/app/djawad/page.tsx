import React from "react";
import Image from "next/image";

type CategoryType = {
  title: string,
  describe: string,
  image: string,
  products: {
    name: string,
    price: string,
    image: string,
  }[],
}

const categories: CategoryType[] = [
    {
      title: "Électronique",
      describe: "Appareils électroniques et high-tech",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          name: "iPhone 15  Pro",
          price: "1299 €",
          image: "/images/products/iphone-1.jpg",
        },
        {
          name: "Samsung Galaxy S24",
          price: "1099 €",
          image: "/images/products/iphone-2.jpg",
        },
        {
          name: "MacBook Air M3",
          price: "1599 €",
          image: "/images/products/iphone-1.jpg",
        }, 
      ],
    },
     {
      title: "Mobilier",
      describe: "Meubles et équipements d'ameublement",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          name: "Canapé d'angle",
          price: "899 €",
          image: "/images/products/iphone-2.jpg",
        },
        {
          name: "Table basse",
          price: "199 €",
          image: "/images/products/iphone-1.jpg",
        },
        {
          name: "Fauteuil relax",
          price: "299 €",
          image: "/images/products/iphone-2.jpg",
        },
      ],
    },
    {
      title: "Vêtements",
      describe: "Vêtements et accessoires de mode",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          name: "T-shirt coton",
          price: "29 €",
          image: "/images/products/iphone-1.jpg",
        },
        {
          name: "Jean slim",
          price: "59 €",
          image: "/images/products/iphone-2.jpg",
        }, 
      ],
    },
  ];

export default function pageJson() {
  return (
 <div className="grid grid-cols-3 gap-10 px-20 my-10">
  {categories.map((category, index) => (
    <div key={index} className="p-6 border border-blue-500 rounded-lg shadow bg-white">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={category.image}
          alt={category.products[0].name}
          width={100}
          height={100}
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h3 className="text-xl font-bold">{category.title}</h3>
          <p className="text-gray-600 two-lines">{category.describe}</p>
        </div>
      </div>
        <p className="font-semibold my-2">Produits phares :</p>
      {/* Boucle sur les produits */}
      <div className="flex flex-wrap gap-4">
        {category.products.map((product, productIndex) => (
          <div
            key={productIndex}
            className="flex items-center gap-4 p-2 border border-red-500 rounded bg-white w-95"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={64}
              height={64}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

  );
}