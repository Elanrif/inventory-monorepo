import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { ROUTES } from "@/utils/route";

export default function DashboardPage() {

  const { DASHBOARD_CATEGORIES } = ROUTES;
   const breadCrumbUrl = {
    label: "Créer un categorie",
    paths: [
      {
        label: "Categories",
        url: DASHBOARD_CATEGORIES,
      },
    ],
  };
  return (
    <>
       <SidebarBreadcrumb {...breadCrumbUrl} />
       <div className="flex flex-col justify-center items-center p-4 min-h-96">
         <p className="text-2xl font-bold">Bienvenue dans le dashboard 🎊🎊🎊</p>
       </div>
    </>
  );
}
