import { Route, Query } from "nextjs-routes";

export type ChallengeLevel = "newbie" | "junior" | "intermediate";

export type ChallengeData = {
  [key in ChallengeLevel]: Challenge[];
};

export interface ChallengesIndexPageProps {
  title: string;
  description: string;
  challengeData: ChallengeData;
}

export interface Challenge {
  title: string;
  href: {
    pathname: Route["pathname"];
    query?: Query;
  };
}
