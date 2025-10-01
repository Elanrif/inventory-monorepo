import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Dot, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export type TableDataProps = {
  name: string;
  image: string;
  description: string;
  status: "active" | "inactive";
  statusColors: string;
  isFeatured: boolean;
  created_at: string;
};

type BodyTableCategoryProps = {
  tableData: TableDataProps[];
  action: ButtonActionProps[];
};

export default function BodyTableCategory({
  tableData,
  action,
}: BodyTableCategoryProps) {
  return (
    <TableBody className="text-md">
      {tableData.map((data, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={data.image}
              alt={data.name}
              width={35}
              height={10}
              className="mr-2 rounded-md"
            />
            {data.name}
          </TableCell>
          <TableCell>{data.description}</TableCell>
          <TableCell
            className={`flex w-fit border rounded-full px-1.5 py-0.5 ${data.statusColors}`}
          >
            <Dot />
            {data.status}
          </TableCell>
          <TableCell className="ps-8">
            {data.isFeatured ? "Yes" : "No"}
          </TableCell>
          <TableCell>{data.created_at}</TableCell>
          <TableCell className="text-center">
            <ButtonAction action={action} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export type ButtonActionProps = {
  icon: React.ReactNode;
  label: string;
  className: string;
};

export type ActionsProps = {
  action: ButtonActionProps[];
};
export function ButtonAction({ action }: ActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {action.map((button, id) => (
          <DropdownMenuItem className={cn("ps-5", button.className)} key={id}>
            {button.icon && button.icon}
            {button.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
