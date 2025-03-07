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
import { useState } from "react";
import { toast } from "sonner";
function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    account: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", user);
    toast.success("Login Success");
    setUser({
      email: "",
      password: "",
      account: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSelectChange = (value: string) => {
    setUser({ ...user, account: value });
  };
  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn">
        <form className="width60" onSubmit={handleSubmit}>
          <h1 className="scroll-m-20  pb-2 text-2xl font-bold tracking-tight first:mt-0 text-center">
            Login to your account
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-3 pb-3 border-b">
            Enter your details below to login into your account
          </p>
          <h3 className="text-md font-semibold mb-1">Email</h3>
          <Input
            type="email"
            placeholder="john@example.com"
            className="mb-3"
            onChange={handleChange}
            value={user.email}
            name="email"
          />
          <div className="authFormGroup flex spaceBtw mb-1">
            <h3 className="text-md font-semibold">Password</h3>
            <a
              href="/forget-password"
              className="text-sm text-muted-foreground"
            >
              Forget Password?
            </a>
          </div>

          <Input
            type="password"
            placeholder="**********"
            className="mb-3"
            onChange={handleChange}
            value={user.password}
            name="password"
          />
          <h3 className="text-md font-semibold mb-1">Account?</h3>
          <Select value={user.account} onValueChange={handleSelectChange}>
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
