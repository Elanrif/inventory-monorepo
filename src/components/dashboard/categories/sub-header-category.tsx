import React from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface subHeaderProps {
  subHeader: {
    totalTitle: string;
    totalValue: string;
    titleCategories: string;
    ValueCategories: string;
  };
  subHeaderColors: {
    className: string;
  }[];
  subHeaderData: {
    className: string;
    text: string;
    number: string;
  }[];
}

export default function SubHeaderCategory({
  subHeader,
  subHeaderData,
  subHeaderColors
}: subHeaderProps) {
  return (
    <div className="flex justify-center items-center mt-4 gap-2 h-[100px]">
      <Card className="ps-6 w-1/4">
        <CardDescription className="capitalize">
          {subHeader.totalTitle}
        </CardDescription>
        <p className="text-2xl font-bold">${subHeader.totalValue}</p>
      </Card>
      <Card className="w-3/4 space-y-2 ps-7">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">{subHeader.ValueCategories}</h1>
            <CardDescription className="capitalize">
              {subHeader.titleCategories}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1">
            {subHeaderColors.map((subheader, index) => (
              <span
                key={index}
                className={cn("py-1 border rounded-full", subheader.className)}
              />
            ))}
          </div>
          <div className="flex items-center text-sm gap-2">
            {subHeaderData.map((subheader, index) => (
              <div className="flex items-center gap-1" key={index}>
                <p className={cn("border rounded-full", subheader.className)} />
                <p className="text-stone-500 capitalize">{subheader.text}</p>
                <p className="font-medium">{subheader.number}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
