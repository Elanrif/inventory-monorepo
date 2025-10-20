'use client';

import * as React from 'react';
import {
  BellDot,
  Bot,
  Computer,
  GalleryVerticalEnd,
  HelpCircleIcon,
  HomeIcon,
  LucideLayoutDashboard,
  Settings2,
  Users,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavSecondary } from './nav-secondary';
import { ROUTES } from '@/utils/route';

const { DASHBOARD, DASHBOARD_CATEGORIES, DASHBOARD_USERS } = ROUTES;
const data = {
  user: {
    name: 'john doe',
    email: 'jhondoe@google.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Gestion des stocks',
      logo: GalleryVerticalEnd,
      plan: 'Vente en ligne',
    },
  ],
  store: [
    {
      title: 'Dashboard',
      url: DASHBOARD,
      icon: LucideLayoutDashboard,
      isActive: true,
    },
    {
      title: 'Boutique',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Categories',
          url: DASHBOARD_CATEGORIES,
        },
        {
          title: 'Produits',
          url: '#',
        },
      ],
    },
    {
      title: 'Clients',
      url: DASHBOARD_USERS,
      icon: Users,
    },
    {
      title: 'Transactions',
      url: '#',
      icon: Computer,
    },
  ],
  settings: [
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
      ],
    },
    {
      title: 'Notifications',
      url: '#',
      icon: BellDot,
    },
  ],
  navSecondary: [
    {
      title: "Centre d'aide",
      url: '#',
      icon: HelpCircleIcon,
    },
    {
      title: 'Accueil',
      url: ROUTES.HOME,
      icon: HomeIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.store} label="Menu Principal" />
        <NavMain items={data.settings} label="Paramètre" />
        {/* Nav secondary */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
