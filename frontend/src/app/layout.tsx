import { Outlet } from "react-router";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app.sidebar";
import AppHeader from "../components/app-header";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        <div className="m-10">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}