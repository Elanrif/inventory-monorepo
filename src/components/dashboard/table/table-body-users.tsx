import { ConfirmationDialog } from '@/components/confirmation-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { UserDto } from '@/lib/user/models/user.model';
import { ROUTES } from '@/utils/route';
import { Pen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type BodyTableCategoryProps = {
  users: UserDto[];
};

export default function TableBodyUsers({ users }: BodyTableCategoryProps) {
  return (
    <TableBody className="text-md">
      {users.map((user, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="rounded-xs border-2 border-gray-400" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={'/image'}
              alt={user.username}
              width={35}
              height={10}
              className="mr-2 rounded-md"
            />
            {user.username}
          </TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>{user.address}</TableCell>
          <TableCell>{user.createdAt}</TableCell>
          <TableCell className="flex items-center gap-2 text-center">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_USERS}/${user.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={16} color="blue" />
            </Link>
            <ConfirmationDialog user={user} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export type ButtonActionProps = {
  icon: React.ReactNode;
  url?: string;
  label: string;
  className: string;
};
