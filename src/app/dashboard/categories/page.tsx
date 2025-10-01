import CardCategory from "@/components/dashboard/categories/card-category";
import HeaderCategory, {
  ButtonVariant,
} from "@/components/dashboard/categories/header-category";
import SubHeaderCategory from "@/components/dashboard/categories/sub-header-category";
import { TableDataProps } from "@/components/dashboard/categories/table/table-body";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Upload,
  Plus,
  FileText,
  Calendar,
  ChevronDown,
  ListFilter,
  Pen,
  Trash,
  ArrowRight,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react";

const data = {
  headerCategoryData: {
    title: "Catégories",
    headerButtonsData: [
      {
        icon: Upload,
        label: "Import",
      },
      {
        icon: FileText,
        label: "Export",
      },
      {
        icon: Plus,
        label: "Add Category",
        className: "bg-purple-600 text-white hover:bg-purple-700",
        variant: "default" as ButtonVariant,
      },
    ],
  },
  subHeaderCategoryData: {
    totalTitle: "Total asset value",
    totalValue: "10,356788",
    ValueCategories: "2379",
    titleCategories: "catégories",
    categoryStock: [
      {
        className: "bg-green-600 w-[150px]",
      },
      {
        className: "bg-yellow-400 w-[70px]",
      },
      {
        className: "bg-red-600 w-[120px]",
      },
      {
        className: "bg-green-600 py-1.5 w-[5px]",
        text: "in stock: ",
        number: "1452",
      },
      {
        className: "bg-yellow-600 py-1.5 w-[5px]",
        text: "low stock: ",
        number: "355",
      },
      {
        className: "bg-red-600 py-1.5 w-[5px] ",
        text: "out of stock:",
        number: "186",
      },
    ],
  },
  Category: {
    HeaderCategoryData: [
      {
        icon1: Calendar,
        title: "12 sep-28 oct 2024",
        icon2: ChevronDown,
      },
      {
        title: "amount status",
        icon2: ChevronDown,
      },
      {
        title: "status",
        icon2: ChevronDown,
      },
      {
        icon1: ListFilter,
        title: " filter",
      },
    ],
    Table: {
      TableTitleData: [
        { title: <Checkbox className="border-2 border-gray-400 rounded-xs" /> },
        { title: "Name" },
        { title: "Description" },
        { title: "Status", icon: ChevronDown },
        { title: "Is_featured" },
        { title: "Created_at" },
        { title: "Action" },
      ],
      TableDataMock: [
        {
          name: "iPhone 15",
          image: "/images/categories/iphone.jpg",
          description: "iPhone 15, puce A17.",
          status: "active",
          statusColors: "bg-green-100 text-green-500",
          isFeatured: true,
          created_at: "2025-09-12",
        },
        {
          name: "Samsung S24",
          image: "/images/categories/samsung.jpg",
          description: "Samsung S24, Snapdragon 8.",
          status: "inactive",
          statusColors: "bg-red-100 text-red-500",
          isFeatured: false,
          created_at: "2025-10-01",
        },
        {
          name: "MacBook Pro",
          image: "/images/categories/macbook-pro.jpg",
          description: "MacBook Pro, puce M3.",
          status: "active",
          statusColors: "bg-green-100 text-green-500",
          isFeatured: true,
          created_at: "2025-08-22",
        },
        {
          name: "AirPods Pro",
          image: "/images/categories/airpods-pro.jpg",
          description: "Écouteurs sans fil, ANC.",
          status: "inactive",
          statusColors: "bg-red-100 text-red-500",
          isFeatured: false,
          created_at: "2025-07-10",
        },
        {
          name: "Apple Watch",
          image: "/images/categories/apple-watch.jpg",
          description: "Montre connectée santé.",
          status: "active",
          statusColors: "bg-green-100 text-green-500",
          isFeatured: true,
          created_at: "2025-09-20",
        },
        {
          name: "iPad Pro",
          image: "/images/categories/ipad-pro.jpg",
          description: "iPad Pro, puce M2.",
          status: "inactive",
          statusColors: "bg-red-100 text-red-500",
          isFeatured: false,
          created_at: "2025-06-15",
        },
      ] satisfies TableDataProps[],
      ButtonActionData: [
        {
          icon: <Pen color="blue" />,
          label: "Edit",
          className: "text-blue-700",
        },
        {
          icon: <Trash color="red" />,
          label: "Delete",
          className: "text-red-700",
        },
      ],
      footerCategoryData: {
        totalResults: "Result 1-10 of 45",
        buttonData: [
          {
            label: "10",
            icon: ChevronDown,
            size: "sm",
          },
          {
            label: "Previous",
            icon: ArrowLeft,
            className: "flex items-center",
          },
          {
            label: "1",
            className: "border border-purple-700",
          },
          {
            label: "2",
          },
          {
            label: "3",
          },
          {
            icon: MoreHorizontal,
          },
          {
            label: "12",
          },
          {
            label: "Next",
            icon: ArrowRight,
          },
        ],
      },
    },
  },
};

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <HeaderCategory
        headerButtons={data.headerCategoryData.headerButtonsData}
        title={data.headerCategoryData.title}
      />
      <SubHeaderCategory
        totalTitle={data.subHeaderCategoryData.totalTitle}
        totalValue={data.subHeaderCategoryData.totalValue}
        ValueCategories={data.subHeaderCategoryData.ValueCategories}
        titleCategories={data.subHeaderCategoryData.titleCategories}
        subHeader={data.subHeaderCategoryData.categoryStock}
      />
      <CardCategory
        cardHeader={data.Category.HeaderCategoryData}
        tableHeader={data.Category.Table.TableTitleData}
        tableData={data.Category.Table.TableDataMock}
        buttonAction={data.Category.Table.ButtonActionData}
        footerButtonTable={data.Category.Table.footerCategoryData.buttonData}
        totalResults={data.Category.Table.footerCategoryData.totalResults}
      />

    </>
  );
}
