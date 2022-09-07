import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import NavItems from "../NavItems";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import CloseButton from "./CloseButton";
import Logo from "../Logo";
import HamburgerIcon from "./HamburgerIcon";
import { gsap } from "gsap";

const NavbarMobile = () => {
  const navbarMobileRef = useRef(null);
  const tl = useRef<GSAPTimeline>();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMobileNav = (e: React.MouseEvent) => {
    setIsOpen((isOpen) => !isOpen);
  };
  
  useEffect(() => {
    const navbarSelector = gsap.utils.selector(navbarMobileRef);
    let sideNav: ReturnType<typeof navbarSelector> = navbarSelector('#sideNav');
    let backdrop: ReturnType<typeof navbarSelector> = navbarSelector('#backdrop');
    tl.current = gsap.timeline();
    tl.current && tl.current.progress(0).kill();

    tl.current
      .to(sideNav, {
        duration: 0.5,
        right: "-50px",
        ease: "back.inOut(1.2)",
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
    tl.current && (isOpen ? tl.current.play() : tl.current.reverse());
  }, [isOpen]);

  return (
    <div className={styles.navbarMobile} ref={navbarMobileRef}>
      <div className={styles.sideNavBackdrop} id="backdrop"></div>
      <Logo />
      <HamburgerIcon toggleMobileNav={toggleMobileNav} />
      <div className={styles.sideNav} id="sideNav">
        <CloseButton toggleMobileNav={toggleMobileNav} />
        <NavItems />
      </div>
    </div>
  );
};

export default NavbarMobile;
