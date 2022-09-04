import React from 'react'
import styles from 'styles/pages/CCForm/CCForm.module.scss'
import Form from 'components/CCForm/Form'
import Layout from 'common/components/Layout'
import Card from 'components/CCForm/Card'

const CcDetailForm = () => {

    return (
        <Layout title="Credit Card Form" description='Interactive credit card form which validates inputs, displays errors and shows confirmation screen if all fields are valid.'>
            <div className={`${styles.ccFormPage} container-fluid`}>
                <div className={`${styles.gradientBgBox} `}>
                    <Card />
                </div>

                <div className={`${styles.contentBox}`}>
                    <Form />
                </div>
            </div>
        </Layout>
    )
}

export default CcDetailForm