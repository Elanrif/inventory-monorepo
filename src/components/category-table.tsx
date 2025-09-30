import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { categoryMocks } from "@/mocks/categoryMocks"
import { ActionCell } from "./action";


export function CategoryTable() {
    return (
        <Table className="bg-white">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="bg-">Status</TableHead>
                    <TableHead>Is_Featured</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categoryMocks.map((category, Index) => (
                    <TableRow key={Index}>
                        <TableCell className="font-medium">{category.id}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={category.imageUrl}
                                    alt="Placeholder"
                                    width={30}
                                    height={30}
                                    className="w-[30px] h-[30px] object-cover"
                                />
                                {category.Name}
                            </div>
                        </TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`flex items-center gap-2 px-2 py-1 rounded-full text-sm ${category.status === "active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full ${category.status === "active" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    />
                                    {category.status}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">{category.is_featured}</TableCell>
                        <TableCell>{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <ActionCell />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
