import React, { useState } from "react";
import styles from "styles/common/components/Navbar.module.scss";
import NavItem from "./NavItem";
import { Route } from "nextjs-routes";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>("");
  console.log();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navitems}>
        {NAV_ITEMS.map((navItem) => (
          <NavItem
            linkText={navItem.linkText}
            href={navItem.href}
            itemIsActive={navItem.itemIsActive(
              router.pathname,
              navItem.href.pathname
            )}
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
  itemIsActive(currentPath: string, linkPath: string): boolean;
}

const isActiveItem = (currentPath: string, linkPath: string) => {
  return currentPath === linkPath;
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
