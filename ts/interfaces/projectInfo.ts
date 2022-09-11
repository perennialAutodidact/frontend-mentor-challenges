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

export type PointOfInterest = (string | string[])
export interface DesignImages {
  desktop: DesignImage[];
  mobile: DesignImage[];
}
export interface ProjectInfoProps {
  challengeCriteria: ChallengeCriteria;
  designImages: DesignImages;
  styleGuide: StyleGuide;
  pointsOfInterest: PointOfInterest[]
}

export interface StyleGuide {
  breakpoints: Breakpoint[];
  fonts: Font[];
  colors: Color[];
}
