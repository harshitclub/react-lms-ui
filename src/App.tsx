import { Routes, Route } from "react-router";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import VerifyAccount from "./pages/auth/verifyAccount/VerifyAccount";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CompanyDashboard from "./pages/company/dashboard/CompanyDashboard";
import AdminCompanies from "./pages/admin/companies/AdminCompanies";
import AdminEmployees from "./pages/admin/employees/AdminEmployees";
import AdminIndividuals from "./pages/admin/individuals/AdminIndividuals";
import AdminCreateCompany from "./pages/admin/companies/CreateCompany";
import AdminCreateIndividual from "./pages/admin/individuals/CreateIndividual";
import AdminCreateEmployee from "./pages/admin/employees/CreateEmployee";
import AdminCourses from "./pages/admin/courses/AdminCourses";
import CompanyEmployees from "./pages/company/employees/CompanyEmployees";
import CompanyCreateEmployee from "./pages/company/employees/CreateEmployee";
import CompanyCourses from "./pages/company/courses/CompanyCourses";
import AdminProfile from "./pages/admin/profile/AdminProfile";
import CompanyAccount from "./pages/company/account/CompanyAccount";
import CompanyChangePassword from "./pages/company/account/CompanyChangePassword";
import CompanyEmployeeProfile from "./pages/company/employees/CompanyEmployeeProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify/:token" element={<VerifyAccount />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<AdminCompanies />} />
        <Route path="/admin/companies/add" element={<AdminCreateCompany />} />
        <Route path="/admin/employees" element={<AdminEmployees />} />
        <Route path="/admin/employees/add" element={<AdminCreateEmployee />} />
        <Route path="/admin/individuals" element={<AdminIndividuals />} />
        <Route
          path="/admin/individuals/add"
          element={<AdminCreateIndividual />}
        />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/company/employees" element={<CompanyEmployees />} />
        <Route
          path="/company/employees/add"
          element={<CompanyCreateEmployee />}
        />
        <Route
          path="/company/employees/:id"
          element={<CompanyEmployeeProfile />}
        />
        <Route path="/company/courses" element={<CompanyCourses />} />
        <Route path="/company/account" element={<CompanyAccount />} />
        <Route
          path="/company/change-password"
          element={<CompanyChangePassword />}
        />
      </Routes>
    </>
  );
}

export default App;
