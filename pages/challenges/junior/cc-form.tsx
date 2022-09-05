import React, { useState } from "react";
import styles from "styles/pages/CCForm/CCForm.module.scss";
import Form from "components/CCForm/Form";
import Layout from "common/components/Layout";
import Card from "components/CCForm/Card";
import CompletionCard from "components/CCForm/CompletionCard";

const CcDetailForm = () => {
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
    </Layout>
  );
};

export default CcDetailForm;
