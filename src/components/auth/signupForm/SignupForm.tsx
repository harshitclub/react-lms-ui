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
function SignupForm() {
  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn">
        <form className="width60">
          <h1 className="scroll-m-20  pb-2 mb-2 text-2xl font-bold tracking-tight first:mt-0 text-center border-b">
            Create an account
          </h1>
          {/* <p className="text-sm text-muted-foreground text-center mb-3 pb-3 border-b">
            Enter your details below to create your account
          </p> */}
          <h3 className="text-md font-semibold mb-1">Full Name</h3>
          <Input type="text" placeholder="John Walker" className="mb-2" />
          <h3 className="text-md font-semibold mb-1">Email</h3>
          <Input type="email" placeholder="john@example.com" className="mb-2" />
          <h3 className="text-md font-semibold mb-1">Phone</h3>
          <Input
            type="number"
            placeholder="+91 8888 8888 88"
            className="mb-2"
          />
          <h3 className="text-md font-semibold mb-2">Password</h3>
          <Input type="password" placeholder="**********" className="mb-2" />

          <h3 className="text-md font-semibold mb-1">Account Type</h3>
          <Select>
            <SelectTrigger className="w-full mb-2">
              <SelectValue placeholder="Select Account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full mb-3">Sign Up</Button>
          <p className="text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-primary underline underline-offset-4"
            >
              Log In
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
