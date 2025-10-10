import { CreateCategory } from '@/components/dashboard/create-category'
import SidebarBreadcrumb from '@/components/sidebar-breadcrumb'
import React from 'react'

export default function DashboardAddCategory() {
  return (
        <>
          <SidebarBreadcrumb label="Créer un catégorie" />
          <div className="min-h-[85vh] flex space-y-2 flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col space-y-2 items-center justify-start mb-5">
              <h2 className="text-3xl font-bold">Ajouter un catégorie</h2>
              <p className="text-slate-600 text-center">
                Créez un nouvel catégorie en remplissant le formulaire ci-dessous.
              </p>
            </div>
            <CreateCategory/>
          </div>
        </>
  )
}
