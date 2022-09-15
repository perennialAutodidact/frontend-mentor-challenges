import {
  ChallengeCriteria,
  DesignImages,
  PointOfInterest,
  ProjectInfoProps,
  StyleGuide,
} from "ts/interfaces/projectInfo";
import desktopDesign from "components/ProductPreviewCard/images/desktop-design.jpg";
import activeStates from "components/ProductPreviewCard/images/active-states.jpg";
import mobileDesign from "components/ProductPreviewCard/images/mobile-design.jpg";

export const challengeCriteria: ChallengeCriteria = [
  "View the optimal layout depending on their device's screen size",
  "See hover and focus states for interactive elements",
];

export const designImages: DesignImages = {
  desktop: [
    { title: "Desktop Design", file: desktopDesign },
    { title: "Active States", file: activeStates },
  ],
  mobile: [{ title: "Mobile Design", file: mobileDesign }],
};

export const styleGuide: StyleGuide = {
  breakpoints: [
    { name: "Small", size: "375px" },
    { name: "Large", size: "1,440px" },
  ],
  fonts: [
    { name: "Montserrat", style: { fontFamily: "'Montserrat', sans-serif" } },
    { name: "Fraunces", style: { fontFamily: "'Fraunces', serif" } },
  ],
  colors: [
    {
      name: "Dark Cyan",
      style: {
        backgroundColor: "hsl(158, 36%, 37%)",
      },
    },
    {
      name: "Cream",
      style: {
        backgroundColor: "hsl(30, 38%, 92%)",
        border: "2px dashed darkgrey",
      },
    },
    {
      name: "Very Dark Blue",
      style: { backgroundColor: "hsl(212, 21%, 14%)" },
    },
    {
      name: "Dark Grayish Blue",
      style: { backgroundColor: "hsl(228, 12%, 48%)" },
    },
    {
      name: "White",
      style: {
        backgroundColor: "hsl(0, 0%, 100%)",
        border: "2px dashed darkgrey",
      },
    },
  ],
};

export const pointsOfInterest: PointOfInterest[] = [
"Responsive design",

];

export const projectInfo: ProjectInfoProps = {
  challengeCriteria,
  designImages,
  styleGuide,
  pointsOfInterest,
};
