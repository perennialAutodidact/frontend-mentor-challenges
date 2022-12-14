import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/Menu.module.scss";
import { IntroSectionDropdownItem } from "ts/IntroSectionWithDropdownNav";
import DropdownItem from "./Item";

interface DropdownMenuProps {
  dropdownItems: IntroSectionDropdownItem[];
  isOpen: boolean;
  toggleMobileNav: React.MouseEventHandler | null;
  toggleDropdown: React.MouseEventHandler;
}

const DropdownMenu = ({
  dropdownItems,
  isOpen,
  toggleMobileNav,
  toggleDropdown,
}: DropdownMenuProps) => {

  const itemsHaveIcons = dropdownItems.some(item=>'icon' in item)  

  return (
    <nav className={`${styles.dropdownMenu} ${!itemsHaveIcons && styles.smallDropdown} dropdown `}>
      <div className={`${styles.dropdownMenuItems}`}>
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
