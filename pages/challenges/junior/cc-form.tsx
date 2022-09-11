import React, { useState } from "react";
import styles from "styles/pages/CCForm/CCForm.module.scss";
import Form from "components/CCForm/Form";
import Layout from "common/components/Layout";
import Card from "components/CCForm/Card";
import CompletionCard from "components/CCForm/CompletionCard";
import ProjectInfo from "common/components/ProjectInfo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ProjectInfoProps } from "ts/interfaces/projectInfo";
import { CcFormProjectInfo, pointsOfInterest } from "components/CCForm/projectInfo";
import desktopDesign from "components/CCForm/starterCode/design/desktop-design.jpg";
import mobileDesign from "components/CCForm/starterCode/design/mobile-design.jpg";
import activeStates from "components/CCForm/starterCode/design/active-states.jpg";
import desktopCompleteState from "components/CCForm/starterCode/design/complete-state-desktop.jpg";
import mobileCompleteState from "components/CCForm/starterCode/design/complete-state-mobile.jpg";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { challengeCriteria, designImages, styleGuide, pointsOfInterest } = CcFormProjectInfo;

  return {
    props: {
      challengeCriteria,
      designImages,
      styleGuide,
      pointsOfInterest
    },
  };
};

const CcDetailForm = (projectInfo: ProjectInfoProps) => {
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const toggleComplete = (e: React.FormEvent<any>) => {
    setFormComplete((formComplete) => !formComplete);
  };
  return (
    <Layout
      title="Credit Card Form"
      description="Interactive credit card form which validates inputs, displays errors and shows confirmation screen if all fields are valid."
    >
      <div className={`${styles.ccFormPage} container-fluid`}>
        <div className={`${styles.gradientBgBox} `}>
          <Card />
        </div>

        <div className={`${styles.contentBox}`}>
          {!formComplete ? (
            <Form toggleComplete={toggleComplete} />
          ) : (
            <CompletionCard toggleComplete={toggleComplete} />
          )}
        </div>
      </div>
      <ProjectInfo
        {...projectInfo}
      />
    </Layout>
  );
};

export default CcDetailForm;
