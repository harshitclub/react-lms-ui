import { CirclePlus } from "lucide-react";
import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import { AdminIndividualTable } from "../../../components/admin/adminTable/individualTable";
import { Button } from "../../../components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";

function AdminIndividuals() {
  const [individuals, setIndividuals] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${backendUrl.admin.getIndividuals}`, {
        withCredentials: true,
      });

      setIndividuals(res.data.data.users);
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
        <section className="adminIndividuals p-3">
          <div className="adminIndividualsHeader flex justify-between mb-5 mt-2">
            <h1 className="text-3xl font-semibold">Individuals</h1>
            <Button>
              <CirclePlus /> Add Individual
            </Button>
          </div>
          <AdminIndividualTable data={individuals} />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminIndividuals;
