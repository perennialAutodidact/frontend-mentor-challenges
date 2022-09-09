import React from "react";
import {v4 as uuidv4} from 'uuid'
import iconTodo from "components/IntroSectionWithDropDownNav/starterCode/images/icon-todo.svg";
import iconCalendar from "components/IntroSectionWithDropDownNav/starterCode/images/icon-calendar.svg";
import iconReminders from "components/IntroSectionWithDropDownNav/starterCode/images/icon-reminders.svg";
import iconPlanning from "components/IntroSectionWithDropDownNav/starterCode/images/icon-planning.svg";
import styles from "styles/pages/IntroSectionWithDropdownNav/Navbar/Mobile/Nav.module.scss";
import NavItem from "./NavItem";
import { IntroSectionNavItem } from "ts/IntroSectionWithDropdownNav";
import AuthLinks from "./AuthLinks";

interface NavItemsProps {
  toggleMobileNav?: React.MouseEventHandler | null;
}

const NavItems = ({ toggleMobileNav }: NavItemsProps) => {
  return (
    <div className={styles.navItems}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem
          {...navItem}
          key={navItem.text}
          toggleMobileNav={toggleMobileNav || null}
        />
      ))}
      <AuthLinks />
    </div>
  );
};

const NAV_ITEMS: IntroSectionNavItem[] = [
  {
    text: "Features",
    dropdown: [
      { text: "Todo List", icon: iconTodo },
      { text: "Calendar", icon: iconCalendar },
      { text: "Reminders", icon: iconReminders },
      { text: "Planning", icon: iconPlanning },
    ],
    uuid: uuidv4(),
  },
  {
    text: "Company",
    dropdown: [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
    uuid: uuidv4(),
  },
  {
    text: "Careers",
    dropdown: [],
    uuid: uuidv4(),
  },
  { text: "About", dropdown: [], uuid: uuidv4() },
];

export default NavItems;
