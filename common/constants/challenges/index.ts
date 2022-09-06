import { NEWBIE_CHALLENGES_INDEX_PAGE_DATA } from "common/constants/challenges/newbieChallenges";
import { JUNIOR_CHALLENGES_INDEX_PAGE_DATA } from "common/constants/challenges/juniorChallenges";
import { INTERMEDIATE_CHALLENGES_INDEX_PAGE_DATA } from "common/constants/challenges/intermediateChallenges";

import { ChallengeData, ChallengeLevel } from "ts/interfaces/challenges";

interface ChallengeIndexPageData {
  title: string;
  description: string;
  challengeData: ChallengeData;
}

type AllChallengeIndexPageProps = {
  [key in ChallengeLevel]: ChallengeIndexPageData;
};

export const CHALLENGES_INDEX_PAGE_DATA: ChallengeIndexPageData = {
  title: "Challenge Solutions",
  description:
    "A collection of solutions by Keegan Good to challenges on frontendmentor.io",
  challengeData: {
    newbie: NEWBIE_CHALLENGES_INDEX_PAGE_DATA.challengeData.newbie,
    junior: JUNIOR_CHALLENGES_INDEX_PAGE_DATA.challengeData.junior,
    intermediate:
      INTERMEDIATE_CHALLENGES_INDEX_PAGE_DATA.challengeData.intermediate,
  },
};

export const ALL_CHALLENGE_INDEX_PAGE_DATA: AllChallengeIndexPageProps = {
  newbie: NEWBIE_CHALLENGES_INDEX_PAGE_DATA,
  junior: JUNIOR_CHALLENGES_INDEX_PAGE_DATA,
  intermediate: INTERMEDIATE_CHALLENGES_INDEX_PAGE_DATA,
};
