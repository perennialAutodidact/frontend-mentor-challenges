import React from "react";
import logo from "components/IntroSectionWithDropDownNav/starterCode/images/logo.svg";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className={styles.brand}>
      <Image
        src={logo}
        alt={"Snap Logo"}
        height={logo.height}
        width={logo.width}
        blurDataURL={logo.blurDataURL}
      />
    </div>
  );
};

export default Logo;
