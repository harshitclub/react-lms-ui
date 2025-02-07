import { Dot } from "lucide-react";
import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import { Badge } from "../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const recentCompanies = [
  {
    companyId: "CS00TT",
    fullName: "Campus Sutras",
    plan: "TRIAL",
    email: "campussutrasindia@gmail.com",
  },
  {
    companyId: "CS00TT",
    fullName: "Campus Sutras",
    plan: "TRIAL",
    email: "campussutrasindia@gmail.com",
  },
  {
    companyId: "CS00TT",
    fullName: "Campus Sutras",
    plan: "TRIAL",
    email: "campussutrasindia@gmail.com",
  },
  {
    companyId: "CS00TT",
    fullName: "Campus Sutras",
    plan: "TRIAL",
    email: "campussutrasindia@gmail.com",
  },
  {
    companyId: "CS00TT",
    fullName: "Campus Sutras",
    plan: "TRIAL",
    email: "campussutrasindia@gmail.com",
  },
];

const recentIndividuals = [
  {
    id: "1",
    fullName: "Harshit Kumar",
    status: "ACTIVE",
    email: "harshitclub@gmail.com",
    phone: 9876543210,
  },
  {
    id: "2",
    fullName: "Harshit Kumar",
    status: "ACTIVE",
    email: "harshitclub@gmail.com",
    phone: 9876543210,
  },
  {
    id: "3",
    fullName: "Harshit Kumar",
    status: "ACTIVE",
    email: "harshitclub@gmail.com",
    phone: 9876543210,
  },
  {
    id: "4",
    fullName: "Harshit Kumar",
    status: "ACTIVE",
    email: "harshitclub@gmail.com",
    phone: 9876543210,
  },
  {
    id: "5",
    fullName: "Harshit Kumar",
    status: "ACTIVE",
    email: "harshitclub@gmail.com",
    phone: 9876543210,
  },
];

function AdminDashboard() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminDashboard p-3">
          <div className="adminDashTabFirst flex w-full gap-3 pb-3">
            <Card className="w-1/4 shadow-2xs">
              <CardHeader>Company</CardHeader>
              <CardContent>
                <CardTitle className="text-4xl">54</CardTitle>
                <CardDescription>Total number of companies</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-1/4 shadow-2xs">
              <CardHeader>Employee</CardHeader>
              <CardContent>
                <CardTitle className="text-4xl">66</CardTitle>
                <CardDescription>Total number of employees</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-1/4 shadow-2xs ">
              <CardHeader>Individual</CardHeader>
              <CardContent>
                <CardTitle className="text-4xl">23</CardTitle>
                <CardDescription>Total number of individuals</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-1/4 shadow-2xs">
              <CardHeader>Course</CardHeader>
              <CardContent>
                <CardTitle className="text-4xl">34</CardTitle>
                <CardDescription>Total number of courses</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="adminDashTabSecond flex w-full gap-3">
            <Card className="w-1/2 shadow-2xs p-3">
              <Table>
                <TableCaption>A list of recent 5 companies.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Company ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-center">Plan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCompanies.map((company) => (
                    <TableRow key={company.companyId}>
                      <TableCell className="font-medium">
                        {company.companyId}
                      </TableCell>
                      <TableCell>{company.fullName}</TableCell>
                      <TableCell>{company.email}</TableCell>
                      <TableCell className="text-center">
                        <Badge>{company.plan}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <Card className="w-1/2 shadow-2xs p-3">
              <Table>
                <TableCaption>A list of recent 5 individuals.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Phone</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentIndividuals.map((ind) => (
                    <TableRow key={ind.id}>
                      <TableCell>{ind.fullName}</TableCell>
                      <TableCell>{ind.email}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {ind.status}
                          <Dot style={{ color: "green" }} />
                        </Badge>
                      </TableCell>
                      <TableCell>{ind.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminDashboard;
