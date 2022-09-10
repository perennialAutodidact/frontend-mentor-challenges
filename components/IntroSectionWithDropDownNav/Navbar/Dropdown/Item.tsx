import React, { useContext } from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/Item.module.scss";
import { StaticImageData } from "next/image";
import DropdownIcon from "components/IntroSectionWithDropDownNav/Navbar/Dropdown/Icon";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";
import { resetDropdowns } from "components/IntroSectionWithDropDownNav/store/actions";

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

  const [state, dispatch] = useContext(NavbarContext)

  return (
    <div
      className={styles.dropdownItem}
      key={text}
      onClick={(e) => {
        if(toggleMobileNav){
          toggleMobileNav(e)
        };
        dispatch(resetDropdowns())       
      }}
    >
      {icon && <DropdownIcon icon={icon} altText={text} />}
      <div>{text}</div>
    </div>
  );
};

export default DropdownItem;
