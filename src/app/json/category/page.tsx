import React from 'react'
import Image from "next/image";


type ProductType = {
  name: string;
  price: string;
  image: string; 
}

type CategoryType = {
  name: string;
  description: string;
  image: string;
  products: ProductType[];
}

export default function category() {
  const categories: CategoryType[] = [
    {
      name: "Électronique",
      description: "Appareils électroniques et high-tech",
      image: "/images/categories/category-1.jpg",
      products: [
        {
          name: "iPhone 15 Pro",
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
      name: "Mobilier",
      description: "Meubles et équipements d'ameublement",
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
      name: "Vêtements",
      description: "Vêtements et accessoires de mode",
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
  ]
  return (
    <div className="grid grid-cols-3 gap-10 px-20 my-10">
      {categories.map((item, index) => (
        <div className='border-1 border-blue-500 rounded-lg p-4' key={index}>
          <div className='flex items-center gap-4 px-4'>
              <Image
                src={item.image}
                alt="Électronique"
                width={64}
                height={64}
                className="w-20 h-16 rounded object-cover"
              />
            <div className='flex flex-col'>
              <h1 className="text-xl font-bold">{item.name}</h1>
              <span className='text-gray-600'>{item.description} </span>
            </div>
          </div>
          <h3 className="font-semibold mt-3 px-4">Produits phares :</h3>
          {item.products.map((object, objectIndex) => (
            <div className='flex items-center gap-4 p-2 border border-red-500 m-4 rounded-sm' key={objectIndex}>
              <Image
                src={object.image}
                alt="iPhone 15 Pro"
                width={56}
                height={56}
                className="w-14 h-14 object-cover rounded"
              />
              <div className='flex flex-col'>
                <p className='font-medium'>{object.name}</p>
                <p className='text-sm text-gray-500'>{object.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
