import { Checkbox } from "@/components/ui/checkbox";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, LucideIcon } from "lucide-react";
import React, { JSX } from "react";

type Props = {
  title: string | JSX.Element;
  icon?: LucideIcon;
};

const TableHeadersData:Props[] = [
  { title: <Checkbox className="border-2 border-gray-400 rounded-xs" /> },
  { title: "Category name" },
  { title: "Category" },
  { title: "SKU" },
  { title: "Incoming" },
  { title: "Stock" },
  { title: "Status", icon: ChevronDown },
  { title: "Price" },
  { title: "Action" },
];

export default function BodyTableHeader() {
  return (
    <TableHeader className="bg-muted">
      <TableRow>
        {TableHeadersData.map((header, index) => (
          <TableHead key={index}>
            {header.title}
            {header.icon && <header.icon size={15} className="ml-1 inline" />}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
