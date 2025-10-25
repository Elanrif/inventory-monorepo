import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { data } from './data';
import HeaderSection from '@/components/dashboard/header-section';
import SubHeaderSection from '@/components/dashboard/sub-header-section';
import { getAllUsers } from '@/lib/user/services/user.service';
import { CardSection } from '@/components/dashboard/card-section';
import TableBodyUsers from '@/components/dashboard/table/table-body-users';

export default async function UserPage() {
  const users = await getAllUsers("desc");
  return (
    <>
      <SidebarBreadcrumb label='Users' />
      <HeaderSection
        headerButtons={data.headerData.headerButtons}
        title={data.headerData.title}
      />
      <SubHeaderSection {...data.subHeaderData} />
      <CardSection
        actions={data.payload.headerBtn}
        table={data.payload.table}
        data={users}
        render={(c) => <TableBodyUsers users={c} />}
      />
    </>
  );
}
