import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";

interface DropdownIconProps {
  icon: StaticImageData;
  altText: string;
}

const DropdownIcon = ({
  icon: { src, height, width, blurDataURL },
  altText,
}: DropdownIconProps) => {
  return (
    <div className={styles.dropdownIcon}>
      <Image
        src={src}
        alt={altText}
        height={height}
        width={width}
        blurDataURL={blurDataURL}
      />
    </div>
  );
};

export default DropdownIcon;
