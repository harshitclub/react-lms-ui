import { useLocation } from "react-router";
import { SidebarTrigger } from "../../ui/sidebar";
import { ModeToggle } from "../../shared/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
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
import CapitalizeFirstLetter from "../../shared/capitalizeFirstLetter";
import { Button } from "../../ui/button";

function DashNav() {
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
                  <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
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
                  <AvatarImage src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTg1OGxha28wMXEwd21qeXlldm5taHFsc2sxZ3I5b2F0N2x2OWtyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZXkraFrlIW1D25M6ZJ/giphy.gif" />

                  <AvatarFallback>3a</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>3a Learning Solutions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Company</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Companies</DropdownMenuItem>
                        <DropdownMenuItem>Add Company</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Employee</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Employees</DropdownMenuItem>
                        <DropdownMenuItem>Add Employee</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Individual</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Individuals</DropdownMenuItem>
                        <DropdownMenuItem>Add Individuals</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Courses</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <Button variant="destructive" className="w-full">
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashNav;
