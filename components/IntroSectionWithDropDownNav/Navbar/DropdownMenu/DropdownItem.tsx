import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import { StaticImageData } from "next/image";
import DropdownIcon from "./DropdownIcon";

interface DropdownItemProps {
  icon?: StaticImageData;
  text: string;
}

const DropdownItem = ({ icon, text }: DropdownItemProps) => {
  return (
    <div className={styles.dropdownItem} key={text}>
      {icon && <DropdownIcon icon={icon} altText={text} />}
      <div>{text}</div>
    </div>
  );
};

export default DropdownItem;
