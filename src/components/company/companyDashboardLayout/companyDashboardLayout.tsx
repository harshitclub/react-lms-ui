import { SidebarProvider } from "../../ui/sidebar";
import DashCompanyNav from "../companyNav/dashCompanyNav";
import { CompanySidebar } from "../companySidebar/companySidebar";

function CompanyDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider className="flex h-screen">
        <CompanySidebar />
        <main className="flex-1 ">
          <DashCompanyNav />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

export default CompanyDashboardLayout;
