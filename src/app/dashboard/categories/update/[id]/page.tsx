import { EditCategory } from "@/components/dashboard/edit-category";
import { NotFoundData } from "@/components/not-found-data";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import { getCategoryById } from "@/lib/category/services/category.service";
import { ROUTES } from "@/utils/route";
import React from "react";

export default async function DashboardEditCategory({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const category = await getCategoryById(id);
  if (!category) {
    return <NotFoundData title="Aucune catégorie trouvée" />;
  }

  const breadcrumbPaths = {
    paths: [
      {
        label: "Categories",
        url: ROUTES.DASHBOARD_CATEGORIES,
      },
    ],
    label: "Modifier catégorie",
  };

  return (
    <>
      <SidebarBreadcrumb {...breadcrumbPaths} />
      <div className="min-h-[85vh] w-fit border-1 rounded-xl py-8 px-12 mx-auto flex space-y-2 flex-col justify-center items-center bg-gray-50">
        <div className="flex flex-col space-y-2 items-center justify-start mb-5">
          <h2 className="text-3xl font-bold">Modifier une catégorie</h2>
          <p className="text-slate-600 text-center">
            Modifier la catégorie en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <EditCategory editCategory={{ ...category }} />
      </div>
    </>
  );
}
