import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  ChevronDown,
  ListFilter,
  LucideIcon,
  Search,
} from "lucide-react";
import React from "react";

type Items = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};

const headerCardBodyData: Items[] = [
  {
    icon1: Calendar,
    title: "12 sep-28 oct 2024",
    icon2: ChevronDown,
  },
  {
    title: "amount status",
    icon2: ChevronDown,
  },
  {
    title: "status",
    icon2: ChevronDown,
  },
  {
    icon1: ListFilter,
    title: " filter",
  },
];

export default function HeaderCardBody() {
  return (
    <div className="flex justify-between p-4">
      <div className="relative ms-2">
        <Input placeholder="Search" className="w-[240px]" />
        <Search className="absolute top-2 left-52 text-stone-400 size-5" />
      </div>
      <div className="flex gap-4">
        {headerCardBodyData.map((item, index) => {
          return (
            <Card
              className="flex flex-row items-center gap-2 px-3 py-2 font-medium text-sm cursor-pointer"
              key={index}
            >
              {item.icon1 && <item.icon1 size={18} />}
              <p className="capitalize">{item.title}</p>
              {item.icon2 && <item.icon2 size={18} />}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
