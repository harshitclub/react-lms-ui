import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

function AdminAccountForm() {
  return (
    <>
      <form>
        <Card className="rounded-sm mb-5 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1">Name</h3>
                <Input
                  type="text"
                  value="3a Learning Solutions India Pvt. Ltd."
                  className="shadow-none"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Email</h3>
                <Input
                  type="email"
                  value="info@3alearningsolutions.com"
                  className="shadow-none"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Phone</h3>
                <Input
                  type="number"
                  value="9876543210"
                  className="shadow-none"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Status</h3>
                <Input type="text" value="ACTIVE" className="shadow-none" />
              </div>
            </div>

            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Type</h3>
                <Input type="text" value="ADMIN" className="shadow-none " />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Verified</h3>
                <Input type="text" value="Verified" className="shadow-none" />
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-md font-semibold mb-1">Address</h2>
        <Card className="rounded-sm shadow-sm mb-5">
          <CardContent className="p-5">
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Country</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">State</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">City</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Noida">Noida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Zip Code</h3>
                <Input value="201309" />
              </div>
            </div>
            <h3 className="text-md  mb-1 ">Street Address</h3>
            <Input value="A11, The Ithum, Electronic City" />
          </CardContent>
        </Card>

        <Button className="mb-2">Update Account</Button>
      </form>
    </>
  );
}

export default AdminAccountForm;
