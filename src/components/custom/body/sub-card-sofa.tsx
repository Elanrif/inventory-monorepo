import { Button } from "@/components/ui/button";
import React from "react";
import { Box, Car, RefreshCcw } from "lucide-react";
import OfferCard from "./offer-card";

export const OfferCardData = [
  {
    icon: <Box size={64} />,
    title: "made your order",
    description: "All pieces to made your order",
  },
  {
    icon: <Car size={64} />,
    title: "free delivery",
    description: "Free delivery for order world-wide",
  },
  {
    icon: <RefreshCcw size={64} />,
    title: "free exchange",
    description: "Free exchange for all products",
  },
];

export default function SubCardSofa() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mb-10 space-y-5">
        <div className="border border-stone-500 bg-white w-fit rounded-full py-3 px-6 mb-20">
          <Button className="capitalize bg-white hover:bg-white text-2xl text-stone-500">
            see more collections
          </Button>
        </div>
        <h1 className="font-bold text-3xl capitalize">What we can offer you</h1>
        <p className="text-center w-[40%] text-stone-500">
          high-quality, stylish and functional furniture designed to elevate
          your space with comfort and elegance.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:space-y-8 space-y-5 mx-26 mb-20">
        {OfferCardData.map((item, index) => (
          <OfferCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
