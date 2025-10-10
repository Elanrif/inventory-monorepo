"use client";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CategoryDto } from "@/lib/category/models/category.model";
import { deleteCategory } from "@/lib/category/services/category.service";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/route";
import { Dot, MoreHorizontal, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BodyTableCategoryProps = {
  categories: CategoryDto[];
};

export default function TableBodyCategories({
  categories,
}: BodyTableCategoryProps) {
  return (
    <TableBody className="text-md">
      {categories.map((category, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={"/image"}
              alt={category.name}
              width={35}
              height={10}
              className="mr-2 rounded-md"
            />
            {category.name}
          </TableCell>
          <TableCell>{category.description}</TableCell>
          <TableCell
            className={`flex w-fit border rounded-full px-1.5 py-0.5 ${category.statusColors}`}
          >
            <Dot />
            {category.status}
          </TableCell>
          <TableCell className="ps-8">
            {category.isFeatured ? "Yes" : "No"}
          </TableCell>
          <TableCell>{category.created_at}</TableCell>
          <TableCell className="text-center flex items-center gap-2">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_CATEGORIES}/${category.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={16} color="blue" />
            </Link>
            <ConfirmationDialog<CategoryDto>
              item={category}
              onDelete={(category) => deleteCategory(category.id)}
              title="Supprimer cette catégorie ?"
              description="Cette action est irréversible."
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}



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


export type ButtonActionProps = {
  icon: React.ReactNode;
  label: string;
  url?: string;
  className: string;
};