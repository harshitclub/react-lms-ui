import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const departments = [
  { value: "Administrative", label: "Administrative" },
  { value: "HR", label: "HR" },
  { value: "Operations_Delivery", label: "Operations Delivery" },
  {
    value: "Product_Service_Development",
    label: "Product Service Development",
  },
  { value: "Purchasing", label: "Purchasing" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
  { value: "Accounting", label: "Accounting" },
  { value: "Finance", label: "Finance" },
  { value: "IT", label: "IT" },
  { value: "Legal", label: "Legal" },
  { value: "Research_and_Development", label: "Research and Development" },
  { value: "Customer_Service", label: "Customer Service" },
  { value: "Training", label: "Training" },
  { value: "Quality_Assurance", label: "Quality Assurance" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Engineering", label: "Engineering" },
  { value: "Logistics", label: "Logistics" },
  { value: "Facilities", label: "Facilities" },
  { value: "Security", label: "Security" },
  { value: "Project_Management", label: "Project Management" },
  {
    value: "Public_Relations_Communications",
    label: "Public Relations Communications",
  },
  { value: "Investor_Relations", label: "Investor Relations" },
  { value: "Compliance", label: "Compliance" },
];

const companies = [
  {
    value: "Campussutras Private Limited",
    label: "Campussutras Private Limited",
  },
];

const status = [
  {
    value: "ACTIVE",
    label: "ACTIVE",
  },
  { value: "INACTIVE", label: "INACTIVE" },
  { value: "BLOCKED", label: "BLOCKED" },
];

const gender = [
  {
    value: "MALE",
    label: "MALE",
  },
  { value: "FEMALE", label: "FEMALE" },
  { value: "Other", label: "Other" },
];

function CreateEmployeeForm() {
  return (
    <>
      <div className="adminCreateCompanyForm w-full">
        <h1 className="text-2xl font-semibold mb-1 pt-2">Create Employee</h1>
        <p className="text-muted-foreground border-b pb-5">
          Enter all the required details below to create a company.
        </p>
        <form className="adminCreateCompanyForm pt-5 w-full">
          <div className="flex gap-3">
            <div className="w-1/2 mb-4">
              <h3 className="text-md  mb-1 ">Full Name</h3>
              <Input type="text" placeholder="ex. Kundan Kumar" />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Email</h3>
              <Input
                type="email"
                placeholder="ex. kundan.kumar@3alearningsolutions.com"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Phone</h3>
              <Input type="number" placeholder="ex. 919876543210" />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Department</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((department) => (
                    <SelectItem key={department.value} value={department.value}>
                      {department.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Company</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.value} value={company.value}>
                      {company.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Job Title</h3>
              <Input type="text" placeholder="ex. Manager" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Status</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Set Status" />
                </SelectTrigger>
                <SelectContent>
                  {status.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Employee ID</h3>
              <Input type="text" placeholder="ex. CS0001" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Password</h3>
              <Input type="password" placeholder="**********" />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Date of Birth</h3>
              <Input type="date" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Gender</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  {gender.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-1/2"></div>
          </div>
          <Button>Create Employee</Button>
        </form>
      </div>
    </>
  );
}

export default CreateEmployeeForm;
