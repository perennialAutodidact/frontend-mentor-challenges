import React from "react";
import Layout from "common/components/Layout";
import { ChallengeCriteria, ProjectInfoProps } from "ts/interfaces/projectInfo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { projectInfo } from "components/IntroSectionWithDropDownNav/projectInfo";
import ProjectInfo from "common/components/ProjectInfo";
import desktopDesign from "components/IntroSectionWithDropDownNav/starterCode/design/desktop-design.jpg";
import mobileDesign from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-design.jpg";
import activeStates from "components/IntroSectionWithDropDownNav/starterCode/design/active-states.jpg";
import mobileMenuCollapsed from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-menu-collapsed.jpg";
import mobileMenuExpanded from "components/IntroSectionWithDropDownNav/starterCode/design/mobile-menu-expanded.jpg";
import Navbar from "components/IntroSectionWithDropDownNav/Navbar";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";

type IntroSectionWithDropdownNavProps = {
  title: string;
  description: string;
} & ProjectInfoProps;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { challengeCriteria, designImages, styleGuide } = projectInfo;

  return {
    props: {
      title: "Intro Section with Dropdown Nav",
      description:
        "A solution by Keegan Good to a junior-level challenge from frontendmentor.io.",
      challengeCriteria,
      designImages,
      styleGuide,
    },
  };
};

const IntroSectionWithDropdownNav = ({
  title,
  description,
}: IntroSectionWithDropdownNavProps) => {
  return (
    <Layout title={title} description={description}>
      <section className={`container-fluid ${styles.pageContainer}`}>
        <Navbar />
        <div></div>
      </section>
      <ProjectInfo {...projectInfo} />
    </Layout>
  );
};

export default IntroSectionWithDropdownNav;
