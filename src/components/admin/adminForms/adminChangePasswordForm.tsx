import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

function AdminChangePasswordForm() {
  return (
    <>
      <form className="w-1/2">
        <h3 className="text-md  mb-1 ">Current Password</h3>
        <Input placeholder="**********" className="mb-5" />
        <h3 className="text-md  mb-1 ">New Password</h3>
        <Input placeholder="**********" className="mb-5" />
        <Button>Change Password</Button>
      </form>
    </>
  );
}

export default AdminChangePasswordForm;
