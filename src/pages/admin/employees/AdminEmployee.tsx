import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import AdminEmployeeForm from "../../../components/admin/adminForms/adminEmployeeForm";
import { Button } from "../../../components/ui/button";

function AdminEmployee() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminEmployee p-3">
          <div className="acHeader flex justify-between items-end pb-5">
            <div>
              <h1 className="text-2xl font-semibold mb-1 pt-2 flex alignCenter justify-between">
                John Doe
              </h1>
              <p className="text-muted-foreground">
                View & update employee profile below.
              </p>
            </div>
            <div className="flex gap-5">
              <Button variant="secondary">Reset Password</Button>
              <Button variant="destructive">Delete Employee</Button>
            </div>
          </div>
          <AdminEmployeeForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminEmployee;
