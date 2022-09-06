import { Challenge, ChallengesIndexPageProps } from "ts/interfaces/challenges";
export const NEWBIE_CHALLENGES: Challenge[] = [];

export const NEWBIE_CHALLENGES_INDEX_PAGE_DATA: ChallengesIndexPageProps = {
  title: "Newbie Challenges",
  description: "A collection of solutions to newbie-level projects",
  challengeData: { newbie: NEWBIE_CHALLENGES, junior: [], intermediate: [] },
};
