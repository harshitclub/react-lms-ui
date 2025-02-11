import { departments } from "../../../constants/departments";
import { gender, status } from "../../../constants/general";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

function CompanyCreateEmployeeForm() {
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
              <h3 className="text-md  mb-1 ">Job Title</h3>
              <Input type="text" placeholder="ex. Manager" />
            </div>
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
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Employee ID</h3>
              <Input type="text" placeholder="ex. CS0001" />
            </div>

            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Password</h3>
              <Input type="password" placeholder="**********" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Date of Birth</h3>
              <Input type="date" />
            </div>
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
          </div>

          <Button>Create Employee</Button>
        </form>
      </div>
    </>
  );
}

export default CompanyCreateEmployeeForm;
