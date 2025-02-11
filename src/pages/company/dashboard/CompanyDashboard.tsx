import {
  Book,
  ChevronRight,
  Dot,
  FileVideo,
  LibraryBig,
  Users,
} from "lucide-react";
import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";

const recentEmployees = [
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

function CompanyDashboard() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyDashboard p-3">
          <div className="companyDashboardHeader">
            <h1 className="text-3xl font-semibold mb-5 mt-2">
              Learning Management System
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-3">
            <div className="shadow-base rounded-lg border bg-card text-card-foreground">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-bold tracking-tight text-sm">
                  Total Employees
                </h3>
                <Users size={16} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">55</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            </div>
            <div className="shadow-base rounded-lg border bg-card text-card-foreground">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-bold tracking-tight text-sm">
                  Total Courses
                </h3>
                <Book size={16} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  +5.02 % from last month
                </p>
              </div>
            </div>
            <div className="shadow-base rounded-lg border bg-card text-card-foreground">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-bold tracking-tight text-sm">
                  Total Assessments
                </h3>
                <LibraryBig size={16} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">22</div>
                <p className="text-xs text-muted-foreground">
                  -3.58 % from last month
                </p>
              </div>
            </div>
            <div className="shadow-base rounded-lg border bg-card text-card-foreground">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-bold tracking-tight text-sm">
                  Total Videos
                </h3>
                <FileVideo size={16} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">33</div>
                <p className="text-xs text-muted-foreground">
                  +10.35 % from last month
                </p>
              </div>
            </div>
          </div>
          <div className="adminDashTabSecond flex w-full gap-3">
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
                  {recentEmployees.map((ind) => (
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
            <Card className="w-1/2 shadow-2xs p-3"></Card>
          </div>
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyDashboard;
