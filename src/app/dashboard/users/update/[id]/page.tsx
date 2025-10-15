import { EditRegister } from "@/components/dashboard/edit-register";
import { NotFoundData } from "@/components/not-found-data";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { getUserById } from "@/lib/user/services/user.service";
import { ROUTES } from "@/utils/route";

export default async function DashboardEditUser({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    return <NotFoundData title="Aucun utilisateur trouvé"/>;
  }
  const { DASHBOARD_USERS } = ROUTES;
  
    const breadCrumbUrl = {
      label: "Modifier un utilisateur",
      paths: [
        {
          label: "Utilisateurs",
          url: DASHBOARD_USERS,
        },
      ],
    };

  return (
    <>
      <SidebarBreadcrumb {...breadCrumbUrl} />
      <div className="min-h-[85vh] flex space-y-2 flex-col justify-center items-center bg-gray-50">
        <div className="flex flex-col space-y-2 items-center justify-start mb-5">
          <h2 className="text-3xl font-bold">Modifier un utilisateur</h2>
          <p className="text-slate-600 text-center">
            Modifier un utilisateur en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <EditRegister
          className="w-[600px]"
          editUser={{ ...user, password: "" }}
        />
      </div>
    </>
  );
}
