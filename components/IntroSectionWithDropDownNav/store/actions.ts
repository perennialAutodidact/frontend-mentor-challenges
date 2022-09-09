import {
  OpenOrCloseMobileNav,
  ReducerActionType,
  ResetDropdowns,
  ResetDropdownsComplete,
  OpenOrCloseDropdown
} from "ts/IntroSectionWithDropdownNav";

export const openMobileNav = (): OpenOrCloseMobileNav => ({
  type: ReducerActionType.OPEN_MOBILE_NAV,
});

export const closeMobileNav = (): OpenOrCloseMobileNav => ({
  type: ReducerActionType.CLOSE_MOBILE_NAV,
});

export const openDropdown = (dropdownId: string): OpenOrCloseDropdown => ({
  type: ReducerActionType.OPEN_DROPDOWN,
  payload: {
    dropdownId
  }
})

export const closeDropdown = (dropdownId: string): OpenOrCloseDropdown => ({
  type: ReducerActionType.CLOSE_DROPDOWN,
  payload: {
    dropdownId
  }
})
export const resetDropdowns = (): ResetDropdowns => ({
  type: ReducerActionType.RESET_DROPDOWNS
})

export const resetDropdownsComplete = (): ResetDropdownsComplete => ({
  type: ReducerActionType.RESET_DROPDOWNS_COMPLETE
})

