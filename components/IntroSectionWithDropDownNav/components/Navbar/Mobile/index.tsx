import React, { useContext, useRef, useEffect } from "react";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";
import NavItems from "components/IntroSectionWithDropDownNav/components/Navbar/NavItems";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import CloseButton from "./CloseButton";
import Logo from "components/IntroSectionWithDropDownNav/components/Navbar/NavItems/Logo";
import HamburgerIcon from "./HamburgerIcon";
import AuthLinks from "components/IntroSectionWithDropDownNav/components/Navbar/NavItems";

import {
  closeMobileNav,
  openMobileNav,
} from "components/IntroSectionWithDropDownNav/store/actions";
import { useMobileNavTimeline } from "components/IntroSectionWithDropDownNav/useMobileNavTimeline";

const sideNavId = "sideNav";
const backdropId = "backdrop";

interface NavbarMobileProps {
  navbarRef: React.MutableRefObject<null>;
  hamburgerRef: React.RefObject<HTMLDivElement>;
  sideNavRef: React.RefObject<HTMLDivElement>;
}

const NavbarMobile = ({
  navbarRef,
  hamburgerRef,
  sideNavRef,
}: NavbarMobileProps) => {
  const [state, dispatch] = useContext(NavbarContext);
  const { mobileNavIsOpen } = state;
  const mobileNavTimeline = useMobileNavTimeline(
    navbarRef,
    sideNavId,
    backdropId
  );

  const toggleMobileNav = (e: React.MouseEvent) => {
    console.log({ mobileNavIsOpen });
    if (mobileNavIsOpen) {
      dispatch(closeMobileNav());
    } else {
      dispatch(openMobileNav());
    }
  };

  // useEffect(() => {
  //   if (mobileNavIsOpen) {
  //     mobileNavTimeline.play();
  //     console.log('open mobile nav')
  //   } else {
  //     console.log('close mobile nav')
  //     mobileNavTimeline.reverse();
  //   }
  // }, [mobileNavIsOpen, mobileNavTimeline]);

  return (
    <div className={styles.navbarMobile} ref={navbarRef}>
      <div className={styles.sideNavBackdrop} id={backdropId}></div>
      <Logo />
      <HamburgerIcon toggleMobileNav={toggleMobileNav} ref={hamburgerRef} />
      <div className={styles.sideNav} id={sideNavId} ref={sideNavRef}>
        <CloseButton toggleMobileNav={toggleMobileNav} />
        <NavItems toggleMobileNav={toggleMobileNav} />
        <AuthLinks />
      </div>
    </div>
  );
};

export default NavbarMobile;
