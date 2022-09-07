import React from "react";
import styles from "styles/common/components/ProjectInfo.module.scss";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { ProjectInfoProps } from "ts/interfaces/projectInfo";

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  challengeCriteria,
  designImages,
  styleGuide,
}: ProjectInfoProps) => {
  return (
    <section className={`container-fluid ${styles.projectInfoSection}`}>
      <div className="twelve-columns-sm eight-columns-lg offset-two-lg">
        <h1>The Challenge</h1>
        <h4>Users should be able to</h4>

        <ul>
          {challengeCriteria.map((criterion,i) =>
            Array.isArray(criterion) ? (
              <ul>
                {criterion.map((subcriterion, j) => (
                  <li key={`subcriterion-${j}`}>{subcriterion}</li>
                ))}
              </ul>
            ) : (
              <li key={`criterion-${i}`}>{criterion}</li>
            )
          )}
        </ul>
      </div>

      <div className="twelve-columns-sm eight-columns-lg offset-two-lg">
        <h1 className={`${styles.textRight}`}>The Design</h1>
        <div className={`${styles.designImages}`}>
          {designImages.map((image) => (
            <div className={`${styles.designImage}`} key={image.title}>
              <h5 className={styles.textRight}>{image.title}</h5>
              <Image
                src={image.file.src}
                alt={image.title}
                height={image.file.height}
                width={image.file.width}
                blurDataURL={image.file.blurDataURL}
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
              {styleGuide.breakpoints.map((breakpoint) => (
                <li key={breakpoint.name}>
                  {breakpoint.name} - {breakpoint.size}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.styleSection}`}>
            <h4 className={""}>Fonts</h4>
            <ul>
              {styleGuide.fonts.map((font) => (
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
              {styleGuide.colors.map((color) => (
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
