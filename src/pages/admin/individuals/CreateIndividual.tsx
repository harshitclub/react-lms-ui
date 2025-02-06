import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import CreateIndividualForm from "../../../components/admin/adminForms/createIndividualForm";

function AdminCreateIndividual() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminCreateIndividual p-3">
          <CreateIndividualForm />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminCreateIndividual;
