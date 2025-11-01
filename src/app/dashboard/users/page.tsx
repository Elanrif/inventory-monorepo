'use client';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { data } from './data';
import HeaderSection from '@/components/dashboard/header-section';
import SubHeaderSection from '@/components/dashboard/sub-header-section';
import { CardSection } from '@/components/dashboard/card-section';
import TableBodyUsers from '@/components/dashboard/table/table-body-users';
import { ROUTES } from '@/utils/route';
import { useUser } from '@/hooks/use-entity';

export default function UserPageClient() {
  const { users, loading } = useUser();
  if (loading) return <div>Chargement...</div>;

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
        emptyMessage={'Aucun utilisateur trouvé'}
        emptyAction={{
          label: 'Créer un utilisateur',
          href: ROUTES.DASHBOARD_ADD_USERS,
        }}
        data={users}
        render={(c) => <TableBodyUsers users={c} />}
      />
    </>
  );
}
