import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Address } from "../../../types/addressType";

const myAddress: Address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  country: "USA",
};

function AdminProfile() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminProfile p-3">
          <div className="adminProfileHeader mt-3 mb-5">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="text-muted-foreground">
              View & manage your profile also update the details.
            </p>
          </div>
          <div className="adminProfileContainer">
            <Card className="shadow-2xs p-5 ">
              <form>
                <div className="flex gap-3">
                  <div className="w-1/2 mb-4">
                    <h3 className="text-md  mb-1 ">Full Name</h3>
                    <Input type="text" value="3a Learning Solutions" />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-md  mb-1 ">Email</h3>
                    <Input type="email" value="3alearningsolutions@gmail.com" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1/2 mb-4">
                    <h3 className="text-md  mb-1 ">Phone</h3>
                    <Input type="number" value="9876543210" />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-md  mb-1 ">Account Type</h3>
                    <Input type="text" value="ADMIN" />
                  </div>
                </div>
                <h3 className="text-muted-foreground font-semibold">Address</h3>
                <div className="flex gap-3">
                  <div className="w-1/2 mb-4">
                    <h3 className="text-md  mb-1 ">Street</h3>
                    <Input type="text" value={myAddress.street} />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-md  mb-1 ">City</h3>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Anytown">Anytown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1/2 mb-4">
                    <h3 className="text-md  mb-1 ">State</h3>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">CA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-md  mb-1 ">Zip Code</h3>
                    <Input type="text" value={myAddress.zipCode} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1/2 mb-4">
                    <h3 className="text-md  mb-1 ">Role</h3>
                    <Input type="text" value="ADMIN" />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-md  mb-1 ">Verified</h3>
                    <Input type="text" value="ADMIN" />
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminProfile;
