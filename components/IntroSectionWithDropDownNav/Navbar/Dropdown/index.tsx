import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/Menu.module.scss";
import { IntroSectionDropdownItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
import DropdownItem from "./Item";

interface DropdownMenuProps {
  dropdownItems: IntroSectionDropdownItem[];
  isOpen: boolean;
  toggleMobileNav: React.MouseEventHandler | null;
  toggleDropdown: React.MouseEventHandler;
  id: string;
}

const DropdownMenu = ({
  dropdownItems,
  isOpen,
  toggleMobileNav,
  toggleDropdown,
  id,
}: DropdownMenuProps) => {
  return (
    <nav className={styles.dropdownMenu} id={id}>
      <div className={styles.dropdownMenuItems}>
        {dropdownItems.map(({ icon, text }) => (
          <DropdownItem
            icon={icon}
            text={text}
            key={text}
            toggleMobileNav={toggleMobileNav || null}
            toggleDropdown={toggleDropdown}
          />
        ))}
      </div>
    </nav>
  );
};

export default DropdownMenu;
