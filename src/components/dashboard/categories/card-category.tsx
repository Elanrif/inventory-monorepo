import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { TableCategory, TableCategoryProps } from "./table/table";
import { LucideIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type CardHeaderProps = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};

export type CategoryProps = {
  cardCatHeader: CardHeaderProps[];
  table: TableCategoryProps;
};

export default function CardCategory({ cardCatHeader, table }: CategoryProps) {
  return (
    <Card className="mt-6">
      <CardHeader className="flex justify-between p-4">
        <div className="relative ms-2">
          <Input placeholder="Search" className="w-[240px]" />
          <Search className="absolute top-2 left-52 text-stone-400 size-5" />
        </div>
        <div className="hidden xl:flex gap-4">
          {cardCatHeader.map((header, id) => (
            <CardAction
              className="flex flex-row items-center gap-2 px-3 py-2 text-sm cursor-pointer"
              key={id}
            >
              {header.icon1 && <header.icon1 size={18} />}
              <p className="capitalize">{header.title}</p>
              {header.icon2 && <header.icon2 size={18} />}
            </CardAction>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <TableCategory table={table} />
      </CardContent>
    </Card>
  );
}
