import React from "react";
import { Challenge } from "ts/interfaces/challenges";
import styles from "styles/pages/challenges/IndexPage.module.scss";
import Link from "next/link";

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList = ({ challenges }: ChallengeListProps) => {
  return (
    <ul className={`${styles.challengeList}`}>
      {challenges &&
        challenges.map((challenge) => (
          <li>
            <Link href={challenge.href} passHref>
              <a>{challenge.title}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ChallengeList;
