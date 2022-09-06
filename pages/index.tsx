import type { NextPage } from "next";
import Layout from "../common/components/Layout";
import styles from "styles/pages/IndexPage.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <Layout
      title="Keegan Good - Frontend Challenges"
      description="Solutions to challenges on frontendmentor.io made by Keegan Good, Software Engineer."
    >
      <div className={`container ${styles.indexPage}`}>
        <h1>What&apos;s Going on Here?</h1>

        <p className={styles.paragraph}>
          This site is a collection of solutions created by{" "}
          <a href="https://github.com/perennialautodidact">Keegan Good</a> to
          challenges posted on{" "}
          <a href="https://www.frontendmentor.io">frontendmentor.io</a>.
        </p>
        <p className={styles.paragraph}>
          They&apos;re created using <a href="https://nextjs.org/">NextJS</a>{" "}
          and <a href="https://www.typescriptlang.org/">TypeScript</a> and
          styled from scratch with <a href="https://sass-lang.com/">Sass</a>{" "}
          using <a href="http://getskeleton.com/">Skeleton CSS</a> as a
          foundation.
        </p>

        <hr />
        <section>
          <div className="twelve-columns-small six-columns-lg">
            <h3>See the Code</h3>
            <div className={`${styles.iconSet}`}>
              <a href="https://github.com/perennialAutodidact">
                <span className={styles.icon}>
                  <AiFillGithub />
                </span>
              </a>
            </div>
          </div>
          <div className={`twelve-columns-sm six-columns-lg`}>
            <h3>Contact Keegan</h3>
            <div className={`${styles.iconSet}`}>
              <a href="https://github.com/perennialAutodidact">
                <span className={styles.icon}>
                  <AiFillGithub />
                </span>
              </a>
              <a href="https://linkedin.com/in/keegangood">
                <span className={styles.icon}>
                  <AiFillLinkedin />
                </span>
              </a>
            </div>
          </div>
        </section>

        <hr />
        <section>
          <div className="twelve-columns-small">
            <h3>Libraries Used</h3>
            <ul
              className={`twelve-columns-small six-columns-lg offset-three-lg ${styles.librariesList}`}
            >
              
              <li>NextJs</li> <span>|</span>
              <li>React</li> <span>|</span>
              <li>Sass</li> <span>|</span>
              <li>React Hook Forms</li> <span>|</span> 
              <li>Zod</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
