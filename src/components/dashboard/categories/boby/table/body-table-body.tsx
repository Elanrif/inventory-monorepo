import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Dot, MoreHorizontal, Pen, Trash } from "lucide-react";
import Image from "next/image";



type TableDataProps = {
  name: string;
  src: string;
  description: string;
  status: "active" | "inactive";
  statusColors: string;
  isFeatured: boolean;
  created_at: string;
};

export default function BodyTableBody({
  name,
  src,
  description,
  status,
  statusColors,
  isFeatured,
  created_at,
}: TableDataProps) {
  return (
    <TableBody className="text-md">
      <TableRow>
        <TableCell>
          <Checkbox className="border-2 border-gray-400 rounded-xs" />
        </TableCell>

        <TableCell className="flex items-center">
          <Image
            src={src}
            alt={name}
            width={35}
            height={10}
            className="mr-2 rounded-md"
          />
          {name}
        </TableCell>
        <TableCell>{description}</TableCell>
        <TableCell
          className={`flex w-fit border rounded-full px-1.5 py-0.5 ${statusColors}`}
        >
          <Dot />
          {status}
        </TableCell>
        <TableCell className="ps-8">{isFeatured ? "Yes" : "No"}</TableCell>
        <TableCell>{created_at}</TableCell>
        <TableCell className="text-center">
          <ButtonAction />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export  function ButtonAction() {
  const actions = [
    {
      icon: <Pen color="blue" />,
      label: "Edit",
      className: "text-blue-700",
    },
    {
      icon: <Trash color="red" />,
      label: "Delete",
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
          <DropdownMenuItem className={cn("ps-5",action.className)}  key={id}>
            {action.icon}
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
