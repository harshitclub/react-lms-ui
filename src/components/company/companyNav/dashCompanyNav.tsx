import { SidebarTrigger } from "../../ui/sidebar";
import { ModeToggle } from "../../shared/mode-toggle";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import React from "react";
import { useLocation } from "react-router";
import CapitalizeFirstLetter from "../../shared/capitalizeFirstLetter";

function DashCompanyNav() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      <nav>
        <div className="dashNavContainer flex spaceBtw align-baseline justify-center width100 border-b ">
          <div className="dashNavRight flex alignCenter justify-center">
            <SidebarTrigger />
            <span className="ml-2 mr-3">|</span>
            <Breadcrumb>
              <BreadcrumbList>
                {/* Home Link */}
                <BreadcrumbItem>
                  <BreadcrumbLink href="/company">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {pathnames.length > 0 && <BreadcrumbSeparator />}{" "}
                {/* Separator after Home */}
                {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;

                  return (
                    <React.Fragment key={to}>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>
                            <CapitalizeFirstLetter>
                              {value}
                            </CapitalizeFirstLetter>
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={to}>
                            <CapitalizeFirstLetter>
                              {value}
                            </CapitalizeFirstLetter>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}{" "}
                      {/* Add separator between items */}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="dashNavLeft flex alignCenter justify-center gap-3 pt-3 pb-3 pr-3">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  Campussutras Private Limited
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Employee</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Employees</DropdownMenuItem>
                        <DropdownMenuItem>Add Employee</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Courses</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashCompanyNav;
