import "../style.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import BtnLoader from "../../ui/btnLoader";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";
import { useNavigate } from "react-router";

function LoginForm() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl.admin.login}`, user);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);

      // await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form Data:", user);
      toast.success("Login Success");
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Form submission failed");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn pt-10">
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

          <Button className="w-full mb-5">
            {loading ? <BtnLoader /> : "Log In"}
          </Button>
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
