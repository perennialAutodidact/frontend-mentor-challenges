import { StaticImageData } from "next/image";

export type IntroSectionNavItem = {
  text: string;
  dropdown?: IntroSectionNavDropdownItem[];
};

export type IntroSectionNavDropdownItem = {
  text: string;
  icon?: StaticImageData;
};
