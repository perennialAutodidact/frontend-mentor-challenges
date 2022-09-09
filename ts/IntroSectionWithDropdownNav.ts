import { StaticImageData } from "next/image";
export interface NavbarState {
  mobileNavIsOpen: boolean;
  openDropdownIds: Dropdown[];
  dropdownTimeline: GSAPTimeline;
  mobileNavTimeline: GSAPTimeline;
}

export type IntroSectionNavItem = {
  text: string;
  dropdown: IntroSectionDropdownItem[];
};

export type IntroSectionDropdownItem = {
  text: string;
  icon?: StaticImageData;
};

export enum ReducerActionType {
  OPEN_MOBILE_NAV,
  CLOSE_MOBILE_NAV,
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN,
}

export type Dropdown = Element;

export type OpenOrCloseDropdown = {
  type: ReducerActionType.OPEN_DROPDOWN | ReducerActionType.CLOSE_DROPDOWN;
  payload: {
    dropdown: Dropdown;
  };
};

export type OpenOrCloseMobileNav = {
  type: ReducerActionType.OPEN_MOBILE_NAV | ReducerActionType.CLOSE_MOBILE_NAV;
};

export type ReducerAction = OpenOrCloseDropdown | OpenOrCloseMobileNav;

export type NavbarContextType = [
  state: NavbarState,
  dispatch: React.Dispatch<ReducerAction>
];
