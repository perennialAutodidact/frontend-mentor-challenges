import {
  ChallengeCriteria,
  DesignImage,
  DesignImages,
  PointOfInterest,
  ProjectInfoProps,
  StyleGuide,
} from "ts/interfaces/projectInfo";
import desktopDesign from "components/IntroSectionWithDropDownNav/starterCode/design/desktop-design.jpg";
import mobileDesign from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-design.jpg";
import activeStates from "components/IntroSectionWithDropDownNav/starterCode/design/active-states.jpg";
import mobileMenuCollapsed from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-menu-collapsed.jpg";
import mobileMenuExpanded from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-menu-expanded.jpg";

export const challengeCriteria: ChallengeCriteria = [
  "View the relevant dropdown menus on desktop and mobile when interacting with the navigation links",
  "View the optimal layout for the content depending on their device's screen size",
  "See hover states for all interactive elements on the page",
];

export const designImages: DesignImages = {
  desktop: [
    { title: "Desktop Design", file: desktopDesign },
    { title: "Active States", file: activeStates },
  ],
  mobile: [
    { title: "Mobile Design", file: mobileDesign },

    { title: "Mobile Menu Expanded", file: mobileMenuExpanded },
    { title: "Mobile Menu Collapsed", file: mobileMenuCollapsed },
  ],
};

export const styleGuide: StyleGuide = {
  breakpoints: [
    { name: "Small", size: "375px" },
    { name: "Large", size: "1,440px" },
  ],
  fonts: [
    { name: "Epilogue", style: { fontFamily: "'Epilogue', sans-serif" } },
  ],
  colors: [
    {
      name: "White",
      style: {
        backgroundColor: "hsl(0, 0%, 98%)",
        border: "2px dashed darkgrey",
      },
    },
    { name: "Gray", style: { backgroundColor: "hsl(0, 0%, 41%" } },
    { name: "Black", style: { backgroundColor: "hsl(0, 0%, 8%" } },
  ],
};

export const pointsOfInterest: PointOfInterest[] = [
  "React useContext and useReducer hooks for managing navigation menu state.",
  "Custom hooks for:",
  [
    "Opening and closing mobile navigation menu",
    " Opening and closing navigation dropdowns",
    "Detecting clicks outside navigation menus",
  ],
  "GSAP animations",  
];

export const projectInfo: ProjectInfoProps = {
  challengeCriteria,
  designImages,
  styleGuide,
  pointsOfInterest,
};
