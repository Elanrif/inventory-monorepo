import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {CatTableProps } from "@/mocks/categoryMocks"
import { ActionCell } from "./action";

export type CateTableProps = {
    id: number;
    name: string;
    description: string;
    status: "active" | "inactive";
    isfeatured: "Yes" | "No";
    imageUrl: string;
};

export type CatHeaderProps = {
    id: string;
    name: string;
    desc: string;
    status: string;
    isfeatured: string;
    createdat: string;
    action: string
};

export function CategoryTable({ 
    categoryTableData,
    categoryHeader,
    }: { 
    categoryHeader: CatHeaderProps;
    categoryTableData: CatTableProps[];
}) {
    return (
        <Table>
            
                <TableHeader>
                    <TableRow className="bg-gray-100 rounded-lg h-[50px]">
                        <TableHead className="w-[100px]">{categoryHeader.id}</TableHead>
                        <TableHead>{categoryHeader.name}</TableHead>
                        <TableHead>{categoryHeader.desc} </TableHead>
                        <TableHead>{categoryHeader.status}</TableHead>
                        <TableHead>{categoryHeader.isfeatured}</TableHead>
                        <TableHead>{categoryHeader.createdat}</TableHead>
                        <TableHead className="text-right">{categoryHeader.action}</TableHead>
                    </TableRow>
                </TableHeader>
            
            <TableBody>
                {categoryTableData.map((category, Index) => (
                    <TableRow key={Index}>
                        <TableCell className="font-medium">{Index + 1}</TableCell>
                        <TableCell >
                            <div className="flex items-center gap-2">
                                <Image
                                    src={category.imageUrl}
                                    alt="Placeholder"
                                    width={30}
                                    height={30}
                                    className="w-[30px] h-[30px] object-cover"
                                />
                                {category.name}
                            </div>
                        </TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 ">
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
                        <TableCell className="text-center text-md pr-6">{category.isfeatured}</TableCell>
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
