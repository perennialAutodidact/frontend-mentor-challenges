import React from "react";
import styles from "styles/common/components/Navbar.module.scss";
import Link from "next/link";
import { Query, Route } from "nextjs-routes";

interface NavItemProps {
  itemIsActive: boolean;
  linkText: string;
  href: Route;
  changeActiveItem: React.MouseEventHandler;
}

const NavItem: React.FC<NavItemProps> = ({
  linkText,
  href,
  itemIsActive,
  changeActiveItem,
}: NavItemProps) => {
  return (
    <div
      className={`${styles.navitem} ${itemIsActive && styles.navItem__active}`}
      onClick={e=>console.log('target',e.target)}
    >
      <Link href={href} passHref>
        <a >{linkText}</a>
      </Link>
    </div>
  );
};

export default NavItem;
