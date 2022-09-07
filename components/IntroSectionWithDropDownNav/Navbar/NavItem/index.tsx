import React, { useState } from "react";
import { IntroSectionNavItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import DropdownMenu from "../DropdownMenu";
import ArrowIcon from "./ArrowIcon";
type IntroSectionNavItemProps = {} & IntroSectionNavItem;

const NavItem = ({ text, dropdown }: IntroSectionNavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleDropdown: React.MouseEventHandler = (e: React.MouseEvent) => {
    console.log(e.target);
  };

  return (
    <div className={styles.navItem}>
      <span>
        {text}{" "}
        {dropdown && <ArrowIcon iconDirection={isOpen ? "DOWN" : "UP"} />}
      </span>
      {dropdown && isOpen && (
        <DropdownMenu
          dropdownItems={dropdown}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
};

export default NavItem;
