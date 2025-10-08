import React from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface subHeaderProps {
  subHeader: {
    totalTitle: string;
    totalValue: string;
    title: string;
    value: string;
  };
  colors: {
    className: string;
  }[];
  data: {
    className: string;
    text: string;
    number: string;
  }[];
}

export default function SubHeaderSection({
  subHeader,
  data,
  colors
}: subHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-2">
      <Card className="ps-6 w-full md:w-1/4">
        <CardDescription className="capitalize">
          {subHeader.totalTitle}
        </CardDescription>
        <p className="text-2xl font-bold">${subHeader.totalValue}</p>
      </Card>
      <Card className="w-full md:w-3/4 space-y-2 ps-7">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">{subHeader.value}</h1>
            <CardDescription className="capitalize">
              {subHeader.title}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1">
            {colors.map((color, index) => (
              <span
                key={index}
                className={cn("py-1 border rounded-full", color.className)}
              />
            ))}
          </div>
          <div className="flex items-center text-sm gap-2">
            {data.map((data, index) => (
              <div className="flex items-center gap-1" key={index}>
                <p className={cn("border rounded-full", data.className)} />
                <p className="text-stone-500 capitalize">{data.text}</p>
                <p className="font-medium">{data.number}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
