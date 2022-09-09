import React, {
  useState,
  useEffect,
  useRef,
  useContext
} from "react";
import { IntroSectionNavItem } from "ts/IntroSectionWithDropdownNav";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import DropdownMenu from "../../Dropdown";
import ArrowIcon from "./ArrowIcon";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";
import { useDropdownTimeline } from "components/IntroSectionWithDropDownNav/useDropdownTimeline";

type IntroSectionNavItemProps = {
  toggleMobileNav: React.MouseEventHandler | null;
} & IntroSectionNavItem;

const NavItem = ({
  text: navItemText,
  dropdown,
  toggleMobileNav,
  uuid,
}: IntroSectionNavItemProps) => {
  const [state, dispatch] = useContext(NavbarContext);
  const navItemRef = useRef(null);
  const hasDropdownItems = dropdown.length > 0;

  const { dropdownTimeline, dropdownIsOpen } = useDropdownTimeline(
    hasDropdownItems,
    navItemRef,
    navItemText,
    uuid
  );

  const toggleDropdown: React.MouseEventHandler = (e: React.MouseEvent) => {
    console.log(dropdownIsOpen)
    dropdownTimeline &&
      (dropdownIsOpen ? dropdownTimeline.reverse() : dropdownTimeline.play());
  };

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
          isOpen={dropdownIsOpen}
          toggleMobileNav={toggleMobileNav}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
};

export default NavItem;
