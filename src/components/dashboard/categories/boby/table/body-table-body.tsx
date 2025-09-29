import { Checkbox } from "@/components/ui/checkbox";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Dot } from "lucide-react";
import Image from "next/image";
import ButtonAction from "./button-action";

type TableDataType = {
  categoryName: {
    title: string;
    image: string;
  }[];
  Description: string;
  status: {
    title: "active" | "inactive";
    color: string;
  }[];
  Is_featured: boolean;
  Created_at: string;
};

const TableDataMock: TableDataType[] = [
  {
    categoryName: [
      {
        title: "iPhone 15",
        image: "/images/categories/iphone.jpg",
      },
    ],
  Description: "iPhone 15, puce A17.",
    status: [
      {
        title: "active",
        color: "bg-green-100 text-green-500",
      },
    ],
    Is_featured: true,
  Created_at: "2025-09-12",
  },
  {
    categoryName: [
      {
        title: "Samsung S24",
        image: "/images/categories/samsung.jpg",
      },
    ],
  Description: "Samsung S24, Snapdragon 8.",
    status: [
      {
        title: "inactive",
        color: "bg-red-100 text-red-500",
      },
    ],
    Is_featured: false,
  Created_at: "2025-10-01",
  },
  {
    categoryName: [
      {
        title: "MacBook Pro",
        image: "/images/categories/macbook-pro.jpg",
      },
    ],
  Description: "MacBook Pro, puce M3.",
    status: [
      {
        title: "active",
        color: "bg-green-100 text-green-500",
      },
    ],
    Is_featured: true,
    Created_at: "2025-08-22",
  },
  {
    categoryName: [
      {
        title: "AirPods Pro",
        image: "/images/categories/airpods-pro.jpg",
      },
    ],
  Description: "Écouteurs sans fil, ANC.",
    status: [
      {
        title: "inactive",
        color: "bg-red-100 text-red-500",
      },
    ],
    Is_featured: false,
  Created_at: "2025-07-10",
  },
  {
    categoryName: [
      {
        title: "Apple Watch",
        image: "/images/categories/apple-watch.jpg",
      },
    ],
  Description: "Montre connectée santé.",
    status: [
      {
        title: "active",
        color: "bg-green-100 text-green-500",
      },
    ],
    Is_featured: true,
  Created_at: "2025-09-20",
  },
  {
    categoryName: [
      {
        title: "iPad Pro",
        image: "/images/categories/ipad-pro.jpg",
      },
    ],
  Description: "iPad Pro, puce M2.",
    status: [
      {
        title: "inactive",
        color: "bg-red-100 text-red-500",
      },
    ],
    Is_featured: false,
  Created_at: "2025-06-15",
  },
];


export default function BodyTableBody() {
  return (
    <TableBody className="text-md">
      {TableDataMock.map((data, index) => (
        <TableRow key={index}>
          <TableCell>
            <Checkbox className="border-2 border-gray-400 rounded-xs" />
          </TableCell>
          {data.categoryName.map((categoryNameItem, i) => (
            <TableCell key={i} className="flex items-center">
              <Image
                src={categoryNameItem.image}
                alt={categoryNameItem.title}
                width={35}
                height={10}
                className="mr-2 rounded-md"
              />
              {categoryNameItem.title}
            </TableCell>
          ))}
          <TableCell>{data.Description}</TableCell>
          {data.status.map((statusItem, id) => (
            <TableCell
              className={`flex w-fit border rounded-full px-1.5 py-0.5 ${statusItem.color}`}
              key={id}
            >
              <Dot />
              {statusItem.title}
            </TableCell>
          ))}
          <TableCell className="ps-8">{data.Is_featured ? "Yes" : "No"}</TableCell>
          <TableCell>{data.Created_at}</TableCell>
          <TableCell className="text-center">
            <ButtonAction />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
