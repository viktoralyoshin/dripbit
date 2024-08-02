"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Link,
  Image,
  DropdownSection,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import React from "react";
import {
  LogIn,
  UserRound,
  ChartLine,
  CircleHelp,
  LogOut,
  Heart,
  ShoppingBag,
} from "lucide-react";

export default function UiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAuth, setAuth] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      className="my-2"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link color="foreground" href="/" className="flex gap-2 items-center">
            <Image src="logo.png" alt="alt" width={40} height={40}/>
            <p className="font-semibold text-2xl text-inherit">Dripbit</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            color="foreground"
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src="logo.png" alt="alt" width={40} height={40}/>
            <p className="font-semibold text-2xl text-inherit">Dripbit</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        {isAuth ? (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="signup"
              variant="solid"
              size="md"
              startContent={<LogIn size={20} />}
            >
              Sign In
            </Button>
          </NavbarItem>
        ) : (
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 sm:flex hidden">
              <Popover
                key="heart"
                offset={10}
                placement="bottom"
                backdrop="blur"
              >
                <PopoverTrigger>
                  <Button isIconOnly color="default" variant="light">
                    <Heart size={20} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Liked tracks</p>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover
                key="heart"
                offset={10}
                placement="bottom"
                backdrop="blur"
              >
                <PopoverTrigger>
                  <Button isIconOnly color="default" variant="light">
                    <ShoppingBag size={20} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Cart</p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Dropdown placement="bottom-end" backdrop="blur">
              <DropdownTrigger>
                <div className="flex gap-2 items-center">
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
                    name="1rowvy"
                    size="md"
                    src="/main.png"
                  />
                  <div className="sm:flex hidden flex-col">
                    <p className="text-[16px]">@1rowvy</p>
                    <p className="opacity-50 text-[14px]">$500</p>
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownSection showDivider>
                  <DropdownItem
                    key="profile"
                    startContent={<UserRound size={20} />}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    key="dashboard"
                    startContent={<ChartLine size={20} />}
                  >
                    Dashboard
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider>
                  <DropdownItem
                    key="help"
                    startContent={<CircleHelp size={20} />}
                  >
                    Help
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                  startContent={<LogOut size={20} />}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
