import React from "react";
import Image from "next/image";
import iconArrowUp from "components/IntroSectionWithDropDownNav/starterCode/images/icon-arrow-up.svg";
import iconArrowDown from "components/IntroSectionWithDropDownNav/starterCode/images/icon-arrow-down.svg";
import { titleize } from "common/utils/helpers";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/ArrowIcon.module.scss";

interface ArrowIconProps {}

const ArrowIcon = ({}: ArrowIconProps) => {
  return (
    <div className={`arrow-icon ${styles.arrowIcon}`}>
      <Image src={iconArrowDown} alt={`Arrow Icon`} />
    </div>
  );
};

export default ArrowIcon;
