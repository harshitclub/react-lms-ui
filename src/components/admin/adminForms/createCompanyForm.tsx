import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";

const industries = [
  { value: "IT", label: "Information Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Education", label: "Education" },
  { value: "Finance", label: "Finance" },
  { value: "Retail", label: "Retail" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Construction", label: "Construction" },
  { value: "Transportation", label: "Transportation" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Energy", label: "Energy" },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Media & Entertainment", label: "Media & Entertainment" },
  { value: "Government", label: "Government" },
  { value: "Non-Profit", label: "Non-Profit" },
  { value: "Other", label: "Other" },
];

function CreateCompanyForm() {
  return (
    <>
      <div className="adminCreateCompanyForm w-full">
        <h1 className="text-2xl font-semibold mb-1 pt-2">Create Company</h1>
        <p className="text-muted-foreground border-b pb-5">
          Enter all the required details below to create a company.
        </p>
        <form className="adminCreateCompanyForm pt-5 w-full">
          <div className="flex gap-3">
            <div className="w-1/2 mb-4">
              <h3 className="text-md  mb-1 ">Company Name</h3>
              <Input
                type="text"
                placeholder="ex. Campussutras Private Limited"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Company Email</h3>
              <Input type="email" placeholder="ex. campussutras@gmail.com" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Company Phone</h3>
              <Input type="number" placeholder="ex. 919876543210" />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Industry</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Password</h3>
              <Input type="password" placeholder="**********" />
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Username</h3>
              <Input type="text" placeholder="ex. campussutras" />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Plan</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose Plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TRIAL">TRIAL</SelectItem>
                  <SelectItem value="BASIC">BASIC</SelectItem>
                  <SelectItem value="STANDARD ">STANDARD </SelectItem>
                  <SelectItem value="PREMIUM  ">PREMIUM</SelectItem>
                  <SelectItem value="CUSTOM   ">CUSTOM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/2">
              <h3 className="text-md  mb-1 ">Employees Limit</h3>
              <Input type="number" placeholder="ex. 10" />
            </div>
          </div>
          <h3 className="text-md  mb-1">Description</h3>
          <Textarea placeholder="ex. Company Description" className="mb-4" />
          <Button>Create Company</Button>
        </form>
      </div>
    </>
  );
}

export default CreateCompanyForm;
