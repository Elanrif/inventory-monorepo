import { EditCategory } from "@/components/dashboard/edit-category";
import { NotFoundData } from "@/components/not-found-data";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb"
import { getCategoryById } from "@/lib/category/services/category.service";

export default async function DashboardEditCategory({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const category = await getCategoryById(id);
  if (!category) {
    return <NotFoundData title="Aucune catégorie trouvé" />;
  }
  return (
    <>
      <SidebarBreadcrumb label="Créer une catégorie" />
      <div className="min-h-[85vh] flex space-y-2 flex-col justify-center items-center bg-gray-50">
        <div className="flex flex-col space-y-2 items-center justify-start mb-5">
          <h2 className="text-3xl font-bold">Modifier une catégorie</h2>
          <p className="text-slate-600 text-center">
            Modifier une catégorie en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <EditCategory editCategory={{ ...category }} />
      </div>
    </>
  );
}
