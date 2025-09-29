import { cn } from "@/lib/utils";
import React from "react";

export const block1Data: { className: string }[] = [
  {
    className: "bg-green-600 w-[150px]",
  },
  {
    className: "bg-yellow-400 w-[70px]",
  },
  {
    className: "bg-red-600 w-[120px]",
  },
];

export default function Block2Card2() {
  return (
    <div className="flex items-center gap-1">
      {block1Data.map((item, index) => (
        <span
          key={index}
          className={cn("py-1 border rounded-full", item.className)}
        />
      ))}
    </div>
  );
}
