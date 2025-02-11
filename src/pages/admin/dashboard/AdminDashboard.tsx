import {
  BookCopy,
  Building2,
  ChevronRight,
  Dot,
  User,
  Users,
} from "lucide-react";
import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";

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
          <div className="adminDashboardHeader">
            <h1 className="text-3xl font-semibold mb-5 mt-2">
              Learning Management System
            </h1>
          </div>
          <div className="adminDashTabFirst shadow-base rounded-lg border bg-card text-card-foreground overflow-hidden mb-3">
            <div className="grid space-y-2 md:grid-cols-2 lg:grid-cols-4 lg:space-y-0">
              <div className="shadow-base border bg-card text-card-foreground rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <div className="p-6 relative flex flex-row items-center justify-between space-y-0">
                  <h3 className="tracking-tight text-sm font-medium">
                    Total Companies
                  </h3>
                  <div className="absolute end-4 top-4 flex size-12 items-center justify-center rounded-full bg-indigo-200 p-4 dark:bg-indigo-950">
                    <Building2 />
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-2">
                  <div className="text-3xl font-bold">
                    <span className="">54</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+20.1%</span> from last
                    month
                  </p>
                </div>
              </div>
              <div className="shadow-base border bg-card text-card-foreground rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <div className="p-6 relative flex flex-row items-center justify-between space-y-0">
                  <h3 className="tracking-tight text-sm font-medium">
                    Total Employees
                  </h3>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-green-200 p-4 dark:bg-green-950">
                    <Users />
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-2">
                  <div className="text-3xl font-bold">
                    <span className="">66</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+180.1%</span> from last
                    month
                  </p>
                </div>
              </div>
              <div className="shadow-base border bg-card text-card-foreground rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <div className="p-6 relative flex flex-row items-center justify-between space-y-0">
                  <h3 className="tracking-tight text-sm font-medium">
                    Total Individuals
                  </h3>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-purple-200 p-4 dark:bg-purple-950">
                    <User />
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-2">
                  <div className="text-3xl font-bold">
                    <span className="">23</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-600">-19%</span> from last month
                  </p>
                </div>
              </div>
              <div className="shadow-base border bg-card text-card-foreground rounded-none border-transparent hover:bg-muted">
                <div className="p-6 relative flex flex-row items-center justify-between space-y-0">
                  <h3 className="tracking-tight text-sm font-medium">
                    Total Courses
                  </h3>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-orange-200 p-4 dark:bg-orange-950">
                    <BookCopy />
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-2">
                  <div className="text-3xl font-bold">
                    <span className="">34</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+20.1%</span> from last
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="adminDashTabSecond flex w-full gap-3">
            <Card className="w-1/2 shadow-2xs p-3">
              <div className="flex justify-between alignCenter mt-1 mb-5 pl-2">
                <h3 className="text-lg font-semibold">Recent 5 Companies</h3>
                <Button variant="link">
                  View All <ChevronRight />
                </Button>
              </div>
              <Table>
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
                      <TableCell className="font-medium pt-5">
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
              <div className="flex justify-between alignCenter mt-1 mb-5 pl-2">
                <h3 className="text-lg font-semibold">Recent 5 Individuals</h3>
                <Button variant="link">
                  View All <ChevronRight />
                </Button>
              </div>
              <Table>
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
                      <TableCell className="pt-5">{ind.fullName}</TableCell>
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
