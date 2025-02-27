import "../style.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
function LoginForm() {
  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn">
        <form className="width60">
          <h1 className="scroll-m-20  pb-2 text-2xl font-bold tracking-tight first:mt-0 text-center">
            Login to your account
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-3 pb-3 border-b">
            Enter your details below to login into your account
          </p>
          <h3 className="text-md font-semibold mb-1">Email</h3>
          <Input type="email" placeholder="john@example.com" className="mb-3" />
          <div className="authFormGroup flex spaceBtw mb-1">
            <h3 className="text-md font-semibold">Password</h3>
            <a
              href="/forget-password"
              className="text-sm text-muted-foreground"
            >
              Forget Password?
            </a>
          </div>

          <Input type="password" placeholder="**********" className="mb-3" />
          <h3 className="text-md font-semibold mb-1">Account?</h3>
          <Select>
            <SelectTrigger className="w-full mb-3">
              <SelectValue placeholder="Select Account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full mb-5">Login</Button>
          <p className="text-center">
            Don&apos;t have account?{" "}
            <a
              href="/signup"
              className="font-medium text-primary underline underline-offset-4"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
