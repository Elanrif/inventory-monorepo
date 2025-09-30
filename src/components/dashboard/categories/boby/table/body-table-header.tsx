import { TableHead } from "@/components/ui/table";
import { LucideIcon } from "lucide-react";
import React, { JSX } from "react";

type props = {
  title: string | JSX.Element;
  icon?: LucideIcon;
};

export default function BodyTableHeader({ title, icon }: props) {
  return (
    <TableHead>
      {title}
      {icon &&
        React.createElement(icon, { size: 15, className: "ml-1 inline" })}
    </TableHead>
  );
}
