import React from "react";
import { IntroSectionNavItem } from "ts/types/challenges/IntroSectionWithDropDownNav";

type IntroSectionNavItemProps = {} & IntroSectionNavItem;

const NavItem = ({ text, dropdown }: IntroSectionNavItemProps) => {
  return <div>{text}</div>;
};

export default NavItem;
