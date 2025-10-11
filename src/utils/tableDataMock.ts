import { TableDataProps } from "@/components/dashboard/categories/table/table-body";
/* const genSequence = (n = 0) => {
  let i = n;
  return () => i++
}

const genId = genSequence(0) */

export const TableDataMock: TableDataProps[] = [
  {
    id: 1,
    name: "iPhone 15",
    image: "/images/categories/iphone.jpg",
    description: "iPhone 15, puce A17.",
    status: "active",
    statusColors: "bg-green-100 text-green-500",
    isFeatured: true,
    created_at: "2025-09-12",
  },
  {
    id: 2,
    name: "Samsung S24",
    image: "/images/categories/samsung.jpg",
    description: "Samsung S24, Snapdragon 8.",
    status: "inactive",
    statusColors: "bg-red-100 text-red-500",
    isFeatured: false,
    created_at: "2025-10-01",
  },
  {
    id: 3,
    name: "MacBook Pro",
    image: "/images/categories/macbook-pro.jpg",
    description: "MacBook Pro, puce M3.",
    status: "active",
    statusColors: "bg-green-100 text-green-500",
    isFeatured: true,
    created_at: "2025-08-22",
  },
  {
    id: 4,
    name: "AirPods Pro",
    image: "/images/categories/airpods-pro.jpg",
    description: "Écouteurs sans fil, ANC.",
    status: "inactive",
    statusColors: "bg-red-100 text-red-500",
    isFeatured: false,
    created_at: "2025-07-10",
  },
  {
    id: 5,
    name: "Apple Watch",
    image: "/images/categories/apple-watch.jpg",
    description: "Montre connectée santé.",
    status: "active",
    statusColors: "bg-green-100 text-green-500",
    isFeatured: true,
    created_at: "2025-09-20",
  },
  {
    id: 6,
    name: "iPad Pro",
    image: "/images/categories/ipad-pro.jpg",
    description: "iPad Pro, puce M2.",
    status: "inactive",
    statusColors: "bg-red-100 text-red-500",
    isFeatured: false,
    created_at: "2025-06-15",
  },
] satisfies TableDataProps[]