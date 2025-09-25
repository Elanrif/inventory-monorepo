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
      title: "Accueil",
      url: "#",
      icon: House,
    },
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
      items: [
      ],
    },
    {
      title: "Clients",
      url: "#",
      icon: Users,
    },
    {
      title: "Rapport d'analyse",
      url: "#",
      icon: BookOpen,
      items: [
      ],
    },
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
  navsecond:[
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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} label="MAIN MENU"/>
        <NavMain items={data.navsecond} label="SALES CHENNELS"/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
