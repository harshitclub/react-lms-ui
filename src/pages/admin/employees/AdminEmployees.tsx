import { CirclePlus } from "lucide-react";
import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import { AdminEmployeeTable } from "../../../components/admin/adminTable/employeeTable";
import { Button } from "../../../components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";

function AdminEmployees() {
  const [employeesData, setEmployeesData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${backendUrl.admin.getEmployees}`, {
        withCredentials: true,
      });

      setEmployeesData(res.data.data.users);
      console.log(res.data.data.users);
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
        <section className="adminEmployees p-3">
          <div className="adminEmployeesHeader flex justify-between mb-5 mt-2">
            <h1 className="text-3xl font-semibold">Employees</h1>
            <Button>
              <CirclePlus /> Add Employee
            </Button>
          </div>
          <AdminEmployeeTable data={employeesData} />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminEmployees;
