import React, { useReducer, useRef } from "react";
import {
  NavbarContext,
  initialState,
} from "components/IntroSectionWithDropDownNav/store";
import { navbarReducer } from "components/IntroSectionWithDropDownNav/store/reducer";
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
import DesktopNav from "components/IntroSectionWithDropDownNav/Navbar/Desktop";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import MobileNav from "components/IntroSectionWithDropDownNav/Navbar/Mobile";
import { useHandleClickOutside } from "common/hooks/useHandleClickOutside";
import {
  resetDropdowns,
  closeMobileNav,
} from "components/IntroSectionWithDropDownNav/store/actions";

type IntroSectionWithDropdownNavProps = {
  title: string;
  description: string;
} & ProjectInfoProps;

const IntroSectionWithDropdownNav = ({
  title,
  description,
}: IntroSectionWithDropdownNavProps) => {
  const [state, dispatch] = useReducer(navbarReducer, initialState);

  const desktopNavbarRef = useRef(null);
  const mobileNavbarRef = useRef(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const sideNavRef = useRef<HTMLDivElement>(null);

  useHandleClickOutside(
    [desktopNavbarRef, hamburgerRef, sideNavRef],
    () => {
      dispatch(resetDropdowns());
      dispatch(closeMobileNav());
    }
  );

  return (
    <NavbarContext.Provider value={[state, dispatch]}>
      <Layout title={title} description={description}>
        <section className={`container-fluid ${styles.pageContainer}`}>
          <DesktopNav navbarRef={desktopNavbarRef} />
          <MobileNav navbarRef={mobileNavbarRef} hamburgerRef={hamburgerRef} sideNavRef={sideNavRef}/>
          <div className={`row ${styles.pageContentContainer}`}>
            <div
              className={`twelve-columns-small six-columns-lg offset-one-lg ${styles.pageContent}`}
            >
              <h1>Make Remote Work</h1>

              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals and watch productivity soar.
              </p>

              <button>Learn more</button>
            </div>
            <div
              className={`twelve-columns-small four-columns-lg ${styles.heroImageContainer}`}
            >
              <div className={`${styles.heroImage}`}>{/* Hero Image */}</div>
            </div>
          </div>
        </section>
        <ProjectInfo {...projectInfo} />
      </Layout>
    </NavbarContext.Provider>
  );
};

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
export default IntroSectionWithDropdownNav;
