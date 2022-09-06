import React from "react";
import styles from "styles/pages/challenges/IndexPage.module.scss";
import Layout from "common/components/Layout";
import { titleize } from "common/utils/helpers";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ChallengeData, ChallengeLevel } from "ts/interfaces/challenges";
import {
  CHALLENGES_INDEX_PAGE_DATA,
  ALL_CHALLENGE_INDEX_PAGE_DATA,
} from "common/constants/challenges";
import ChallengeList from "components/ChallengesIndex/ChallengeList";

interface ChallengesIndexPageProps {
  title: string;
  description: string;
  challengeData: ChallengeData;
  challengeLevel: ChallengeLevel;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  let props: ChallengesIndexPageProps | undefined = undefined;
  let challengeLevel: ChallengeLevel;

  if (!query.challengeLevel) {
    props = { ...CHALLENGES_INDEX_PAGE_DATA, challengeLevel: "all" };
  } else {
    challengeLevel = query.challengeLevel![0] as ChallengeLevel;

    if (challengeLevel && challengeLevel in ALL_CHALLENGE_INDEX_PAGE_DATA) {
      props = {
        ...ALL_CHALLENGE_INDEX_PAGE_DATA[challengeLevel],
        challengeLevel: challengeLevel as ChallengeLevel,
      };
    }
  }
  if (props) {
    return {
      props,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const ChallengesIndexPage = ({
  title,
  description,
  challengeData,
  challengeLevel,
}: ChallengesIndexPageProps) => {
  console.log(challengeData);
  const challengeKeys = Object.keys(challengeData) as ChallengeLevel[];
  const showingAllChallenges = Object.keys(challengeData).length > 1;

  return (
    <Layout title={title} description={description}>
      <div className={`container ${styles.indexPage}`}>
        <h1>{title}</h1>
        <div className={`row`}>
          {challengeLevel === "all" ? (
            challengeKeys.map((key) => (
              <div className="twelve-columns-sm three-columns-lg">
                <h3>{titleize(key)}</h3>
                <ChallengeList
                  challenges={challengeData[key as ChallengeLevel]}
                />
              </div>
            ))
          ) : (
            <div className="twelve columns">
              <ChallengeList challenges={challengeData[challengeLevel]} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ChallengesIndexPage;
