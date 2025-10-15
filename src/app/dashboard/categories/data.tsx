import { ButtonVariant } from "@/components/dashboard/header-section";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Upload,
  Plus,
  FileText,
  Calendar,
  ChevronDown,
  ListFilter,
  ArrowRight,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react";
import { ROUTES } from "@/utils/route";

const { DASHBOARD_ADD_CATEGORIES, DASHBOARD_UPDATE_CATEGORIES } = ROUTES;
export const data = {
  headerData: {
    title: "Categories",
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
        href: DASHBOARD_ADD_CATEGORIES,
        className: "bg-purple-600 text-white hover:bg-purple-700",
        variant: "default" as ButtonVariant,
      },
    ],
  },
  subHeaderData: {
    subHeader: {
      totalTitle: "total users:",
      totalValue: "10,356788",
      title: "users:",
      value: "2379",
    },
    colors: [
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
    data: [
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
  payload: {
    headerBtn: [
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
      columns: [
        { label: <Checkbox className="border-2 border-gray-400 rounded-xs" /> },
        { label: "Name" },
        { label: "Description" },
        { label: "Status", icon: ChevronDown },
        { label: "Is_featured" },
        { label: "created" },
        { label: "Action" },
      ],
      footer: {
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
