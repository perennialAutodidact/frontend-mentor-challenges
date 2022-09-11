import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Dropdown/Icon.module.scss";
import iconTodo from "components/IntroSectionWithDropDownNav/starterCode/images/icon-todo.svg";
import iconCalendar from "components/IntroSectionWithDropDownNav/starterCode/images/icon-calendar.svg";
import iconReminders from "components/IntroSectionWithDropDownNav/starterCode/images/icon-reminders.svg";
import iconPlanning from "components/IntroSectionWithDropDownNav/starterCode/images/icon-planning.svg";
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
