import { Register } from '@/components/auth/register';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { ROUTES } from '@/utils/route';

export default function DashboardAddUser() {
  return (
    <>
      <SidebarBreadcrumb label="Créer un utilisateur" />
      <div className="flex min-h-[85vh] flex-col items-center justify-center space-y-2 bg-gray-50">
        <div className="mb-5 flex flex-col items-center justify-start space-y-2">
          <h2 className="text-3xl font-bold">Ajouter un utilisateur</h2>
          <p className="text-center text-slate-600">
            Créez un nouvel utilisateur en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <Register
          className="w-[600px]"
          labelBtn="Ajouter un utilisateur"
          navigateUrl={ROUTES.DASHBOARD_USERS}
        />
      </div>
    </>
  );
}
