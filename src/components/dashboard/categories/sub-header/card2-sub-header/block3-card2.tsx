import React from "react";

export type block2Type = {
  className: string;
  text: string;
  number: string;
};

export const block2Data: block2Type[] = [
  {
    className: "bg-green-600 py-1.5 w-[5px] border rounded-full",
    text: "in stock: ",
    number: "1452",
  },
  {
    className: "bg-yellow-600 py-1.5 w-[5px] border rounded-full",
    text: "low stock: ",
    number: "355",
  },
  {
    className: "bg-red-600 py-1.5 w-[5px] border rounded-full",
    text: "out of stock:",
    number: "186",
  },
];

export default function Block3Card2() {
  return (
    <div className="flex items-center text-sm gap-2">
      {block2Data.map((item, index) => (
        <div className="flex items-center gap-1" key={index}>
          <p className={item.className} />
          <p className="text-stone-500 capitalize">{item.text}</p>
          <p className="font-medium">{item.number}</p>
        </div>
      ))}
    </div>
  );
}
