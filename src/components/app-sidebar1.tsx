"use client"

import * as React from "react"
import {
  BookText,
  ChartLine,
  House,
  Menu,
  PawPrint,
  Plus,
  Settings,
  User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Section from "./section"

// This is sample data.
const data = {
  user: {
    name: "Sylwia Weller",
    role: "Admin",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navMain: [
    {
      title: "Dashbord",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Plus,
    },
    {
      title: "Clients",
      url: "#",
      icon: User,
    },
    {
      title: "Animals",
      url: "#",
      icon: PawPrint,
    },
    {
      title: "Stocks",
      url: "#",
      icon: BookText,
    },
    {
      title: "Raport & Finance",
      url: "#",
      icon: ChartLine,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebar1({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Menu size={20} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
        <Section/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
