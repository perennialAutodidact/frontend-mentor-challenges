import React from "react";
import styles from "styles/common/components/ProjectInfo.module.scss";
import Image from "next/image";
import {
  DESIGN_IMAGES,
  STYLE_GUIDE,
  CHALLENGE_CRITERIA,
} from "components/CCForm/projectInfo";
import { BsCheckCircle } from "react-icons/bs";
const ProjectInfo = () => {
  return (
    <section className={`container-fluid ${styles.projectInfoSection}`}>
      <div className="twelve-columns-sm eight-columns-lg offset-two-lg">
        <h1>The Challenge</h1>
        <h4>Users should be able to</h4>

        <ul>
          {CHALLENGE_CRITERIA.map((criterion) =>
            Array.isArray(criterion) ? (
              <ul>
                {criterion.map((item, i) => (
                  <li key={`item-${i}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <li>{criterion}</li>
            )
          )}
        </ul>
      </div>

      <div className="twelve-columns-sm eight-columns-lg offset-two-lg">
        <h1 className={`${styles.textRight}`}>The Design</h1>
        <div className={`${styles.designImages}`}>
          {DESIGN_IMAGES.map((image) => (
            <div className={`${styles.designImage}`} key={image.title}>
              <h5 className={styles.textRight}>{image.title}</h5>
              <Image
                src={image.file.src}
                alt={image.title}
                width={image.file.width}
                height={image.file.height}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="twelve-columns-sm eight-columns-lg offset-two-lg">
        <h1>Style Guide</h1>

        <div className={styles.styleSections}>
          <div className={`${styles.styleSection}`}>
            <h4>Breakpoints</h4>
            <ul>
              {STYLE_GUIDE.breakpoints.map((breakpoint) => (
                <li key={breakpoint.size}>
                  {breakpoint.name} - {breakpoint.size}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.styleSection}`}>
            <h4 className={""}>Fonts</h4>
            <ul>
              {STYLE_GUIDE.fonts.map((font) => (
                <li key={font.name} style={font.style}>
                  <h5>{font.name}</h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis, unde.
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.styleSection}>
            <h4>Colors</h4>
            <div className={styles.colorSwatches}>
              {STYLE_GUIDE.colors.map((color) => (
                <div className={styles.colorSwatch} key={color.name}>
                  <span>{color.name}</span>
                  <span className={styles.box} style={color.style}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
