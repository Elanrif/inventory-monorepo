import { CreateCategory } from "@/components/dashboard/create-category";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { ROUTES } from "@/utils/route";
import React from "react";

export default function DashboardAddCategory() {
  const breadcrumbPaths = {
    paths: [
      {
        label: "Categories",
        url: ROUTES.DASHBOARD_CATEGORIES,
      },
    ],
    label: "Créer catégories",
  };
  return (
    <>
      <SidebarBreadcrumb {...breadcrumbPaths} />
      <div className="min-h-[85vh] w-fit border-1 rounded-xl py-8 px-12 mx-auto flex space-y-2 flex-col justify-center items-center bg-gray-50">
        <div className="flex flex-col space-y-2 items-center justify-start mb-5">
          <h2 className="text-3xl font-bold">Ajouter une catégorie</h2>
          <p className="text-slate-600 text-center">
            Créez une nouvelle catégorie en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <CreateCategory />
      </div>
    </>
  );
}
