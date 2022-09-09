import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/Item.module.scss";
import { StaticImageData } from "next/image";
import DropdownIcon from "components/IntroSectionWithDropDownNav/Navbar/Dropdown/Icon";

interface DropdownItemProps {
  icon?: StaticImageData;
  text: string;
  toggleMobileNav: React.MouseEventHandler | null;
  toggleDropdown: React.MouseEventHandler;
}

const DropdownItem = ({
  icon,
  text,
  toggleMobileNav,
  toggleDropdown,
}: DropdownItemProps) => {
  return (
    <div
      className={styles.dropdownItem}
      key={text}
      onClick={(e) => {
        toggleDropdown(e);
        toggleMobileNav && toggleMobileNav(e);
      }}
    >
      {icon && <DropdownIcon icon={icon} altText={text} />}
      <div>{text}</div>
    </div>
  );
};

export default DropdownItem;
