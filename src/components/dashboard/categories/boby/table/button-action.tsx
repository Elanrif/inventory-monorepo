import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pen, Trash } from "lucide-react";
import React from "react";

export default function ButtonAction() {
  const actions = [
    {
      icon: <Pen color="blue" />,
      label: "Modifier",
      className: "text-blue-700",
    },
    {
      icon: <Trash color="red" />,
      label: "Supprimer",
      className: "text-red-700",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {actions.map((action, id) => (
          <DropdownMenuItem className={action.className} key={id}>
            {action.icon}
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
