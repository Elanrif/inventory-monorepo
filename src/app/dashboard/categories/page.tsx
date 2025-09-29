import CardBody from "@/components/dashboard/categories/boby/card-body";
import HeaderCategory from "@/components/dashboard/categories/header/header-category";
import SubHeaderCategory from "@/components/dashboard/categories/sub-header/sub-header-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Catégories" />
      <HeaderCategory />
      <SubHeaderCategory />
      <CardBody/>
    </>
  );
}
