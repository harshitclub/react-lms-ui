import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback } from "../ui/avatar";

function DashNav() {
  return (
    <>
      <nav>
        <div className="dashNavContainer flex spaceBtw alignCenter width100">
          <div className="dashNavRight flex alignCenter justify-center">
            <SidebarTrigger />
            <span>|</span>
          </div>
          <div className="dashNavLeft flex alignCenter justify-center gap-3">
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
