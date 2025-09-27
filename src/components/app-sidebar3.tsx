"use client"

import * as React from "react"
import {
  AudioWaveform,
  Calendar,
  CircleQuestionMark,
  Command,
  Folder,
  Layers,
  LayoutDashboard,
  MessageSquareWarning,
  MessagesSquare,
  PhoneCall,
  SquareCheck,
  SquareKanban,
  Users,
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import SubHeader from "./sub-header"
import { NavSecondary3 } from "./nav-secondary3"
import { NavMain3 } from "./nav-main3"

// This is sample data.
const data = {
  user: {
    name: "Julien H",
    email: "julian@zomaui.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary:[
    {
      
    title: "Dashbord",
    url: "#",
    icon: LayoutDashboard,
    },
  ],
  teams: [
    {
      name: "Zoma UI",
      logo: Layers,
      plan: "24 menmbres",
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
      title: "Project",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [],
    },
    {
      title: "Tasks",
      url: "#",
      icon: SquareCheck ,
      items: [
        {
          title: "My Tasks",
          url: "#",
        },
        {
          title: "Assigned to Me",
          url: "#",
        },
        {
          title: "Completed",
          url: "#",
        },
        {
          title: "Priority View",
          url: "#",
        },
        {
          title: "Task Calendar",
          url: "#",
        },
      ],
    },
    {
      title: "My Calendar",
      url: "#",
      icon: Calendar,
      items: [],
    },
    {
      title: "Team",
      url: "#",
      icon: Users,
      items: [],
    },
    {
      title: "Messages",
      url: "#",
      icon: MessagesSquare,
      items: [],
    },
    {
      title: "Reports",
      url: "#",
      icon: SquareKanban,
      items: [],
    },
  ],
  setting:[
    {  
    title: "Settings",
    url: "#",
    icon: CircleQuestionMark,
    },
  ], 
  contact:[
    {  
    title: "Contact Support",
    url: "#",
    icon: PhoneCall,
    },
  ],
  feedback:[
    {  
    title: "Feedback",
    url: "#",
    icon: MessageSquareWarning,
    },
  ],  
}

export function AppSidebar3({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
      <SubHeader/>
      <NavSecondary3 items={data.navSecondary} />
        <NavMain3 items={data.navMain}/>
        <NavSecondary3 items={data.setting} className="-mb-9"/>
        <NavSecondary3 items={data.contact} className="-mb-9"/>
        <NavSecondary3 items={data.feedback}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
