import React, { useContext } from "react";
import Image from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/HamburgerIcon.module.scss";
import hamburgerIcon from "components/IntroSectionWithDropDownNav/starterCode/images/icon-menu.svg";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";

interface HamburgerIconProps {
  toggleMobileNav: React.MouseEventHandler;
}

const HamburgerIcon = ({ toggleMobileNav }: HamburgerIconProps) => {
  return (
    <div className={styles.hamburgerIcon} onClick={toggleMobileNav}>
      <Image
        src={hamburgerIcon}
        alt="Open Mobile Navigation Menu"
        height={hamburgerIcon.height}
        width={hamburgerIcon.width}
      />
    </div>
  );
};

export default HamburgerIcon;
