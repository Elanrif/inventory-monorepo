"use client"

import * as React from "react"
import {
  AudioWaveform,
  BadgeSwissFranc,
  ChartColumnDecreasing,
  Command,
  House,
  Landmark,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "Djawad",
    email: "djawad@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
   menu: [ ],

  teams: [
    {
      name: "FIXTORIA VENTE",
      logo: BadgeSwissFranc,
      plan: "Enterprise",
    },
    {
      name: "Vente en ligne",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Canaux de distribution",
      logo: Command,
      plan: "Free",
    },
  ],
  accueil: [
    {
      title: "Accueil",
      url: "/",
      icon: House,
      isActive: true,
    },
  ],
  navMain: [
    {
      title: "Ma boutique",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Produits",
          url: "#",
        },
        {
          title: "Ordres",
          url: "#",
        },
        {
          title: "Inventiaire",
          url: "#",
        },
         {
          title: "Réductions",
          url: "#",
        },
      ],
    },
    {
      title: "Financements",
      url: "#",
      icon: Landmark,
      items: [
        {
          title: "clients",
          url: "#",
          icon: Users,
        },
      ],
    },
    {
      title: "Rapports d'analyse",
      url: "#",
      icon: ChartColumnDecreasing,
      items: [
        {
          title: "Marketing",
          url: "#",
          icon: ChartColumnDecreasing,
        },
        {
          title: "Paramètres",
          url: "#",
          icon: Settings2,
        },
        ],
    },
  ],
  projects: [
    {
      name: "boutique en ligne",
      url: "#",
      icon: ShoppingBag,
    },
    {
      name: "Point de vente",
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
       <SidebarGroupLabel>MENU PRINCIPAL</SidebarGroupLabel>
        <NavSecondary items={data.accueil} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
