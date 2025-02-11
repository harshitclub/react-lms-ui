import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import CompanyChangePasswordForm from "../../../components/company/companyForms/companyChangePasswordForm";

function CompanyChangePassword() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyChangePassword p-3">
          <div className="ccpHeader mb-5">
            <h1 className="text-2xl font-semibold mb-1 pt-2">
              Change Password
            </h1>
            <p className="text-muted-foreground border-b pb-5">
              Enter your current password then fill out new password.
            </p>
          </div>
          <CompanyChangePasswordForm />
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyChangePassword;
