import React from "react";
import Image from "next/image";
import iconArrowUp from "components/IntroSectionWithDropDownNav/starterCode/images/icon-arrow-up.svg";
import iconArrowDown from "components/IntroSectionWithDropDownNav/starterCode/images/icon-arrow-down.svg";
import { titleize } from "common/utils/helpers";

interface ArrowIconProps {
  iconDirection: "UP" | "DOWN";
}

const ArrowIcon = ({ iconDirection }: ArrowIconProps) => {
  return (
    <span>
      <Image
        src={iconDirection === "UP" ? iconArrowUp : iconArrowDown}
        alt={`Icon Arrow ${titleize(iconDirection)}`}
      />
    </span>
  );
};

export default ArrowIcon;
