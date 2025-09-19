import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonCollection() {
  return (
    <div className="flex justify-center w-full mb-10">
      <div className="border border-stone-500 bg-white w-fit rounded-full py-3 px-6">
        <Button className="capitalize bg-white hover:bg-white text-2xl text-stone-500">see more collections</Button>
      </div>
    </div>
  );
}
