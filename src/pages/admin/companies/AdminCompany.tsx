import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import AdminCompanyForm from "../../../components/admin/adminForms/adminCompanyForm";
import { Button } from "../../../components/ui/button";

function AdminCompany() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminCompany p-3">
          <div className="acHeader flex justify-between items-end pb-5">
            <div>
              <h1 className="text-2xl font-semibold mb-1 pt-2 flex alignCenter justify-between">
                Company Profile
              </h1>
              <p className="text-muted-foreground">
                View & update company profile below.
              </p>
            </div>
            <div className="flex gap-5">
              <Button variant="secondary">Reset Password</Button>
              <Button variant="destructive">Delete Company</Button>
            </div>
          </div>
          <AdminCompanyForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminCompany;
