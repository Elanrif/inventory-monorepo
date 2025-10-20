import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Dot, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export type CategoryDto = {
  name: string;
  image: string;
  description: string;
  status: 'active' | 'inactive';
  statusColors: string;
  isFeatured: boolean;
  created_at: string;
};

type BodyTableCategoryProps = {
  categories: CategoryDto[];
  action: ButtonActionProps[];
};

export default function TableBodyCategories({
  categories,
  action,
}: BodyTableCategoryProps) {
  return (
    <TableBody className="text-md">
      {categories.map((category, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="rounded-xs border-2 border-gray-400" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={category.image}
              alt={category.name}
              width={35}
              height={10}
              className="mr-2 rounded-md"
            />
            {category.name}
          </TableCell>
          <TableCell>{category.description}</TableCell>
          <TableCell
            className={`flex w-fit rounded-full border px-1.5 py-0.5 ${category.statusColors}`}
          >
            <Dot />
            {category.status}
          </TableCell>
          <TableCell className="ps-8">
            {category.isFeatured ? 'Yes' : 'No'}
          </TableCell>
          <TableCell>{category.created_at}</TableCell>
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
          <DropdownMenuItem className={cn('ps-5', button.className)} key={id}>
            {button.icon && button.icon}
            {button.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
