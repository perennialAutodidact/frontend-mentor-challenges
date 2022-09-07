import React from "react";
import Image from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import hamburgerIcon from "../starterCode/images/icon-menu.svg";

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