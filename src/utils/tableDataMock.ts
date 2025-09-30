export type TableDataType = {
  categoryName: {
    title: string;
    image: string;
  }[];
  Description: string;
  Status: {
    title: "active" | "inactive";
    color: string;
  }[];
  Is_featured: boolean;
  Created_at: string;
};

export const TableDataMock: TableDataType[] = [
  {
    categoryName: [
      {
        title: "iPhone 15",
        image: "/images/categories/iphone.jpg",
      },
    ],
    Description: "iPhone 15, puce A17.",
    Status: [
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
    Status: [
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
    Status: [
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
    Status: [
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
    Status: [
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
    Status: [
      {
        title: "inactive",
        color: "bg-red-100 text-red-500",
      },
    ],
    Is_featured: false,
    Created_at: "2025-06-15",
  },
];
