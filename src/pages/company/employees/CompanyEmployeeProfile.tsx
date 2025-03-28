import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import CompanyEmployeeForm from "../../../components/company/companyForms/companyEmployeeForm";
import { Button } from "../../../components/ui/button";

function CompanyEmployeeProfile() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyEmployeeProfile p-3">
          <div className="cepHeader flex justify-between items-end pb-5">
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
          <CompanyEmployeeForm />
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyEmployeeProfile;
