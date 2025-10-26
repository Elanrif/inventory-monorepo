import SidebarBreadcrumb from '@/components/sidebar-breadcrumb';

export default function DashboardPage() {
  const data = 'elanrif';
  return (
    <>
      <SidebarBreadcrumb label='Chargement des données' />
      <div className='flex min-h-96 flex-col items-center justify-center p-4'>
        <p className='text-2xl font-bold'>Bienvenue dans le dashboard 🎊🎊🎊</p>
      </div>
    </>
  );
}
