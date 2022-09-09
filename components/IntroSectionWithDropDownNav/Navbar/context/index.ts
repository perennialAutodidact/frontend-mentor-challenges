import { createContext } from "react";
import { NavbarState } from "ts/interfaces/IntroPageWithDropdownNav";

const initialState: NavbarState = {
  mobileNavIsOpen: false,
  openDropdownIds: [],
};

const NavbarContext = createContext<NavbarState>(initialState);

export default NavbarContext;
