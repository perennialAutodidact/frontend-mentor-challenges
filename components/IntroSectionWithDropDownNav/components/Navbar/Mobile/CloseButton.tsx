import React from "react";
import Image from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/CloseButton.module.scss";
import closeButtonIcon from "components/IntroSectionWithDropDownNav/starterCode/images/icon-close-menu.svg";

interface CloseButtonProps {
  toggleMobileNav: React.MouseEventHandler;
}

const CloseButton = ({ toggleMobileNav }: CloseButtonProps) => {
  const { src, height, width, blurDataURL } = closeButtonIcon;
  return (
    <div className={styles.closeNavButton}>
      <div
        onClick={(e) => {
          toggleMobileNav && toggleMobileNav(e);
        }}
      >
        <Image
          src={src}
          alt="Close Menu Button"
          height={height}
          width={width}
          blurDataURL={blurDataURL}
        />
      </div>
    </div>
  );
};

export default CloseButton;
