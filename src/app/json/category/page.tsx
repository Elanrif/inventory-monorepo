import React from 'react'
import Image from "next/image";

export default function category() {


  const categories = [
    {
      product: "Électronique",
      description: "Appareils électroniques et high-tech",
      ///image: "images/categories/category-1.jpg"
      subMenu: [
        {
          name: "iPhone 15 Pro",
          price: "1299 €",
          //image: "/images/products/iphone-1.jpg",
        },
        {
          name: "Samsung Galaxy S24",
          price: "1099 €",
         //image: "/images/products/iphone-2.jpg",
        },
        {
          name: "MacBook Air M3",
          price: "1599 €",
        },
      ],
    },
    {
      product: "Mobilier",
      description: "Meubles et équipements d'ameublement",
      subMenu: [
        {
          name: "Canapé d'angle",
          price: "899 €",
        },
        {
          name: "Table basse",
          price: "199 €",
        },
        {
          name: "Fauteuil relax",
          price: "299 €",
        },
      ],
    },
    {
      product: "Vêtements",
      description: "Vêtements et accessoires de mode",
      subMenu: [
        {
          name: "T-shirt coton",
          price: "29 €",
        },
        {
          name: "Jean slim",
          price: "59 €",
        },
      ],
    },
  ]
  return (
    <div className="grid grid-cols-3 gap-10 px-20 my-10">
      {categories.map((item, index) => (
        <div className='border-1 border-blue-500 rounded-lg p-6' key={index}>
          <div className='flex items-center gap-4 px-4'>
            <Image
              src="/images/categories/category-1.jpeg"
              alt="Électronique"
              width={64}
              height={64}
              className="w-16 h-16 rounded object-cover"
            />
            <div className='flex flex-col'>
              <h1 className="text-xl font-bold">{item.product}</h1>
              <span className='text-gray-600'>{item.description} </span>
            </div>
          </div>
          <h3 className="font-semibold mt-3 px-4">Produits phares :</h3>
          {item.subMenu.map((object, objectIndex) => (
            <div className='flex items-center gap-4 p-2 border border-red-500 m-4 rounded-sm' key={objectIndex}>
              <Image
                src="/images/products/iphone-1.jpg"
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
