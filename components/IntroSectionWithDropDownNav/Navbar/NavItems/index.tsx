import React from "react";
import iconTodo from "components/IntroSectionWithDropDownNav/starterCode/images/icon-todo.svg";
import iconCalendar from "components/IntroSectionWithDropDownNav/starterCode/images/icon-calendar.svg";
import iconReminders from "components/IntroSectionWithDropDownNav/starterCode/images/icon-reminders.svg";
import iconPlanning from "components/IntroSectionWithDropDownNav/starterCode/images/icon-planning.svg";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import NavItem from "./NavItem";
import { IntroSectionNavItem } from "ts/types/challenges/IntroSectionWithDropDownNav";
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
  },
  {
    text: "Company",
    dropdown: [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
  },
  {
    text: "Careers",
    dropdown: [],
  },
  { text: "About", dropdown: [] },
];

export default NavItems;
