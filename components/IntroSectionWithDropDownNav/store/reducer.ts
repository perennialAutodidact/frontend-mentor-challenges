import React from "react";
import { NavbarState, ReducerActionType } from "ts/IntroSectionWithDropdownNav";
import { ReducerAction } from "ts/IntroSectionWithDropdownNav";

export const navbarReducer: React.Reducer<NavbarState, ReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ReducerActionType.OPEN_MOBILE_NAV:
      return {
        ...state,
        mobileNavIsOpen: true,
        closeAllDropdowns: false,
      };
    case ReducerActionType.CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNavIsOpen: false,
      };
    case ReducerActionType.OPEN_DROPDOWN:
      const { dropdownId } = action.payload;
      return {
        ...state,
        closeAllDropdowns: false,
        openDropdownIds: [...state.openDropdownIds, dropdownId], //state.openDropdownIds.concat(dropdownId),
      };
    case ReducerActionType.CLOSE_DROPDOWN:
      return {
        ...state,
        openDropdownIds: state.openDropdownIds.filter(
          (id) => id !== action.payload.dropdownId
        ),
      };
    case ReducerActionType.RESET_DROPDOWNS:
      return {
        ...state,
        closeAllDropdowns: true,
        openDropdownIds: [],
      };
    case ReducerActionType.RESET_DROPDOWNS_COMPLETE:
      return {
        ...state,
        closeAllDropdowns: false,
      };
    default:
      return state;
  }
};
