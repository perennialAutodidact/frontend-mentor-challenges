import React, { createContext, useReducer } from "react";
import {
  NavbarState,
  ReducerAction,
  NavbarContextType,
} from "ts/IntroSectionWithDropdownNav";
import { navbarReducer } from "./reducer";
import { gsap } from "gsap";

export const initialState: NavbarState = {
  mobileNavIsOpen: true,
  openDropdownIds: [],
  dropdownTimeline: gsap.timeline(),
  mobileNavTimeline: gsap.timeline(),
};
export const NavbarContext = createContext<NavbarContextType>([
  initialState,
  () => {},
]);
