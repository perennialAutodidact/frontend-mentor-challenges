import React from "react";
import styles from "styles/common/components/Navbar.module.scss";
import Link from "next/link";
import { Query, Route } from "nextjs-routes";

interface NavItemProps {
  itemIsActive: boolean;
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
  linkText: string;
  pathname: Route["pathname"];
  query?: Query;
}

const NavItem: React.FC<NavItemProps> = ({
  itemIsActive,
  setActiveNavItem,
  linkText,
  pathname,
  query,
}: NavItemProps) => {
  return (
    <div
      className={`${styles.navitem} ${itemIsActive && styles.navItem__active}`}
    >
      <Link
        href={{
          pathname,
          query,
        }}
        passHref
      >
        <a onClick={() => setActiveNavItem(linkText.toLowerCase())}>
          {linkText}
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
