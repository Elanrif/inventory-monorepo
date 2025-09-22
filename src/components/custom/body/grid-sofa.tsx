import React from "react";
import CardSofa, { CardSofaProps } from "./card-sofa";


export const cardSofaData: CardSofaProps[] = [
  {
    imageUrl: "/images/sofa1.jpg",
    title: "best sale",
    price: 180,
    description: "A comfortable and stylish sofa.",
    circle1: "bg-lime-500",
    circle2: "bg-stone-400",
    circle3: "bg-gray-500",
    circle4: "bg-gray-700",
  },
  {
    imageUrl: "/images/sofa2.jpg",
    title: "top rated",
    price: 250,
    description: "A sleek and modern leather sofa.",
    circle1: "bg-stone-500",
    circle2: "bg-gray-400",
    circle3: "bg-stone-300",
    circle4: "bg-gray-900",
  },
  {
    imageUrl: "/images/sofa3.jpg",
    title: "best price",
    price: 220,
    description: "A timeless classic fabric sofa.",
    circle1: "bg-rose-500",
    circle2: "bg-gray-600",
    circle3: "bg-stone-500",
    circle4: "bg-gray-300",
  },
  {
    imageUrl: "/images/sofa4.jpg",
    title: "top rated",
    price: 320,
    description: "A spacious luxury corner sofa.",
    circle1: "bg-green-500",
    circle2: "bg-purple-500",
    circle3: "bg-pink-500",
    circle4: "bg-gray-500",
  },
  {
    imageUrl: "/images/sofa5.jpg",
    title: "best price",
    price: 150,
    description: "A minimalist and elegant sofa.",
    circle1: "bg-yellow-500",
    circle2: "bg-gray-500",
    circle3: "bg-stone-900",
    circle4: "bg-gray-500",
  },
  {
    imageUrl: "/images/sofa6.jpg",
    title: "best sale",
    price: 110,
    description: "A compact sofa for small spaces.",
    circle1: "bg-orange-500",
    circle2: "bg-teal-500",
    circle3: "bg-indigo-500",
    circle4: "bg-gray-500",
  },
];

export default function GridSofa() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 mb-10 mx-12">
      {cardSofaData.map((Sofa, index) => (
        <div className="" key={index}>
          <CardSofa {...Sofa} />
        </div>
      ))}
    </div>
  );
}
