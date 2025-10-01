import React from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type subType = {
  className: string;
  text?: string;
  number?: string;
};

interface subHeaderProps {
  totalTitle: string;
  totalValue: string;
  titleCategories: string;
  ValueCategories: string;
  subHeader: subType[];
}

export default function SubHeaderCategory({
  totalTitle,
  totalValue,
  ValueCategories,
  titleCategories,
  subHeader,
}: subHeaderProps) {
  return (
    <div className="flex justify-center items-center mt-4 gap-0.5 h-[100px]">
      <Card className="ps-6 w-1/4">
        <CardDescription className="capitalize">
          {totalTitle}
        </CardDescription>
        <p className="text-2xl font-bold">${totalValue}</p>
      </Card>
      <Card className="w-3/4 space-y-2 ps-7">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">{ValueCategories}</h1>
            <CardDescription className="capitalize">
              {titleCategories}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1">
            {subHeader.slice(0, 3).map((subheader, index) => (
              <span
                key={index}
                className={cn("py-1 border rounded-full", subheader.className)}
              />
            ))}
          </div>
          <div className="flex items-center text-sm gap-2">
            {subHeader.slice(3).map((subheader, index) => (
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
