import React, { useState } from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import Logo from "./Logo";
import NavItems from "./NavItems";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMobileNav = (e: React.MouseEvent) => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavItems />
      {isOpen.toString()}
      <HamburgerIcon toggleMobileNav={toggleMobileNav} />
    </nav>
  );
};

export default Navbar;
