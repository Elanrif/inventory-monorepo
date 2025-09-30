import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  LucideIcon,
  Search,
} from "lucide-react";
import React from "react";

type Props = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};
type HeaderProps = {
  header: Props[];
};


export default function HeaderCardBody({header}:HeaderProps) {
  return (
    <div className="flex justify-between p-4">
      <div className="relative ms-2">
        <Input placeholder="Search" className="w-[240px]" />
        <Search className="absolute top-2 left-52 text-stone-400 size-5" />
      </div>
      <div className="flex gap-4">
        {header.map((header,id) =>(
                      <Card
              className="flex flex-row items-center gap-2 px-3 py-2 font-medium text-sm cursor-pointer"
              key={id}
            >
              {header.icon1 && React.createElement(header.icon1, { size: 18 })}
              <p className="capitalize">{header.title}</p>
              {header.icon2 && React.createElement(header.icon2,{size:18})}
            </Card>
        ))}
      </div>
    </div>
  );
}
