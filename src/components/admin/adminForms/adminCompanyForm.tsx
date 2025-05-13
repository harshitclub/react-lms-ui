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
import { useParams } from "react-router";
import { Textarea } from "../../ui/textarea";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";
import { useEffect, useState } from "react";
import { CompanyType } from "../../../types/companyType";

const initialCompanyState: CompanyType = {
  fullName: "",
  email: "",
  phone: "",
  username: "",
  companyId: "",
  plan: "",
  maxEmployees: "",
  accountType: "",
  role: "",
  status: "",
  isVerified: false,
  socialLinks: {
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    gitlab: "",
  },
  address: {
    country: "",
    state: "",
    city: "",
    postalCode: "",
    street: "",
  },
  companyLogo: null,
  description: "",
  website: "",
  industry: "",
};

function AdminCompanyForm() {
  const { id } = useParams();

  const [companyState, setCompanyState] =
    useState<CompanyType>(initialCompanyState);

  const fetchData = async () => {
    const res = await axios.get(`${backendUrl.admin.getCompanyById}/${id}`, {
      withCredentials: true,
    });
    console.log(res.data.data.user);
    setCompanyState(res.data.data.user);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(companyState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCompanyState({ ...companyState, [name]: value });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="rounded-sm mb-5 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1">Company Name</h3>
                <Input
                  type="text"
                  value={companyState?.fullName || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Email</h3>
                <Input
                  type="email"
                  value={companyState?.email || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Phone</h3>
                <Input
                  type="number"
                  value={companyState?.phone || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Company ID</h3>
                <Input
                  type="text"
                  value={companyState?.companyId || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Username</h3>
                <Input
                  type="text"
                  value={companyState?.username || ""}
                  className="shadow-none"
                  onChange={handleChange}
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
                  value={companyState?.website || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Status</h3>
                <Input
                  type="text"
                  value={companyState?.status || ""}
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Type</h3>
                <Input
                  type="text"
                  value={companyState?.accountType || ""}
                  className="shadow-none "
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Account Verified</h3>
                <Input
                  type="text"
                  value={
                    `${companyState.isVerified ? "Verified" : "Unverified"}` ||
                    ""
                  }
                  className="shadow-none"
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-md font-semibold  mb-1 ">Description</h2>
        <Textarea
          value={companyState?.description || ""}
          className="shadow-none mb-5 p-5"
          onChange={handleChange}
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
                <Input value={companyState?.address?.postalCode || ""} />
              </div>
            </div>
            <h3 className="text-md  mb-1 ">Street Address</h3>
            <Input
              value={companyState?.address?.street || ""}
              onChange={handleChange}
            />
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
                  value={companyState?.socialLinks?.linkedin || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Instagram</h3>
                <Input
                  type="url"
                  value={companyState?.socialLinks?.instagram || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 mb-5">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Twitter</h3>
                <Input
                  type="url"
                  value={companyState?.socialLinks?.twitter || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Facebook</h3>
                <Input
                  type="url"
                  value={companyState?.socialLinks?.facebook || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Github</h3>
                <Input
                  type="url"
                  value={companyState?.socialLinks?.github || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Gitlab</h3>
                <Input
                  type="url"
                  value={companyState?.socialLinks?.gitlab || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Button className="mb-2">Update Company</Button>
      </form>
    </>
  );
}

export default AdminCompanyForm;
