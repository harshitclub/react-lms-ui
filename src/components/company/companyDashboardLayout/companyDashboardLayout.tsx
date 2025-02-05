import DashNav from "../../shared/DashNav";
import { SidebarProvider } from "../../ui/sidebar";
import { CompanySidebar } from "../companySidebar/companySidebar";

function CompanyDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider className="flex h-screen">
        <CompanySidebar />
        <main className="flex-1 ">
          <DashNav />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

export default CompanyDashboardLayout;
