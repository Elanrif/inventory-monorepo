import { CategoryButton } from "@/components/category-button";
import { CategoryTable } from "@/components/category-table";
import ContentFiter from "@/components/content-fiter";
import { FooterCategory, NumberSelector } from "@/components/footer-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import SubHeader, { Section } from "@/components/sub-header";
import { categoryMocks } from "@/mocks/categoryMocks";
import { FileText, Plus, Upload } from "lucide-react";

const data = {
  subHeaderData: [
    {
      description: "Total Asset Value",
      price: 10356.78,
    }
  ],

  categoryTable: {
    categoryTableData: categoryMocks,
    categoryHeader: {
      id: "ID",
      name: "Name",
      desc: "Description",
      status: "Status",
      isfeatured: "Is Featured",
      createdat: "Created At",
      action: "Action"
    }

  },

  sectionData: [
    { color: "bg-green-600", statut: "In stock", total: 1452 },
    { color: "bg-yellow-400", statut: "Low stock", total: 355 },
    { color: "bg-orange-600", statut: "Out of stock", total: 186 },
  ],

  filterData: [
    {
      dateLabel: "12 Sept - 18 Oct 2024",
      amountStatusLabel: "Amount Status",
      statusLabel: "Status",
      filterLabel: "Filter "
    }
  ],

  buttonCatData: [
    {
      action: "Import",
      icon: Upload,
      variant: "default" as const,
    },
    {
      action: "Export",
      icon: FileText,
      variant: "default" as const,
    },
    {
      action: "Add Category",
      icon: Plus,
      variant: "primary" as const,
    },
  ],
  label: "Inventory",
};

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <div className="space-y-6 bg-gray-100 min-h-screen p-6 w-full">
        <CategoryButton categories={data.buttonCatData} label="Inventory" />
        <div className="flex">
          <SubHeader categories={data.subHeaderData} />
          <div className="border-l border-gray-200" />
          <Section categories={data.sectionData} />
        </div>
        <div className="bg-white p-3 rounded-lg">
          <ContentFiter categories={data.filterData} />
          <CategoryTable {...data.categoryTable} />
          <div className="flex items-center">
            <NumberSelector categories={[{ labelresult: "Result 1-10 of 45 " }]} />
            <FooterCategory />
          </div>
        </div>
      </div>
    </>
  );
}
