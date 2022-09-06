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
      {challenges.length > 0 ? (
        challenges.map((challenge) => (
          <li key={challenge.title}>
            <Link href={challenge.href} passHref>
              <a>{challenge.title}</a>
            </Link>
          </li>
        ))
      ) : (
        <h5>No Solutions</h5>
      )}
    </ul>
  );
};

export default ChallengeList;
