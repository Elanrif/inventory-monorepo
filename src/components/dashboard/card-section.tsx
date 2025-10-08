import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { LucideIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CategoryTableProps, TableSection } from "./table/table-section";
import { CategoryDto } from "./table/table-body-section";

type CardHeaderProps = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};

export type CategoryProps = {
  actions: CardHeaderProps[];
  table: CategoryTableProps;
  rows: CategoryDto[];
};

export default function CardSection({ actions, table, rows }: CategoryProps) {
  return (
    <Card className="mt-6">
      <CardHeader className="flex justify-between p-4">
        <div className="relative ms-2">
          <Input placeholder="Search" className="w-[240px]" />
          <Search className="absolute top-2 left-52 text-stone-400 size-5" />
        </div>
        <div className="hidden xl:flex gap-4">
          {actions.map((action, id) => (
            <CardAction
              className="flex flex-row items-center gap-2 px-3 py-2 text-sm cursor-pointer"
              key={id}
            >
              {action.icon1 && <action.icon1 size={18} />}
              <p className="capitalize">{action.title}</p>
              {action.icon2 && <action.icon2 size={18} />}
            </CardAction>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <TableSection table={table} rows={rows} />
      </CardContent>
    </Card>
  );
}
