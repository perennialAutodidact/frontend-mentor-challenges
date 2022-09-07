import React from "react";
import Image from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import closeButtonIcon from "components/IntroSectionWithDropDownNav/starterCode/images/icon-close-menu.svg";

interface CloseButtonProps {
  toggleMobileNav: undefined;
}

const CloseButton = ({ toggleMobileNav }: CloseButtonProps) => {
  const { src, height, width, blurDataURL } = closeButtonIcon;
  return (
    <div className={styles.closeNavButton}>
      <Image
        src={src}
        alt="Close Menu Button"
        height={height}
        width={width}
        blurDataURL={blurDataURL}
      />
    </div>
  );
};

export default CloseButton;
