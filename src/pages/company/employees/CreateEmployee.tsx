import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import CompanyCreateEmployeeForm from "../../../components/company/companyForms/createEmployeeForm";

function CompanyCreateEmployee() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyCreateEmmployee p-3">
          <CompanyCreateEmployeeForm />
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyCreateEmployee;
