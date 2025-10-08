import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { data } from "./data";
import HeaderSection from "@/components/dashboard/header-section";
import SubHeaderSection from "@/components/dashboard/sub-header-section";
import { getAllUsers } from "@/lib/user/services/user.service";
import { CardUsers } from "@/components/dashboard/card-entity";

export default async function UserPage() {
  const users = await getAllUsers();
  return (
    <>
      <SidebarBreadcrumb label="Users" />
      <HeaderSection
        headerButtons={data.headerData.headerButtons}
        title={data.headerData.title}
      />
      <SubHeaderSection {...data.subHeaderData} />
      <CardUsers
        actions={data.payload.headerBtn}
        table={data.payload.table}
        users={users}
      />
    </>
  );
}
