import "../style.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
function ResetPasswordForm() {
  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn">
        <form className="width60">
          <h1 className="scroll-m-20  pb-2 mb-2 text-2xl font-bold tracking-tight first:mt-0 text-center border-b">
            Change Password
          </h1>
          {/* <p className="text-sm text-muted-foreground text-center mb-3 pb-3 border-b">
            Enter your new & secure password
          </p> */}
          <h3 className="text-md font-semibold mb-1">New Password</h3>
          <Input type="password" placeholder="**********" className="mb-3" />
          <h3 className="text-md font-semibold mb-1">Confirm Password</h3>
          <Input type="password" placeholder="**********" className="mb-3" />
          <Button className="w-full mb-5">Change Password</Button>
        </form>
      </div>
    </>
  );
}

export default ResetPasswordForm;
