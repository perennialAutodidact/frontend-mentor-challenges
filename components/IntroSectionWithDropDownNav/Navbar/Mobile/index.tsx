import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import NavItems from "../NavItems";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import CloseButton from "./CloseButton";
import Logo from "../NavItems/Logo";
import HamburgerIcon from "./HamburgerIcon";
import { gsap } from "gsap";

const NavbarMobile = () => {
  const navbarMobileRef = useRef(null);
  const tl = useRef<GSAPTimeline>();

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const toggleMobileNav = (e: React.MouseEvent, callback?: Function) => {
    console.log("toggleMobileNav", e);
    setNavIsOpen((navIsOpen) => !navIsOpen);
    callback && callback();
  };

  useEffect(() => {
    const navbarSelector: gsap.utils.SelectorFunc =
      gsap.utils.selector(navbarMobileRef);
    let sideNav: ReturnType<typeof navbarSelector> = navbarSelector("#sideNav");
    let backdrop: ReturnType<typeof navbarSelector> =
      navbarSelector("#backdrop");
    tl.current = gsap.timeline();
    tl.current && tl.current.progress(0).kill();

    tl.current
      .to(sideNav, {
        duration: 0.5,
        right: "-50px",
        ease: "back.inOut(1.7)",
        immediateRender: false,
      })
      .to(backdrop, {
        duration: 0.5,
        xPercent: 100,
        delay: -0.3,
        immediateRender: false,
      });
  }, []);

  useEffect(() => {
    tl.current && (navIsOpen ? tl.current.play() : tl.current.reverse());
  }, [navIsOpen]);

  return (
    <div className={styles.navbarMobile} ref={navbarMobileRef}>
      <div className={styles.sideNavBackdrop} id="backdrop"></div>
      <Logo />
      <HamburgerIcon toggleMobileNav={toggleMobileNav} />
      <div className={styles.sideNav} id="sideNav">
        <CloseButton toggleMobileNav={toggleMobileNav} />
        <NavItems toggleMobileNav={toggleMobileNav} />
      </div>
    </div>
  );
};

export default NavbarMobile;
