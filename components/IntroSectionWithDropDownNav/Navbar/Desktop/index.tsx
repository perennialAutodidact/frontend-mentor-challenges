import React, { useState } from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import Logo from "../NavItems/Logo";
import NavItems from "../NavItems";
import HamburgerIcon from "../Mobile/HamburgerIcon";
import MobileNav from "../Mobile";

const Navbar = () => {
  return (
    <nav className={styles.navbarDesktop}>
      <Logo />
      <NavItems />
    </nav>
  );
};

export default Navbar;
