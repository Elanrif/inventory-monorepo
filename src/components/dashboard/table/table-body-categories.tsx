'use client';

import { ConfirmationDialog } from '@/components/confirmation-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { CategoryDto } from '@/lib/category/models/category.model';
import { deleteCategory } from '@/lib/category/services/category.service';
import 'dayjs/locale/fr';
import { dayjsLocale } from '@/shared/index-shared';
import { ROUTES } from '@/utils/route';
import { Dot, Pen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type BodyTableCategoryProps = {
  categories: CategoryDto[];
};

export default function TableBodyCategories({
  categories,
}: BodyTableCategoryProps) {
  const router = useRouter();
  const truncateStr = (MessageChannel: string, length = 10): string => {
    const result =
      MessageChannel.slice(0, length) +
      (MessageChannel.length > 10 ? '...' : '');
    return result;
  };

  return (
    <TableBody className="text-md">
      {categories.map((category, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="rounded-xs border-2 border-gray-400" />
          </TableCell>
          <TableCell className="flex items-center gap-2">
            <Image
              src={'/image'}
              alt=""
              width={35}
              height={10}
              className="object-cover"
            />
            {category.name}
          </TableCell>
          <TableCell>{truncateStr(category.description)}</TableCell>
          <TableCell
            className={`inline-flex w-fit items-center rounded-full border px-1.5 py-0.5 ${
              category.status?.toLowerCase() === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            <Dot />
            {category.status?.toLowerCase()}
          </TableCell>
          <TableCell className="text-center">
            <span
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1 ${
                category.isFeatured
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {category.isFeatured ? 'Yes' : 'No'}
            </span>
          </TableCell>
          <TableCell>{dayjsLocale(category.createdAt)}</TableCell>
          <TableCell className="flex items-center gap-2 text-center">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_CATEGORIES}/${category.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={16} color="blue" />
            </Link>
            <ConfirmationDialog
              item={category}
              onDelete={async (category) => {
                await deleteCategory(category.id);
                router.refresh();
              }}
              title="Supprimer cette catégorie ?"
              description="Cette action est irréversible."
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
