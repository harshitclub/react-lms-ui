import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import CompanyAccountForm from "../../../components/company/companyForms/companyAccountForm";

function CompanyAccount() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyAccount p-3">
          <div className="cAHeader mb-3">
            <h1 className="text-2xl mb-1 font-semibold">Account</h1>
            <p className="text-muted-foreground">
              View & update your account information below.
            </p>
          </div>
          <CompanyAccountForm />
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyAccount;
