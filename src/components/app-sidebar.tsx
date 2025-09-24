"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Home,
  Settings,
  ShoppingBag,
  Store,
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
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "johndoe@gmail.com.com",
    avatar: "/avatars/shadcn.jpg",
  },
    navSecondary: [
    {
      title: "acceuil",
        url: "/",
      icon: Home,
    },
  ],
   customers: [
    {
      title: "clients",
        url: "#",
      icon: Users,
    },
  ],
  teams: [
    {
      name: "Boutique en ligne",
      logo: Store,
      plan: "Vente en ligne",
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
          title: "Catégories",
          url: "#",
        },
        {
          title: "Produits",
          url: "#",
        },
      ],
    },
     
  ],
  projects: [
    {
      name: "Paramètres",
      url: "#",
      icon: Settings ,
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
        <NavSecondary items={data.navSecondary} />
        <NavMain items={data.navMain} />
        <NavSecondary items={data.customers} className="-mt-4" />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
