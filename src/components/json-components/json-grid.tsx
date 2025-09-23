import React from "react";
import JsonCard from "./json-card";

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

export default function JsonGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5 mx-5">
      {categories.map((categorie) => (
        <JsonCard
          key={categorie.id}
          imageUrl1={categorie.image}
          h1={categorie.title}
          desc={categorie.description}
          products={categorie.Products}
        />
      ))}
    </div>
  );
}
