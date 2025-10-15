import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { data } from "./data";
import HeaderSection from "@/components/dashboard/header-section";
import SubHeaderSection from "@/components/dashboard/sub-header-section";
import { CardSection } from "@/components/dashboard/card-section";
import TableBodyCategories from "@/components/dashboard/table/table-body-categories";
import { getAllCategories } from "@/lib/categorry/services/category.service";


export default async function CategoryPage() {
  
    const categories = await getAllCategories();
    const breadCrumbUrl = {
      label: "Catégories",
    };
  return (
    <>
      <SidebarBreadcrumb {...breadCrumbUrl} />
      <HeaderSection
        headerButtons={data.headerData.headerButtons}
        title={data.headerData.title}
      />
      <SubHeaderSection {...data.subHeaderData} />
      <CardSection
        actions={data.payload.headerBtn}
        table={data.payload.table}
        data={categories}
        render={(c) => (
          <TableBodyCategories categories={c}  />
        )}
      />
    </>
  );
}
