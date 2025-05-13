import { CirclePlus } from "lucide-react";
import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";

import { AdminCompanyTable } from "../../../components/admin/adminTable/companyTable";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";
import { useEffect, useState } from "react";

function AdminCompanies() {
  const [companiesData, setCompaniesData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${backendUrl.admin.getCompanies}`, {
        withCredentials: true,
      });
      setCompaniesData(res.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminCompanies p-3">
          <div className="adminCompaniesHeader flex justify-between mb-5 mt-2">
            <h1 className="text-3xl font-semibold">Companies</h1>
            <Button>
              <CirclePlus /> Add Company
            </Button>
          </div>
          <AdminCompanyTable data={companiesData} />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminCompanies;
