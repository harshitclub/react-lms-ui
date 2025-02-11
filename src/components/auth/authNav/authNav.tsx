import { ModeToggle } from "../../shared/mode-toggle";

function AuthNav() {
  return (
    <>
      <nav className="flex justify-end p-3 mb-20">
        <ModeToggle />
      </nav>
    </>
  );
}

export default AuthNav;
