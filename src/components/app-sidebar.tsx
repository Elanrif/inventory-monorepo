"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Command,
  Database,
  GalleryVerticalEnd,
  Goal,
  House,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "Himmad",
    email: "fixoria@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Fixoria Sales",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Ma boutique",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "Produits",
          url: "#",
        },
        {
          title: "Commandes",
          url: "#",
        },
         {
          title: "Inventaire",
          url: "#",
        },
        {
          title: "Remise",
          url: "#",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: Database,
    },
    {
      title: "Rapport d'analyse",
      url: "#",
      icon: BookOpen,
    },
  ],
  secondary: [
    {
      title: "Marketing",
      url: "#",
      icon: Goal,
    },
    {
      title: "Paramètres",
      url: "#",
      icon: Settings,
    },
  ],
  customer: [
    {
      title: "Clients",
      url: "#",
      icon: Users,
    },
  ],
  navsecondary: [
    {
      title: "Boutique en ligne",
      url: "#",
      icon: ShoppingBag,
    },
    {
      title: "Point de vente",
      url: "#",
      icon: House,
    },
  ],
  home: [
    {
      title: "Accueil",
      url: "#",
      icon: House,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
