import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

export interface NavbarState {
  mobileNavIsOpen: boolean;
  closeAllDropdowns: boolean;
  openDropdownIds: string[];
}

export type IntroSectionNavItem = {
  text: string;
  dropdown: IntroSectionDropdownItem[];
  uuid: string;
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
  RESET_DROPDOWNS,
  RESET_DROPDOWNS_COMPLETE,
}

export type ResetDropdowns = {
  type: ReducerActionType.RESET_DROPDOWNS;
};

export type ResetDropdownsComplete = {
  type: ReducerActionType.RESET_DROPDOWNS_COMPLETE;
};

export type OpenOrCloseMobileNav = {
  type: ReducerActionType.OPEN_MOBILE_NAV | ReducerActionType.CLOSE_MOBILE_NAV;
};

export type OpenOrCloseDropdown = {
  type: ReducerActionType.OPEN_DROPDOWN | ReducerActionType.CLOSE_DROPDOWN;
  payload: {
    dropdownId: string;
  };
};

export type ReducerAction =
  | ResetDropdowns
  | ResetDropdownsComplete
  | OpenOrCloseDropdown
  | OpenOrCloseMobileNav;

export type NavbarContextType = [
  state: NavbarState,
  dispatch: React.Dispatch<ReducerAction>
];
