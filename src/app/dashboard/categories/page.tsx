import CardBody from "@/components/dashboard/categories/boby/card-body";
import HeaderCategory, { ButtonVariant } from "@/components/dashboard/categories/header/header-category";
import SubHeaderCategory from "@/components/dashboard/categories/sub-header/sub-header-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { Upload,Plus, FileText  } from "lucide-react";


const subHeaderData = [
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
];

const headerButtonsData = [
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
];

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <HeaderCategory headerButtons={headerButtonsData} title="Catégories"  />
      <SubHeaderCategory
        totalDescription="Total asset value"
        totalValueDesc="10,356788"
        totalValueCat="2379"
        titleCategories="catégories"
        subHeader={subHeaderData}
      />
      <CardBody />
    </>
  );
}
