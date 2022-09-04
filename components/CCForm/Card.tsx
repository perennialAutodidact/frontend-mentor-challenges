import React from 'react'
import styles from 'styles/pages/CCForm/CCForm.module.scss'
const Card = () => {
    return (
        <div className={`${styles.card} ${styles.cardBack}`}>
            <div className={styles.cvc}>000</div>
            <div className={`${styles.card} ${styles.cardFront}`}>
                <div className={styles.cardLogo}></div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardNumber}>0000 0000 0000 0000</div>
                    <div className={styles.bottomInfo}>
                        <div className={styles.cardholderName}>MANISH PATEL</div>
                        <div className={styles.expireDate}>00/00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card