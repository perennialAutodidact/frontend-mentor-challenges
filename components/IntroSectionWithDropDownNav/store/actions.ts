import {
  Dropdown,
  OpenOrCloseDropdown,
  OpenOrCloseMobileNav,
  ReducerAction,
  ReducerActionType,
} from "ts/IntroSectionWithDropdownNav";

export const openMobileNav = (): OpenOrCloseMobileNav => ({
  type: ReducerActionType.OPEN_MOBILE_NAV,
});

export const closeMobileNav = (): OpenOrCloseMobileNav => ({
  type: ReducerActionType.CLOSE_MOBILE_NAV,
});

export const openDropdown = (dropdown: Dropdown): OpenOrCloseDropdown => ({
  type: ReducerActionType.OPEN_DROPDOWN,
  payload: { dropdown },
});

export const closeDropdown = (dropdown: Dropdown) => ({
  type: ReducerActionType.CLOSE_DROPDOWN,
  payload: { dropdown },
});
