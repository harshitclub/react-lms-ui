import DashNav from "../adminNav/adminDashNav";
import { SidebarProvider } from "../../ui/sidebar";
import { AdminSidebar } from "../adminSidebar/AdminSidebar";

function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider className="flex h-screen">
        <AdminSidebar />
        <main className="flex-1 ">
          <DashNav />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

export default AdminDashboardLayout;
