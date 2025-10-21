import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ROUTES } from '@/utils/route';
import Link from 'next/link';
import React from 'react';

type PathProps = {
  label: string;
  url: string;
};

type BreadcrumbProps = {
  label: string;
  paths?: PathProps[];
};
export default function SidebarBreadcrumb({ label, paths }: BreadcrumbProps) {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mr-2 data-[orientation=vertical]:h-4'
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className='hidden md:block'>
              <Link href={ROUTES.DASHBOARD} className='uppercase'>
                Tableau de bord
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='hidden md:block' />
            {paths && (
              <>
                {paths.map((p, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <Link href={p.url} className='uppercase'>
                        {p.label}
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden md:block' />
                  </React.Fragment>
                ))}
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage className='lowercase'>{label}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
