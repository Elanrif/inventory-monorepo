'use client';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { data } from './data';
import HeaderSection from '@/components/dashboard/header-section';
import SubHeaderSection from '@/components/dashboard/sub-header-section';
import { getAllUsers } from '@/lib/user/services/user.service';
import { CardSection } from '@/components/dashboard/card-section';
import TableBodyUsers from '@/components/dashboard/table/table-body-users';
import { ROUTES } from '@/utils/route';
import { useEffect, useState } from 'react';
import { UserDto } from '@/lib/user/models/user.model';

export default function UserPageClient() {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      sessionStorage.getItem('accessToken') ??
      sessionStorage.getItem('token') ??
      undefined;
    (async () => {
      try {
        const u = await getAllUsers('desc', token);
        setUsers(u);
      } catch (e) {
        console.error('Erreur fetch users', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
