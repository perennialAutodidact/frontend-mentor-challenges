import React, { useContext, useRef, useEffect } from "react";
import { NavbarContext } from "../../store";
import NavItems from "../NavItems";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import CloseButton from "./CloseButton";
import Logo from "../NavItems/Logo";
import HamburgerIcon from "./HamburgerIcon";
import AuthLinks from "../NavItems/AuthLinks";

import {
  closeMobileNav,
  openMobileNav,
} from "components/IntroSectionWithDropDownNav/store/actions";
import { useMobileNavTimeline } from "components/IntroSectionWithDropDownNav/useMobileNavTimeline";

const sideNavId = "sideNav";
const backdropId = "backdrop";

interface NavbarMobileProps {
  navbarRef: React.MutableRefObject<null>;
  hamburgerRef: React.MutableRefObject<null>;
}

const NavbarMobile = ({ navbarRef, hamburgerRef }: NavbarMobileProps) => {
  const [state, dispatch] = useContext(NavbarContext);
  const { mobileNavIsOpen } = state;
  const mobileNavTimeline = useMobileNavTimeline(
    navbarRef,
    sideNavId,
    backdropId
  );

  const toggleMobileNav = (e: React.MouseEvent) => {
    if (mobileNavIsOpen) {
      dispatch(closeMobileNav());
    } else {
      dispatch(openMobileNav());
    }
  };

  useEffect(() => {
    mobileNavIsOpen ? mobileNavTimeline.play() : mobileNavTimeline.reverse();
  }, [mobileNavIsOpen, mobileNavTimeline]);

  return (
    <div className={styles.navbarMobile}>
      <div className={styles.sideNavBackdrop} id={backdropId}></div>
      <Logo />
      <HamburgerIcon toggleMobileNav={toggleMobileNav} ref={hamburgerRef} />
      <div className={styles.sideNav} id={sideNavId} ref={navbarRef}>
        <CloseButton toggleMobileNav={toggleMobileNav} />
        <NavItems toggleMobileNav={toggleMobileNav} />
        <AuthLinks />
      </div>
    </div>
  );
};

export default NavbarMobile;
