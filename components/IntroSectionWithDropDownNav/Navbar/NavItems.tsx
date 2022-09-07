import React from "react";
import iconTodo from "../starterCode/images/icon-todo.svg";
import iconCalendar from "../starterCode/images/icon-calendar.svg";
import iconReminders from "../starterCode/images/icon-reminders.svg";
import iconPlanning from "../starterCode/images/icon-planning.svg";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import NavItem from "./NavItem";
import { IntroSectionNavItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
import AuthLinks from "./AuthLinks";

const NavItems = () => {
  return (
    <div className={styles.navItems}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem {...navItem} key={navItem.text} />
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
  },
  {
    text: "Company",
    dropdown: [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
  },
  {
    text: "Careers",
  },
  { text: "About" },
];

export default NavItems;
