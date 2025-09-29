import { CategoryButton } from "@/components/category-button";
import { CategoryTable } from "@/components/category-table";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import SubHeader from "@/components/sub-header";

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <div className="space-y-6 m-8">
      <CategoryButton/>
      <SubHeader 
      price={10.356788} 
      description="Total Asset Value"
      totalCategory="2379 Categories"
      />
       <CategoryTable/>
      </div>
    </>
  );
}
