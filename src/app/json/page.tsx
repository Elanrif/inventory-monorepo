import React from "react";
import Image from "next/image";

export default function pageJson() {
  const categories = [
    {
      name: "Électronique",
      description: "Appareils électroniques et high-tech",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          id: 1,
          name: "iPhone 15 Pro",
          price: 1299,
          image: "/images/products/iphone-1.jpg",
        },
        {
          id: 2,
          name: "Samsung Galaxy S24",
          price: 1099,
          image: "/images/products/iphone-2.jpg",
        },
        {
          id: 3,
          name: "MacBook Air M3",
          price: 1599,
          image: "/images/products/iphone-1.jpg",
        },
      ],
    },
    {
      name: "Mobilier",
      description: "Meubles et équipements d'ameublement",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          id: 4,
          name: "Canapé d'angle",
          price: 899,
          image: "/images/products/iphone-2.jpg",
        },
        {
          id: 5,
          name: "Table basse",
          price: 199,
          image: "/images/products/iphone-1.jpg",
        },
        {
          id: 6,
          name: "Fauteuil relax",
          price: 299,
          image: "/images/products/iphone-2.jpg",
        },
      ],
    },
    {
      name: "Vêtements",
      description: "Vêtements et accessoires de mode",
      image: "/images/categories/category-1.jpeg",
      products: [
        {
          id: 7,
          name: "T-shirt coton",
          price: 29,
          image: "/images/products/iphone-1.jpg",
        },
        {
          id: 8,
          name: "Jean slim",
          price: 59,
          image: "/images/products/iphone-2.jpg",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-10 px-20 my-10">
      {categories.map((category, idx) => (
        <div key={idx} className="p-6 border border-blue-500 rounded-lg shadow bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={category.image}
              alt={category.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
          <h3 className="font-semibold mb-2">Produits phares :</h3>
          <div className="grid grid-cols-1 gap-4">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-2 border border-red-500 rounded"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.price} €</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
