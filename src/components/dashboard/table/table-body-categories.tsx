"use client";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Category } from "@/lib/categorry/models/category.model";
import { daysLocale, truncateStr } from "@/shared/index-shared";
import { ROUTES } from "@/utils/route";
import { Dot, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BodyTableCategoryProps = {
  categories: Category[];
};

export default function TableBodyCategories({
  categories,
}: BodyTableCategoryProps) {
console.log(categories);

  return (
    <TableBody className="text-md">
      {categories.map((category, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={35}
              height={35}
              className="mr-2 rounded-md"
            />
            {category.name}
          </TableCell>
          <TableCell>{truncateStr(category.description)}</TableCell>
          <TableCell
            className={`flex w-fit border rounded-full px-2 py-0.5 lowercase ${
              category.status === "INACTIVE"
                ? " bg-red-400"
                : " bg-green-300"
            }`}
          >
            <Dot />
            {category.status}
          </TableCell>
          <TableCell>
            <span
              className={`px-3 py-1 rounded-full font-semibold w-2 h-2 text-white 
                ${category.isFeatured ? "bg-green-300" : "bg-red-400 "}`}
            >
              {category.isFeatured ? "Yes" : "No"}
            </span>
          </TableCell>

          <TableCell>
            {daysLocale(category.createdAt)}
          </TableCell>
          <TableCell className="text-center flex items-center gap-2">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_CATEGORIES}/${category.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={17} color="blue" />
            </Link>
            <ConfirmationDialog
              category={category}
              title="Supprimer la catégorie ?"
              description={`Voulez-vous vraiment supprimer la catégorie "${category.name}" ?`}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}



