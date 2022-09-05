import React from "react";

import styles from "styles/pages/CCForm/CCForm.module.scss";

interface CompletionCardProps {
    toggleComplete: React.FormEventHandler
}

const CompletionCard = ({toggleComplete}: CompletionCardProps) => {
  return (
    <div className={`container ${styles.completionCard}`}>
      <div className={`row`}>
        <div className={`${styles.completionHeader}`}>
          <div className={styles.completionIcon}></div>
        </div>
        <div className={styles.thankYou}>THANK YOU!</div>
        <div className={styles.completionMessage}>
          We&apos;ve added your card details.
        </div>
        <button className={`${styles.formButton} twelve columns`} onClick={toggleComplete}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CompletionCard;
