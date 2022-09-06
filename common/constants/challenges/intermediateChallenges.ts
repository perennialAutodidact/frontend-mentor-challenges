import { Challenge, ChallengesIndexPageProps } from "ts/interfaces/challenges";
const INTERMEDIATE_CHALLENGES: Challenge[] = [];

export const INTERMEDIATE_CHALLENGES_INDEX_PAGE_DATA: ChallengesIndexPageProps =
  {
    title: "Iintermediate Challenges",
    description: "A collection of solutions to intermediate-level projects",
    challengeData: {
      newbie: [],
      junior: [],
      intermediate: INTERMEDIATE_CHALLENGES,
    },
  };
