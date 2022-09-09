import React, { createContext, useReducer } from "react";
import {
  NavbarState,
  ReducerAction,
  NavbarContextType,
} from "ts/IntroSectionWithDropdownNav";
import { navbarReducer } from "./reducer";
import { gsap } from "gsap";

export const initialState: NavbarState = {
  mobileNavIsOpen: false,
  closeAllDropdowns: false,
  openDropdownIds: []
};
export const NavbarContext = createContext<NavbarContextType>([
  initialState,
  () => {},
]);
