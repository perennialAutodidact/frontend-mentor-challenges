import React from "react";
import styles from "styles/common/components/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navitem}>
        <Link href="/challenges/junior/cc-form" passHref>
          <a>CC Form</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
