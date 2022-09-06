import React, { useState } from "react";
import styles from "styles/common/components/Navbar.module.scss";
import NavItem from "./NavItem";
import { Route } from "nextjs-routes";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navitems}>
        {NAV_ITEMS.map((navItem) => (
          <NavItem
            linkText={navItem.linkText}
            href={navItem.href}
            itemIsActive={navItem.itemIsActive(activeItem, navItem.linkText)}
            setActiveItem={setActiveItem}
            key={navItem.linkText}
          />
        ))}
      </div>
    </nav>
  );
};

interface NavItem {
  linkText: string;
  href: Route;
  itemIsActive(activeItem: string, linkText: string): boolean;
}

const isActiveItem = (activeItem: string, linkText: string) => {
  return activeItem === linkText;
};

const NAV_ITEMS: NavItem[] = [
  {
    linkText: "Home",
    href: {
      pathname: "/",
      query: {},
    },
    itemIsActive: isActiveItem,
  },
  {
    linkText: "Challenges",
    href: {
      pathname: "/challenges/[[...challengeLevel]]",
      query: {},
    },
    itemIsActive: isActiveItem,
  },
];

export default Navbar;
