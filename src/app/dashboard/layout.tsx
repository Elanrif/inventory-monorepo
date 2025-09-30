import { AppSidebar } from "@/components/app-sidebar";
import SidebarBreadcrumb from "@/components/sidebar-breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
       <SidebarBreadcrumb label="Chargement des données" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
