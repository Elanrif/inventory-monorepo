"use client";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CategoryDto } from "@/lib/category/models/category.model";
import { deleteCategory } from "@/lib/category/services/category.service";
import { ROUTES } from "@/utils/route";
import { Dot, ImageDown, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "dayjs/locale/fr";
import { dayjsLocale, truncateStr } from "@/shared/index-shared";

type BodyTableCategoryProps = {
  categories: CategoryDto[];
};

export default function TableBodyCategories({
  categories,
}: BodyTableCategoryProps) {
  const router = useRouter();

  const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategory(categoryId);

    toast.success("Suppression réussie !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.refresh();
  };

  return (
    <TableBody className="text-md">
      {categories.map((category, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>

          <TableCell className="flex items-center">
            {category.imageUrl ? (
              <Image
                src={category.imageUrl}
                alt={category.name}
                width={35}
                height={35}
                className="object-cover"
              />
            ) : (
              <ImageDown />
            )}
            <span className="ps-2">{category.name}</span>
          </TableCell>
          <TableCell>{truncateStr(category.description)}</TableCell>
          <TableCell
            className={`flex items-center w-fit border rounded-full px-1.5 py-0.5 ${
              category.status === "ACTIVE"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <Dot />
            {category.status?.toLowerCase()}
          </TableCell>
          <TableCell className="ps-8">
            {category.isFeatured ? "Yes" : "No"}
          </TableCell>
          <TableCell>
            {dayjsLocale(category.createdAt)}
          </TableCell>
          <TableCell className="text-center flex items-center gap-2">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_CATEGORIES}/${category.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={16} color="blue" />
            </Link>
            <ConfirmationDialog
              handleDelete={() => handleDeleteCategory(category.id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
    