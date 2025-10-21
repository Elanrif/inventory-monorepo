import { EditRegister } from '@/components/dashboard/edit-register';
import { NotFoundData } from '@/components/not-found-data';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { getUserById } from '@/lib/user/services/user.service';
import { ROUTES } from '@/utils/route';

export default async function DashboardEditUser({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    return <NotFoundData title="Aucun utilisateur trouvé" />;
  }
  const { DASHBOARD_USERS } = ROUTES;

  const breadCrumbUrl = {
    label: 'Modifier un utilisateur',
    paths: [
      {
        label: 'Utilisateurs',
        url: DASHBOARD_USERS,
      },
    ],
  };

  return (
    <>
      <SidebarBreadcrumb {...breadCrumbUrl} />
      <div className="flex min-h-[85vh] flex-col items-center justify-center space-y-2 bg-gray-50">
        <div className="mb-5 flex flex-col items-center justify-start space-y-2">
          <h2 className="text-3xl font-bold">Modifier un utilisateur</h2>
          <p className="text-center text-slate-600">
            Modifier un utilisateur en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <EditRegister
          className="w-[600px]"
          editUser={{ ...user, password: '' }}
        />
      </div>
    </>
  );
}
