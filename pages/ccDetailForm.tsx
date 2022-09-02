import React from 'react'
import styles from '../styles/ccDetailForm.module.scss'
import Form from '../components/ccForm/Form'
import Layout from '../common/components/Layout'

const CcDetailForm = () => {

    return (
<Layout title="Credit Card Form" description='Interactive credit card form which validates inputs, displays errors and shows confirmation screen if all fields are valid.'>
    <div className={styles.ccFormPage}>
        <div className={styles.gradientBgBox}>
        </div>

        <div className={styles.contentBox}>
            <Form />            
        </div>
    </div>
</Layout>
  )
}

export default CcDetailForm