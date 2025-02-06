import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback } from "../ui/avatar";

function DashNav() {
  return (
    <>
      <nav>
        <div className="dashNavContainer flex spaceBtw align-baseline justify-center width100 border-b ">
          <div className="dashNavRight flex alignCenter justify-center">
            <SidebarTrigger />
            <span>|</span>
            <ul className="flex align-middle justify-center gap-5 ml-1 text-muted-foreground text-sm">
              <li>
                <a href="/admin">Home</a>
              </li>
              <li>
                <a href="/admin/companies">Companies</a>
              </li>
              <li>
                <a href="/admin/employees">Employees</a>
              </li>
              <li>
                <a href="/admin/individuals">Individuals</a>
              </li>
            </ul>
          </div>
          <div className="dashNavLeft flex alignCenter justify-center gap-3 pt-3 pb-3 pr-3">
            <ModeToggle />
            <Avatar>
              <AvatarFallback>3a</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashNav;
