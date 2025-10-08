import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { data } from "./data";
import { TableDataMock } from "@/utils/tableDataMock";
import HeaderSection from "@/components/dashboard/header-section";
import SubHeaderSection from "@/components/dashboard/sub-header-section";
import CardSection from "@/components/dashboard/card-section";

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <HeaderSection
        headerButtons={data.headerCategoryData.headerButtons}
        title={data.headerCategoryData.title}
      />
      <SubHeaderSection {...data.subHeaderCategoryData} />
      <CardSection
        actions={data.category.cardCatHeader}
        table={data.category.table}
        rows={TableDataMock}
      />
    </>
  );
}
