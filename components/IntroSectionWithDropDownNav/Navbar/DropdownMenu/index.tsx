import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import { IntroSectionDropdownItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
import DropdownItem from "./DropdownItem";
import DropdownIcon from "./DropdownIcon";

interface DropdownMenuProps {
  dropdownItems: IntroSectionDropdownItem[];
  isOpen: boolean;
  toggleDropdown: React.MouseEventHandler;
}

const DropdownMenu = ({
  dropdownItems,
  isOpen,
  toggleDropdown,
}: DropdownMenuProps) => {
  return (
    <nav className={styles.dropdownMenu}>
      {dropdownItems.map(({ icon, text }) => (
        <DropdownItem icon={icon} text={text} key={text}/>
      ))}
    </nav>
  );
};

export default DropdownMenu;
