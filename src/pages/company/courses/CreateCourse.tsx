import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import CompanyAddCourseForm from "../../../components/company/companyForms/companyAddCourseForm";

function CompanyCreateCourse() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyCreateCourse p-3">
          <h1 className="text-2xl font-semibold mb-1 pt-2">Create Course</h1>
          <p className="text-muted-foreground border-b pb-5">
            Enter all the required details below to create a course.
          </p>
          <div className="cccAdd">
            <CompanyAddCourseForm />
          </div>
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyCreateCourse;
