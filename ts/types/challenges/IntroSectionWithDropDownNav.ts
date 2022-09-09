import { StaticImageData } from "next/image";

export type IntroSectionNavItem = {
  text: string;
  dropdown: IntroSectionDropdownItem[];
};

export type IntroSectionDropdownItem = {
  text: string;
  icon?: StaticImageData;
};
