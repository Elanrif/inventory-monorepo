import { CategoryButton } from "@/components/category-button";
import { CategoryTable } from "@/components/category-table";
import ContentFiter from "@/components/content-fiter";
import { FooterCategory, NumberSelector } from "@/components/footer-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import SubHeader, { Section } from "@/components/sub-header";

const data = {

}

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <div className="space-y-6 bg-gray-100 min-h-screen p-6 w-full">
        <CategoryButton />
        <div className="flex">
          <SubHeader  />
          <div className="border-l border-gray-200" />
          <Section />
        </div>
        <div className="bg-white p-3 rounded-lg">
          <ContentFiter />
          <CategoryTable />
          <div className="flex items-center">
          <NumberSelector/>
          <FooterCategory /></div>
        </div>
      </div>
    </>
  );
}
