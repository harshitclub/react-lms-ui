import "../style.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
function ForgetPasswordForm() {
  return (
    <>
      <div className="authForm width100 flex alignCenter justifyCenter flexColumn">
        <form className="width50">
          <h1 className="scroll-m-20  pb-2 text-2xl font-bold tracking-tight first:mt-0 text-center">
            Forget Password
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-3 pb-3 border-b">
            Enter your email below to reset your password
          </p>
          <h3 className="text-md font-semibold mb-1">Email</h3>
          <Input type="email" placeholder="john@example.com" className="mb-3" />

          <Button className="w-full mb-5">Reset Password</Button>
          <div className="flex items-center gap-4 mb-3">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Or
            </span>
            <Separator className="flex-1" />
          </div>

          <p className="text-center">
            Get back to -{" "}
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

export default ForgetPasswordForm;
