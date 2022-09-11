import React, { useContext, useRef, useState } from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import Logo from "../NavItems/Logo";
import NavItems from "../NavItems";
import AuthLinks from "../NavItems/AuthLinks";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";

interface NavbarProps {
  navbarRef: React.MutableRefObject<null>;
}

const Navbar = ({ navbarRef }: NavbarProps) => {
  return (
    <nav className={styles.navbarDesktop} ref={navbarRef}>
      <Logo />
      <div className={styles.navSections}>
        <NavItems />
        <AuthLinks />
      </div>
    </nav>
  );
};

export default Navbar;
