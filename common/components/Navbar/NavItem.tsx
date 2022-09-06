import React from "react";
import styles from "styles/common/components/Navbar.module.scss";
import Link from "next/link";
import { Query, Route } from "nextjs-routes";

interface NavItemProps {
  itemIsActive: boolean;
  linkText: string;
  href: Route;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const NavItem: React.FC<NavItemProps> = ({
  linkText,
  href,
  itemIsActive,
  setActiveItem,
}: NavItemProps) => {
  return (
    <div
      className={`${styles.navitem} ${itemIsActive && styles.navItem__active}`}
    >
      <Link href={href} passHref>
        <a onClick={() => setActiveItem(linkText)}>{linkText}</a>
      </Link>
    </div>
  );
};

export default NavItem;
