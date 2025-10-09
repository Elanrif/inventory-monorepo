import { Register } from "@/components/auth/register";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { ROUTES } from "@/utils/route";

export default function DashboardAddUser() {
  return (
    <>
      <SidebarBreadcrumb label="Créer un utilisateur" />
      <div className="min-h-[85vh] flex space-y-2 flex-col justify-center items-center bg-gray-50">
        <div className="flex flex-col space-y-2 items-center justify-start mb-5">
          <h2 className="text-3xl font-bold">Ajouter un utilisateur</h2>
          <p className="text-slate-600 text-center">
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
