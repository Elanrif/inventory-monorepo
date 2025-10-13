"use client";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { UserDto } from "@/lib/user/models/user.model";
import { deleteUser } from "@/lib/user/services/user.service";
import { ROUTES } from "@/utils/route";
import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type BodyTableCategoryProps = {
  users: UserDto[];
};

export default function TableBodyUsers({ users }: BodyTableCategoryProps) {
  const router = useRouter()
  const handleDeleteUser = async (userId: number) => {
    await deleteUser(userId);
    toast.success("Suppression réussie !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.refresh()
  };

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
          <TableCell className="text-center flex items-center gap-2">
            <Link
              href={`${ROUTES.DASHBOARD_UPDATE_USERS}/${user.id}`}
              className="flex items-center gap-3"
            >
              <Pen size={16} color="blue" />
            </Link>
            <ConfirmationDialog
              handleDelete={() => handleDeleteUser(user.id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
