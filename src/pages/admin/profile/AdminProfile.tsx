import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import AdminAccountForm from "../../../components/admin/adminForms/adminAccountForm";

function AdminProfile() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminProfile p-3">
          <div className="adminProfileHeader mt-3 mb-5">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="text-muted-foreground">
              View & manage your profile also update the details.
            </p>
          </div>
          <AdminAccountForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminProfile;
