import React, { useReducer, useRef } from "react";
import Image from "next/image";
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
import heroImageMobile from "components/IntroSectionWithDropDownNav/starterCode/images/image-hero-mobile.png"
import heroImageDesktop from "components/IntroSectionWithDropDownNav/starterCode/images/image-hero-desktop.png"
import DesktopNav from "components/IntroSectionWithDropDownNav/components/Navbar/Desktop";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";
import MobileNav from "components/IntroSectionWithDropDownNav/components/Navbar/Mobile";
import { useHandleClickOutside } from "common/hooks/useHandleClickOutside";
import {
  resetDropdowns,
  closeMobileNav,
} from "components/IntroSectionWithDropDownNav/store/actions";
import ClientLogos from "components/IntroSectionWithDropDownNav/components/ClientLogos";
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

  useHandleClickOutside([desktopNavbarRef, hamburgerRef, sideNavRef], () => {
    dispatch(resetDropdowns());
    dispatch(closeMobileNav());
  });

  return (
    <NavbarContext.Provider value={[state, dispatch]}>
      <Layout title={title} description={description}>
        <section className={`container-fluid ${styles.pageContainer}`}>
          <DesktopNav navbarRef={desktopNavbarRef} />
          <MobileNav
            navbarRef={mobileNavbarRef}
            hamburgerRef={hamburgerRef}
            sideNavRef={sideNavRef}
          />
          <div className={`row ${styles.pageContentContainer}`}>
            <div
              className={`twelve-columns-sm five-columns-lg ${styles.textContent}`}
            >
              <div className={styles.pageContent}>
                <div className={styles.textContentInner}>
                  <div>
                    <h1 className={styles.contentHeader}>
                      Make<div>Remote Work</div>
                    </h1>

                    <p className={styles.contentParagraph}>
                      Get your team in sync, no matter your location. Streamline
                      processes, create team rituals and watch productivity
                      soar.
                    </p>
                  </div>

                  <div className={styles.ctaButton}>Learn more</div>
                <ClientLogos />
                </div>
              </div>
            </div>
            <div className={`twelve-columns-sm five-columns-lg ${styles.heroImageColumn}`}>
                <div className={styles.heroImageMobile}>
                  <Image src={heroImageMobile.src} alt={'Hero Image'} height={heroImageMobile.height} width={heroImageMobile.width} blurDataURL={heroImageMobile.blurDataURL}/>
                </div>
                <div className={styles.heroImageDesktop}>
                  <Image src={heroImageDesktop.src} alt={'Hero Image'} height={heroImageDesktop.height} width={heroImageDesktop.width} blurDataURL={heroImageDesktop.blurDataURL}/>
              </div>
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
  const { challengeCriteria, designImages, styleGuide, pointsOfInterest } = projectInfo;

  return {
    props: {
      title: "Intro Section with Dropdown Nav",
      description:
        "A solution by Keegan Good to a junior-level challenge from frontendmentor.io.",
      challengeCriteria,
      designImages,
      styleGuide,
      pointsOfInterest
    },
  };
};
export default IntroSectionWithDropdownNav;
