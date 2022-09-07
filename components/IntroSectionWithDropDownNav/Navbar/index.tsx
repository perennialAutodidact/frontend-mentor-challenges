import React, { useState } from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import Logo from "./Logo";
import NavItems from "./NavItems";
import HamburgerIcon from "./MobileNav/HamburgerIcon";
import MobileNav from "./MobileNav";


const Navbar = () => {
  return (
    <nav className={styles.navbarDesktop}>
      <Logo />
      <NavItems />
    </nav>
  );
};

export default Navbar;
