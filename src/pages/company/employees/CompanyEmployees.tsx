import { ArrowDownToLine, CirclePlus } from "lucide-react";
import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import {
  CompanyEmployee,
  CompanyEmployeeTable,
} from "../../../components/company/companyTable/employeeTable";
import { Button } from "../../../components/ui/button";

const data: CompanyEmployee[] = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    companyId: "company1",
    phone: "123-456-7890",
    department: "Product Service Development",
    jobTitle: "Software Engineer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-05T10:30:00Z",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    companyId: "company2",
    phone: "987-654-3210",
    department: "Product Service Development",
    jobTitle: "Project Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-06-15T15:00:00Z",
  },
  {
    id: "3",
    fullName: "David Lee",
    email: "david.lee@example.com",
    companyId: "company1",
    phone: "555-123-4567",
    department: "Product Service Development",
    jobTitle: "Marketing Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-20T09:45:00Z",
  },
  {
    id: "4",
    fullName: "Sarah Jones",
    email: "sarah.jones@example.com",
    companyId: "company3",
    phone: "111-222-3333",
    department: "Product Service Development",
    jobTitle: "UI/UX Designer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-10T12:00:00Z",
  },
  {
    id: "5",
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    companyId: "company2",
    phone: "444-555-6666",
    department: "Product Service Development",
    jobTitle: "Data Analyst",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-01T16:30:00Z",
  },
  {
    id: "6",
    fullName: "Emily Davis",
    email: "emily.davis@example.com",
    companyId: "company1",
    phone: "777-888-9999",
    department: "Product Service Development",
    jobTitle: "Software Engineer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-25T08:15:00Z",
  },
  {
    id: "7",
    fullName: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    companyId: "company3",
    phone: "222-333-4444",
    department: "Product Service Development",
    jobTitle: "Project Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-10T11:00:00Z",
  },
  {
    id: "8",
    fullName: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    companyId: "company2",
    phone: "555-444-3333",
    department: "Product Service Development",
    jobTitle: "Marketing Specialist",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-05T14:45:00Z",
  },
  {
    id: "9",
    fullName: "James Anderson",
    email: "james.anderson@example.com",
    companyId: "company1",
    phone: "888-777-6666",
    department: "Product Service Development",
    jobTitle: "UI/UX Designer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-18T13:30:00Z",
  },
  {
    id: "10",
    fullName: "Chloe Green",
    email: "chloe.green@example.com",
    companyId: "company3",
    phone: "111-333-5555",
    department: "Product Service Development",
    jobTitle: "Data Analyst",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-12T17:15:00Z",
  },
  {
    id: "11",
    fullName: "Ethan Turner",
    email: "ethan.turner@example.com",
    companyId: "company2",
    phone: "666-555-4444",
    department: "Product Service Development",
    jobTitle: "Software Engineer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-28T09:00:00Z",
  },
  {
    id: "12",
    fullName: "Sophia Miller",
    email: "sophia.miller@example.com",
    companyId: "company1",
    phone: "999-888-7777",
    department: "Product Service Development",
    jobTitle: "Project Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-15T12:30:00Z",
  },
  {
    id: "13",
    fullName: "William Jackson",
    email: "william.jackson@example.com",
    companyId: "company3",
    phone: "333-444-5555",
    department: "Product Service Development",
    jobTitle: "Marketing Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-18T15:45:00Z",
  },
  {
    id: "14",
    fullName: "Amelia Harris",
    email: "amelia.harris@example.com",
    companyId: "company2",
    phone: "444-333-2222",
    department: "Product Service Development",
    jobTitle: "UI/UX Designer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-30T11:15:00Z",
  },
  {
    id: "15",
    fullName: "Noah Martinez",
    email: "noah.martinez@example.com",
    companyId: "company1",
    phone: "777-666-5555",
    department: "Product Service Development",
    jobTitle: "Data Analyst",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-22T14:00:00Z",
  },
  {
    id: "16",
    fullName: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    companyId: "company3",
    phone: "222-555-3333",
    department: "Product Service Development",
    jobTitle: "Software Engineer",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-20T16:30:00Z",
  },
  {
    id: "17",
    fullName: "Elijah Brown",
    email: "elijah.brown@example.com",
    companyId: "company2",
    phone: "555-222-1111",
    department: "Product Service Development",
    jobTitle: "Project Manager",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-01T13:15:00Z",
  },
];

function CompanyEmployees() {
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyEmployees p-3">
          <div className="companyEmployeesHeader flex justify-between mb-5 mt-2 items-end">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Employees</h1>
              <p className="text-muted-foreground">
                List of all employees below.
              </p>
            </div>
            <div className="flex gap-3">
              <Button>
                <CirclePlus /> Add Employee
              </Button>
              <Button variant="outline">
                <ArrowDownToLine /> Download Excel
              </Button>
            </div>
          </div>
          <CompanyEmployeeTable data={data} />
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyEmployees;
