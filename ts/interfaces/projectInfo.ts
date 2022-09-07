import { StaticImageData } from "next/image";

export type ChallengeCriteria = (string | string[])[];

export interface DesignImage {
  title: string;
  file: StaticImageData;
}

export interface Breakpoint {
  name: string;
  size: string;
}

export interface Font {
  name: string;
  style: {
    [key in string]: string;
  };
}

export interface Color {
  name: string;
  style: {
    [key in string]: string;
  };
}

export interface ProjectInfoProps {
  challengeCriteria: ChallengeCriteria;
  designImages: DesignImage[];
  styleGuide: StyleGuide;
}

export interface StyleGuide {
  breakpoints: Breakpoint[];
  fonts: Font[];
  colors: Color[];
}
