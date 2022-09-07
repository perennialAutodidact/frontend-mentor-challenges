import desktopDesign from "components/CCForm/starterCode/design/desktop-design.jpg";
import mobileDesign from "components/CCForm/starterCode/design/mobile-design.jpg";
import activeStates from "components/CCForm/starterCode/design/active-states.jpg";
import desktopCompleteState from "components/CCForm/starterCode/design/complete-state-desktop.jpg";
import mobileCompleteState from "components/CCForm/starterCode/design/complete-state-mobile.jpg";

import {
  StyleGuide,
  ChallengeCriteria,
  DesignImage,
  ProjectInfoProps,
} from "ts/interfaces/projectInfo";

export const challengeCriteria: ChallengeCriteria = [
  "Fill in the form and see the card details update in real-time",
  "Receive error messages when the form is submitted if:",
  [
    "Any input field is empty",
    "The card number, expiry date, or CVC fields are in the wrong format.",
  ],
  "View the optimal layout depending on their device&apos;s screen size",
  "See hover, active, and focus states for interactive elements on the page",
];

export const styleGuide: StyleGuide = {
  breakpoints: [
    { name: "Small", size: "375px" },
    { name: "Large", size: "1,440px" },
  ],
  fonts: [
    {
      name: "Space Grotesk",
      style: { fontFamily: "'Space Grotesk', sans-serif" },
    },
  ],
  colors: [
    {
      name: "Linear Gradient",
      style: {
        background:
          "linear-gradient(90deg, hsl(249, 99%, 64%) 60%, hsl(278, 93%, 30%) 80%)",
      },
    },
    {
      name: "White",
      style: {
        backgroundColor: "hsl(0, 0%, 100%)",
        border: "2px dashed darkgrey",
      },
    },
    {
      name: "Light Grayish Violet",
      style: { backgroundColor: "hsl(270, 3%, 87%)" },
    },
    {
      name: "Dark Grayish Violet",
      style: { backgroundColor: "hsl(279, 6%, 55%)" },
    },
    {
      name: "Very Dark Violet",
      style: { backgroundColor: "hsl(278, 68%, 11%)" },
    },
    { name: "Error Red", style: { backgroundColor: "hsl(0, 47%, 46%)" } },
    { name: "Indigo", style: { backgroundColor: "hsl(249, 99%, 64%)" } },
    { name: "Violet", style: { backgroundColor: "hsl(278, 93%, 30%)" } },
  ],
};

export const CcFormProjectInfo: Partial<ProjectInfoProps> = {
  challengeCriteria,
  styleGuide,
};
