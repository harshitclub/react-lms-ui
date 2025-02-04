import DashNav from "../../shared/dashNav";
import { SidebarProvider } from "../../ui/sidebar";
import { AdminSidebar } from "../adminSidebar/AdminSidebar";

function AdminDashboardLayout() {
  return (
    <>
      <SidebarProvider className="flex h-screen">
        <AdminSidebar />
        <main className="flex-1 p-3">
          <DashNav />
        </main>
      </SidebarProvider>
    </>
  );
}

export default AdminDashboardLayout;
