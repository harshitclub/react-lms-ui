import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import AdminIndividualForm from "../../../components/admin/adminForms/adminIndividualForm";
import { Button } from "../../../components/ui/button";

function AdminIndividual() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminIndividual p-3">
          <div className="aiHeader flex justify-between items-end pb-5">
            <div>
              <h1 className="text-2xl font-semibold mb-1 pt-2 flex alignCenter justify-between">
                John Doe
              </h1>
              <p className="text-muted-foreground">
                View & update Individual profile below.
              </p>
            </div>
            <div className="flex gap-5">
              <Button variant="secondary">Reset Password</Button>
              <Button variant="destructive">Delete Individual</Button>
            </div>
          </div>
          <AdminIndividualForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminIndividual;
