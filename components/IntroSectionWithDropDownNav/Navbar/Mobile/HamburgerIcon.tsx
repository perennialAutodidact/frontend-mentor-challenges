import React, { useContext } from "react";
import Image from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/HamburgerIcon.module.scss";
import hamburgerIcon from "components/IntroSectionWithDropDownNav/starterCode/images/icon-menu.svg";
import { NavbarContext } from "components/IntroSectionWithDropDownNav/store";

interface HamburgerIconProps {
  toggleMobileNav: React.MouseEventHandler;
  //   hamburgerRef: React.RefObject<HTMLDivElement>;
}
// const HamburgerIcon = ({
//   toggleMobileNav,
// //   hamburgerRef,
// }: HamburgerIconProps) => {
//   return (
//     <div
//       className={styles.hamburgerIcon}
//       onClick={toggleMobileNav}
//       ref={hamburgerRef}
//     >
//       <Image
//         src={hamburgerIcon}
//         alt="Open Mobile Navigation Menu"
//         height={hamburgerIcon.height}
//         width={hamburgerIcon.width}
//       />
//     </div>
//   );
// };

const HamburgerIcon = React.forwardRef(({ toggleMobileNav }:HamburgerIconProps, ref:React.LegacyRef<HTMLDivElement>) => {
  return (
    <div className={styles.hamburgerIcon} onClick={toggleMobileNav} ref={ref}>
      <Image
        src={hamburgerIcon}
        alt="Open Mobile Navigation Menu"
        height={hamburgerIcon.height}
        width={hamburgerIcon.width}
      />
    </div>
  );
});

HamburgerIcon.displayName = 'HamburgerIcon'

export default HamburgerIcon;
