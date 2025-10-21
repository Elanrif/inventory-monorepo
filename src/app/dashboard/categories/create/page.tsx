import { CreateCategory } from '@/components/dashboard/create-category';
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';
import { ROUTES } from '@/utils/route';

export default function DashboardAddCategory() {
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
          <h2 className='text-3xl font-bold'>Ajouter une categorie</h2>
          <p className='text-center text-slate-600'>
            Créez un nouvel categorie en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <CreateCategory className='w-[600px]' />
      </div>
    </>
  );
}
