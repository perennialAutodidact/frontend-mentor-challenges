import React, { useState } from "react";
import styles from "styles/common/components/Navbar.module.scss";
import Link from "next/link";
import NavItem from "./NavItem";
import { Route, route } from "nextjs-routes";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>("junior");
  return (
    <nav className={styles.navbar}>
      <NavItem
        linkText={"All"}
        pathname={"/challenges/[[...challengeLevel]]"}
        itemIsActive={activeNavItem === "all"}
        setActiveNavItem={setActiveNavItem}
      />
      <NavItem
        linkText={"Newbie"}
        pathname={"/challenges/[[...challengeLevel]]"}
        query={{ challengeLevel: "newbie" }}
        itemIsActive={activeNavItem === "newbie"}
        setActiveNavItem={setActiveNavItem}
      />
      <NavItem
        linkText={"Junior"}
        pathname={"/challenges/[[...challengeLevel]]"}
        query={{ challengeLevel: "junior" }}
        itemIsActive={activeNavItem === "junior"}
        setActiveNavItem={setActiveNavItem}
      />
      <NavItem
        linkText={"Intermediate"}
        pathname={"/challenges/[[...challengeLevel]]"}
        query={{ challengeLevel: "intermediate" }}
        itemIsActive={activeNavItem === "intermediate"}
        setActiveNavItem={setActiveNavItem}
      />
    </nav>
  );
};

export default Navbar;
