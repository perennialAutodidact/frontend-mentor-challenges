import React from "react";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";

const AuthLinks = () => {
  return (
    <div className={styles.authLinks}>
      <div className={`${styles.navItem} ${styles.authLink}`}>Log In</div>
      <div className={`${styles.registerButton} ${styles.authLink}`}>Register</div>
    </div>
  );
};

export default AuthLinks;
