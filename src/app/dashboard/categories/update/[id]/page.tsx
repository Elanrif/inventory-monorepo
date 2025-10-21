import { EditCategory } from '@/components/dashboard/edit-category';
import { NotFoundData } from '@/components/not-found-data';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { getCategoryById } from '@/lib/category/services/category.service';
import { ROUTES } from '@/utils/route';

export default async function DashboardEditCategory({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const category = await getCategoryById(id);
  if (!category) {
    return <NotFoundData title='Aucune catégorie trouvé' />;
  }
  const { DASHBOARD_CATEGORIES } = ROUTES;

  const breadCrumbUrl = {
    label: 'Créer une categorie',
    paths: [
      {
        label: 'Categories',
        url: DASHBOARD_CATEGORIES,
      },
    ],
  };

  return (
    <>
      <SidebarBreadcrumb {...breadCrumbUrl} />
      <div className='flex min-h-[85vh] flex-col items-center justify-center space-y-2 bg-gray-50'>
        <div className='mb-5 flex flex-col items-center justify-start space-y-2'>
          <h2 className='text-3xl font-bold'>Modifier une catégorie</h2>
          <p className='text-center text-slate-600'>
            Modifier une catégorie en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <EditCategory category={category} />
      </div>
    </>
  );
}
