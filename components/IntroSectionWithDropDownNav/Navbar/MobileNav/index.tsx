import React from 'react'
import NavItems from '../NavItems'
import styles from 'styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss';
import CloseButton from './CloseButton';

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
        <CloseButton toggleMobileNav={undefined}/>
        <NavItems />
    </div>
  )
}

export default MobileNav