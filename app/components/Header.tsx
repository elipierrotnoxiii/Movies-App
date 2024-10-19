import {Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Switcher from "./Switcher";
import Search from "./Search";

const Header = () => {
  return (
     <Navbar isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit"><a href="/">Anjrot Dev</a></p>
        </NavbarBrand>
      
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center">
        <Search />
      </NavbarContent>
      <NavbarContent justify="end">
          <Switcher/>
        </NavbarContent>
    </Navbar>
    
  )
}

export default Header
