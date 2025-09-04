import ShoppingCard from "@/app/components/shopping-card";
import React from "react";

const shoppingCardData = [
  {
    title: "HOODIE SPORT",
    imageUrl: "/images/shoppings/shopping-1.png",
    oldPrice: 17900,
    newPrice: 4900,
    percentage: 74,
    color: "bg-blue-600",
  },
  {
    title: "T-SHIRT CLASSIC",
    imageUrl: "/images/shoppings/shopping-2.png",
    oldPrice: 7900,
    newPrice: 2900,
    percentage: 63,
    color: "bg-red-600",
  },
  {
    title: "JEANS SLIM",
    imageUrl: "/images/shoppings/shopping-3.png",
    oldPrice: 12900,
    newPrice: 6900,
    percentage: 46,
    color: "bg-green-600",
  },
  {
    title: "CHAUSSURES SPORT",
    imageUrl: "/images/shoppings/shopping-4.png",
    oldPrice: 24900,
    newPrice: 14900,
    percentage: 40,
    color: "bg-yellow-600",
  },
];

export default function page() {
  return (
    <div className="p-10 space-y-10">
      {/* sm, md , lg , xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {shoppingCardData.map((item, index) => (
          <div key={index}>
            <ShoppingCard
              title={item.title}
              imageUrl={item.imageUrl}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              percentage={item.percentage}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
