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
      };
    case ReducerActionType.CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNavIsOpen: false,
      };
    case ReducerActionType.OPEN_DROPDOWN:
      return {
        ...state,
        openDropdownIds: state.openDropdownIds.concat(
          action.payload.dropdownId
        ),
      };
    case ReducerActionType.CLOSE_DROPDOWN:
      return {
        ...state,
        openDropdownIds: state.openDropdownIds.filter(
          (id) => id !== action.payload.dropdownId
        ),
      };
    default:
      return state;
  }
};
