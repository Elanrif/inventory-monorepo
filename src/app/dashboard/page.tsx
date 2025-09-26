import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";

export default function DashboardPage() {
  return (
    <>
      <SidebarBreadcrumb label="Chargement des données" />
       <div className="flex flex-col justify-center items-center p-4 min-h-96">
         <p className="text-2xl font-bold">Bienvenue dans le dashboard 🎊🎊🎊</p>
       </div>
    </>
  );
}
