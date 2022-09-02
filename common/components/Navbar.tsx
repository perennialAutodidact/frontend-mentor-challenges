import React from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navitem}>
        <Link href="ccDetailForm" passHref>
          <a>CC Form</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
