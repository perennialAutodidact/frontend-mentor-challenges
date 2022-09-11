import React from "react";
import styles from "styles/common/components/ProjectInfo.module.scss";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { DesignImages, ProjectInfoProps } from "ts/interfaces/projectInfo";
import { titleize } from "common/utils/helpers";

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  challengeCriteria,
  designImages,
  styleGuide,
  pointsOfInterest,
}: ProjectInfoProps) => {
  return (
    <section className={`container-fluid ${styles.projectInfoSection}`}>
      <div
        className={`${styles.infoSection} twelve-columns-sm eight-columns-lg offset-two-lg`}
      >
        <h1 className={styles.projectInfo__header}>The Challenge</h1>
        <h4>Users should be able to</h4>

        <ul>
          {challengeCriteria.map((criterion, i) =>
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

      <div
        className={`${styles.infoSection} twelve-columns-sm eight-columns-lg offset-two-lg`}
      >
        <h1 className={`${styles.projectInfo__header}`}>The Design</h1>
        {Object.keys(designImages).map((imageType) => (
          <>
            <h3 className={`${styles.projectInfo__header}`}>
              {titleize(imageType)}
            </h3>
            <div
              className={`${styles.designImages} twelve-columns-sm`}
              key={`${imageType} images`}
            >
              {designImages[imageType as keyof DesignImages].map((image) => (
                <div
                  className={`${styles.designImage} ${
                    styles[`designImage__${imageType}`]
                  } twelve-columns-sm six-columns-lg`}
                  key={image.title}
                >
                  <h5>{image.title}</h5>
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
          </>
        ))}
      </div>

      <div
        className={`${styles.infoSection} twelve-columns-sm eight-columns-lg offset-two-lg`}
      >
        <h1 className={styles.projectInfo__header}>Style Guide</h1>

        <div className={`${styles.styleSections} twelve columns`}>
          <div
            className={`${styles.styleSection} twelve-columns-sm four-columns-lg`}
          >
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

          <div
            className={`${styles.styleSection} twelve-columns-sm four-columns-lg`}
          >
            <h4>Breakpoints</h4>
            <ul>
              {styleGuide.breakpoints.map((breakpoint) => (
                <li key={breakpoint.name}>
                  {breakpoint.name} - {breakpoint.size}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.styleSection} twelve-columns-sm four-columns-lg`}
          >
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
        </div>
      </div>
      <div
        className={`${styles.infoSection} twelve-columns-sm eight-columns-lg offset-two-lg`}
      >
        <ul className="twelve-columns-sm six-columns-lg offset-three-lg">
        <h1 className={styles.projectInfo__header}>Points of Interest</h1>
          {pointsOfInterest.map((pointOfInterest) =>
            Array.isArray(pointOfInterest) ? (
              <ul>
                {pointOfInterest.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            ) : (
              <li key={pointOfInterest}>{pointOfInterest}</li>
            )
          )}
        </ul>
      </div>

    </section>
  );
};

export default ProjectInfo;
