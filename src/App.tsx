import { Routes, Route } from "react-router";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import VerifyAccount from "./pages/auth/verifyAccount/VerifyAccount";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CompanyDashboard from "./pages/company/dashboard/CompanyDashboard";
import AdminCompanies from "./pages/admin/companies/AdminCompanies";

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
        <Route path="/company" element={<CompanyDashboard />} />
      </Routes>
    </>
  );
}

export default App;
