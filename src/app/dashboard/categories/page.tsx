import CardCategory from "@/components/dashboard/categories/card-category";
import HeaderCategory, {
  ButtonVariant,
} from "@/components/dashboard/categories/header-category";
import SubHeaderCategory from "@/components/dashboard/categories/sub-header-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { TableDataMock } from "@/utils/tableDataMock";
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
    headerButtons: [
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
    subHeader: {
      totalTitle: "total categories:",
      totalValue: "10,356788",
      titleCategories: "categories:",
      ValueCategories: "2379",
    },
    subHeaderColors: [
      {
        className: "bg-green-600 w-[150px]",
      },
      {
        className: "bg-yellow-400 w-[70px]",
      },
      {
        className: "bg-red-600 w-[120px]",
      },
    ],
    subHeaderData: [
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
  category: {
    cardCatHeader: [
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
    table: {
      tableTitles: [
        { title: <Checkbox className="border-2 border-gray-400 rounded-xs" /> },
        { title: "Name" },
        { title: "Description" },
        { title: "Status", icon: ChevronDown },
        { title: "Is_featured" },
        { title: "Created_at" },
        { title: "Action" },
      ],
      tableData: TableDataMock,
      buttonAction: [
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
      footerTable: {
        buttonResults: {
          totalResults: "Result 1-10 of 45",
          label: "10",
          icon: ChevronDown,
          size: "sm",
        },
        buttonPagination: [
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
        headerButtons={data.headerCategoryData.headerButtons}
        title={data.headerCategoryData.title}
      />
      <SubHeaderCategory {...data.subHeaderCategoryData} />
      <CardCategory
        cardCatHeader={data.category.cardCatHeader}
        table={data.category.table}
      />
    </>
  );
}
