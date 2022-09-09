import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IntroSectionNavItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/NavMobile.module.scss";
import DropdownMenu from "../../Dropdown";
import ArrowIcon from "components/IntroSectionWithDropDownNav/Navbar/NavItems/NavItem/ArrowIcon";
type IntroSectionNavItemProps = {
  toggleMobileNav: React.MouseEventHandler | null;
} & IntroSectionNavItem;

const NavItem = ({
  text: navItemText,
  dropdown,
  toggleMobileNav,
}: IntroSectionNavItemProps) => {
  const navItemRef = useRef(null);
  let tl = useRef<GSAPTimeline>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown: React.MouseEventHandler = (e: React.MouseEvent) => {
    setIsOpen((isOpen) => !isOpen);
  };

  const hasDropdownItems = dropdown.length > 0;

  useEffect(() => {
    const navItemSelector: gsap.utils.SelectorFunc =
      gsap.utils.selector(navItemRef);
    const featuresDropdown = navItemSelector(`#${navItemText}`);
    const arrowIcon = navItemSelector(".arrow-icon");
    tl.current = gsap.timeline();

    if (tl.current) {
      tl.current = gsap.timeline(); //{ defaults: { repeat: 100 } });
      tl.current.progress(0).kill();

      tl.current
        .to(featuresDropdown, {
          maxHeight: 200,
          duration: 0.5,
        })
        .to(featuresDropdown, {
          opacity: 1,
          duration: 0.2,
          delay: -0.3,
        })
        .to(arrowIcon, {
          rotation: 180,
          duration: 0.3,
          delay: -0.5,
        });
    }
  }, []);

  useEffect(() => {
    tl.current && (isOpen ? tl.current.play() : tl.current.reverse());
  }, [isOpen]);

  return (
    <div
      className={styles.navItem}
      ref={navItemRef}
      onClick={(e) =>
        hasDropdownItems
          ? toggleDropdown(e)
          : toggleMobileNav && toggleMobileNav(e)
      }
    >
      <div className={styles.navItemContent}>
        <div>{navItemText}</div> {hasDropdownItems && <ArrowIcon />}
      </div>
      {dropdown && (
        <DropdownMenu
          dropdownItems={dropdown}
          isOpen={isOpen}
          toggleMobileNav={toggleMobileNav}
          toggleDropdown={toggleDropdown}
          id={navItemText}
        />
      )}
    </div>
  );
};

export default NavItem;
