import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { data } from './data';
import HeaderSection from '@/components/dashboard/header-section';
import SubHeaderSection from '@/components/dashboard/sub-header-section';
import { CardSection } from '@/components/dashboard/card-section';
import TableBodyCategories from '@/components/dashboard/table/table-body-categories';
import { fetchCategoriesByOrderByIdDesc } from '@/lib/category/services/category.service';
import { ROUTES } from '@/utils/route';

export default async function CategoriePage() {
  const categories = await fetchCategoriesByOrderByIdDesc();

  return (
    <>
      <SidebarBreadcrumb label='Categories' />
      <HeaderSection
        headerButtons={data.headerData.headerButtons}
        title={data.headerData.title}
      />
      <SubHeaderSection {...data.subHeaderData} />
      <CardSection
        actions={data.payload.headerBtn}
        table={data.payload.table}
        emptyMessage={'Aucune catégorie trouvée'}
        emptyAction={{
          label: 'Créer une catégorie',
          href: ROUTES.DASHBOARD_ADD_CATEGORIES,
        }}
        data={categories}
        render={(c) => <TableBodyCategories categories={c} />}
      />
    </>
  );
}
