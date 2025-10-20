import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { data } from './data';
import { TableDataMock } from '@/utils/tableDataMock';
import HeaderSection from '@/components/dashboard/header-section';
import SubHeaderSection from '@/components/dashboard/sub-header-section';
import { CardSection } from '@/components/dashboard/card-section';
import TableBodyCategories from '@/components/dashboard/table/table-body-categories';

export default function CategoriePage() {
  return (
    <>
      <SidebarBreadcrumb label="Categories" />
      <HeaderSection
        headerButtons={data.headerData.headerButtons}
        title={data.headerData.title}
      />
      <SubHeaderSection {...data.subHeaderData} />
      <CardSection
        actions={data.payload.headerBtn}
        table={data.payload.table}
        data={TableDataMock}
        render={(c) => (
          <TableBodyCategories
            categories={c}
            action={data.payload.table.actions}
          />
        )}
      />
    </>
  );
}
