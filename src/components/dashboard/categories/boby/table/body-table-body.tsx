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
  category: string;
  sku: string;
  incoming: number;
  stock: number;
  status: {
    title: string;
    color: string;
  }[];
  price: string;
};

const TableData: TableDataType[] = [
  {
    categoryName: [
      {
        title: "iPhone 15",
        image: "/images/categories/iphone.jpg",
      },
    ],
    category: "Smartphone",
    sku: "IP15-001",
    incoming: 50,
    stock: 120,
    status: [
      {
        title: "In Stock",
        color: "bg-green-100 text-green-500",
      },
    ],
    price: "$999",
  },
  {
    categoryName: [
      {
        title: "Samsung S24",
        image: "/images/categories/samsung.jpg",
      },
    ],
    category: "Smartphone",
    sku: "SS24-002",
    incoming: 30,
    stock: 80,
    status: [
      {
        title: "Low Stock",
        color: "bg-yellow-100 text-yellow-500",
      },
    ],
    price: "$899",
  },
  {
    categoryName: [
      {
        title: "MacBook Pro",
        image: "/images/categories/macbook-pro.jpg",
      },
    ],
    category: "Laptop",
    sku: "MBP-003",
    incoming: 10,
    stock: 40,
    status: [
      {
        title: "In Stock",
        color: "bg-green-100 text-green-500",
      },
    ],
    price: "$2,199",
  },
  {
    categoryName: [
      {
        title: "AirPods Pro",
        image: "/images/categories/airpods-pro.jpg",
      },
    ],
    category: "Accessories",
    sku: "APP-004",
    incoming: 100,
    stock: 200,
    status: [
      {
        title: "In Stock",
        color: "bg-green-100 text-green-500",
      },
    ],
    price: "$249",
  },
  {
    categoryName: [
      {
        title: "Apple Watch",
        image: "/images/categories/apple-watch.jpg",
      },
    ],
    category: "Wearables",
    sku: "AW-005",
    incoming: 25,
    stock: 60,
    status: [
      {
        title: "In Stock",
        color: "bg-green-100 text-green-500",
      },
    ],
    price: "$399",
  },
  {
    categoryName: [
      {
        title: "iPad Pro",
        image: "/images/categories/ipad-pro.jpg",
      },
    ],
    category: "Tablet",
    sku: "IPAD-006",
    incoming: 15,
    stock: 35,
    status: [
      {
        title: "Out of Stock",
        color: "bg-red-100 text-red-500 ",
      },
    ],
    price: "$1,099",
  },
];

export default function BodyTableBody() {
  return (
    <TableBody className="text-md">
      {TableData.map((data, index) => (
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
          <TableCell>{data.category}</TableCell>
          <TableCell>{data.sku}</TableCell>
          <TableCell>{data.incoming}</TableCell>
          <TableCell>{data.stock}</TableCell>
          {data.status.map((statusItem, id) => (
            <TableCell className={`flex w-fit border rounded-full px-1.5 py-0.5 ${statusItem.color}`} key={id}>
              <Dot />
              {statusItem.title}
            </TableCell>
          ))}
          <TableCell>{data.price}</TableCell>
          <TableCell className="text-center">
            <ButtonAction />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
