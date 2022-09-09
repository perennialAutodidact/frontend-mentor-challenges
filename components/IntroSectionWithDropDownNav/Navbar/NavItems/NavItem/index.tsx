import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { IntroSectionNavItem, Dropdown } from "ts/IntroSectionWithDropdownNav";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import DropdownMenu from "../../Dropdown";
import ArrowIcon from "./ArrowIcon";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";
import { closeDropdown } from "components/IntroSectionWithDropDownNav/store/actions";
import { useDropdownTimeline } from "components/IntroSectionWithDropDownNav/useDropdownTimeline";

type IntroSectionNavItemProps = {
  toggleMobileNav: React.MouseEventHandler | null;
} & IntroSectionNavItem;

const NavItem = ({
  text: navItemText,
  dropdown,
  toggleMobileNav,
}: IntroSectionNavItemProps) => {
  const [state, dispatch] = useContext(NavbarContext);
  const { openDropdownIds } = state;
  const navItemRef = useRef(null);
  const hasDropdownItems = dropdown.length > 0;

  const { dropdownTimeline, dropdownIsOpen } = useDropdownTimeline(
    navItemRef,
    navItemText
  );
  dropdownTimeline && dropdownTimeline.play();
  setTimeout(() => {
    dropdownTimeline && dropdownTimeline.reverse();
  }, 2000);

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleDropdown: React.MouseEventHandler = (e: React.MouseEvent) => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    dropdownTimeline &&
      (isOpen ? dropdownTimeline.play() : dropdownTimeline.reverse());
  }, [isOpen]);

  return (
    <div
      id={hasDropdownItems ? navItemText : ""}
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
        />
      )}
    </div>
  );
};

export default NavItem;
