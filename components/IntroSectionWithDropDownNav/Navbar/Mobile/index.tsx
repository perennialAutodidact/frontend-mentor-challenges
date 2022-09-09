import React, { useContext, useRef, useEffect } from "react";
import { NavbarContext } from "../../store";
import NavItems from "../NavItems";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import CloseButton from "./CloseButton";
import Logo from "../NavItems/Logo";
import HamburgerIcon from "./HamburgerIcon";

import {
  closeMobileNav,
  openMobileNav,
} from "components/IntroSectionWithDropDownNav/store/actions";
import { useMobileNavTimeline } from "components/IntroSectionWithDropDownNav/useMobileNavTimeline";

const sideNavId = "sideNav";
const backdropId = "backdrop";

const NavbarMobile = () => {
  const [state, dispatch] = useContext(NavbarContext);
  const { mobileNavIsOpen } = state;
  const mobileNavRef = useRef(null);
  const mobileNavTimeline = useMobileNavTimeline(
    mobileNavRef,
    sideNavId,
    backdropId
  );
  //   const tl = useRef<GSAPTimeline>();

  const toggleMobileNav = (e: React.MouseEvent, callback?: Function) => {
    console.log("toggleMobileNav", e);
    dispatch(mobileNavIsOpen ? closeMobileNav() : openMobileNav());
    callback && callback();
  };

  useEffect(() => {
    mobileNavIsOpen ? mobileNavTimeline.play() : mobileNavTimeline.reverse();
  }, [mobileNavIsOpen]);

  return (
    <div className={styles.navbarMobile} ref={mobileNavRef}>
      <div className={styles.sideNavBackdrop} id={backdropId}></div>
      <Logo />
      <HamburgerIcon toggleMobileNav={toggleMobileNav} />
      <div className={styles.sideNav} id={sideNavId}>
        <CloseButton toggleMobileNav={toggleMobileNav} />
        <NavItems toggleMobileNav={toggleMobileNav} />
      </div>
    </div>
  );
};

export default NavbarMobile;
