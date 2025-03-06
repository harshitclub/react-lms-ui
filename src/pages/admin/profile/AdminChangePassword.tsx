import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import AdminChangePasswordForm from "../../../components/admin/adminForms/adminChangePasswordForm";

function AdminChangePassword() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminChangePassword p-3">
          <div className="acpHeader mb-5">
            <h1 className="text-2xl font-semibold mb-1 pt-2">
              Change Password
            </h1>
            <p className="text-muted-foreground border-b pb-5">
              Enter your current password then fill out new password.
            </p>
          </div>
          <AdminChangePasswordForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminChangePassword;
