import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { UserDto } from "@/lib/user/models/user.model";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

type BodyTableCategoryProps = {
  users: UserDto[];
  action: ButtonActionProps[];
};

export default function TableBodyUsers({
  users,
  action,
}: BodyTableCategoryProps) {
  return (
    <TableBody className="text-md">
      {users.map((user, id) => (
        <TableRow key={id}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>

          <TableCell className="flex items-center">
            <Image
              src={"/image"}
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
