import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import CreateEmployeeForm from "../../../components/admin/adminForms/createEmployeeForm";

function AdminCreateEmployee() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminCreateEmployee p-3">
          <CreateEmployeeForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminCreateEmployee;
