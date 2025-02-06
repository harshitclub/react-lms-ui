import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import CreateCompanyForm from "../../../components/admin/adminForms/createCompanyForm";

function AdminCreateCompany() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminCreateCompany p-3">
          <CreateCompanyForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminCreateCompany;
