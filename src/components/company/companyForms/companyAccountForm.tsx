import { industries } from "../../../constants/industries";
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
import { Textarea } from "../../ui/textarea";

function CompanyAccountForm() {
  return (
    <>
      <form>
        <Card className="rounded-sm mb-5 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1">Company Name</h3>
                <Input
                  type="text"
                  value="Campussutras Private Limited"
                  className="shadow-none"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Email</h3>
                <Input
                  type="email"
                  value="info@campussutras.com"
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
                <h3 className="text-md  mb-1 ">Company ID</h3>
                <Input type="text" value="76hyt8" className="shadow-none" />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Username</h3>
                <Input
                  type="text"
                  value="campussutras"
                  className="shadow-none"
                />
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
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Website</h3>
                <Input
                  type="url"
                  value="https://www.campussutras.com"
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
                <Input type="text" value="COMPANY" className="shadow-none " />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Verified</h3>
                <Input type="text" value="Verified" className="shadow-none" />
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-md font-semibold  mb-1 ">Description</h2>
        <Textarea
          value="Welcome to Campus Sutras, your gateway to professional success! At Campus Sutras, we understand that in today's dynamic and ever-evolving world, acquiring the right skills and knowledge is crucial for unlocking endless opportunities."
          className="shadow-none mb-5 p-5"
        />

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
        <h2 className="text-md font-semibold mb-1">Social Links</h2>
        <Card className="rounded-sm shadow-sm mb-5">
          <CardContent className="p-5">
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">LinkedIn</h3>
                <Input
                  type="url"
                  value="https://www.linkedin.com/in/campussutras"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Instagram</h3>
                <Input
                  type="url"
                  value="https://www.instagram.com/campussutras"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Twitter</h3>
                <Input
                  type="url"
                  value="https://www.twitter.com/campussutras"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Facebook</h3>
                <Input
                  type="url"
                  value="https://www.facebook.com/campussutras"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Github</h3>
                <Input type="url" value="https://www.github.com/campussutras" />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Gitlab</h3>
                <Input
                  type="url"
                  value="https://www.githlab.com/campussutras"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Button className="mb-2">Update Account</Button>
      </form>
    </>
  );
}

export default CompanyAccountForm;
