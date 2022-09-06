import { Challenge, ChallengesIndexPageProps } from "ts/interfaces/challenges";

const JUNIOR_CHALLENGES: Challenge[] = [
  {
    title: "Credit Card Detail Form",
    href: { pathname: "/challenges/junior/cc-form" },
  },
  {
    title: "Intro Page with Dropdown Nav",
    href: { pathname: "/challenges/junior/intro-section-with-dropdown-nav" },
  },
];

export const JUNIOR_CHALLENGES_INDEX_PAGE_DATA: ChallengesIndexPageProps = {
  title: "Junior Challenges",
  description: "A collection of solutions to junior-level projects",
  challengeData: { newbie: [], junior: JUNIOR_CHALLENGES, intermediate: [] },
};
