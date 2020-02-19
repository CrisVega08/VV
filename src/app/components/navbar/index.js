import React, { useState } from 'react';
import cn from 'classnames';

import useWindowWidth from '../../hooks/useWindowWidth';
import { RESPONSIVE } from '../../constants';

import { ReactComponent as BurgerIcon } from './assets/burger.svg';
import { SECTIONS } from './constants';
import veroLogo from './assets/vv.png'

import styles from './styles.module.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isMobile = RESPONSIVE > useWindowWidth();
  return (
    <nav className={cn(styles.navbar, {[styles.navbarMobile] : isMobile, [styles.navbarClicked] : isOpen})}>
      <img className={styles.logo} src={veroLogo} alt="vero-vega"/>
      {isMobile ? (
      <>
        <BurgerIcon className={styles.burgerIcon} onClick={toggle} />
        {isOpen && <ul className={styles.navbarToggle}>
          {SECTIONS.map(({name, id}) => (
            <li className={`${styles.section} ${styles.sectionToggle}`} key={id}>{name}</li>
          ))}
        </ul>}
      </>
      ) : (
      <ul className={styles.mainNav}>
        {SECTIONS.map(({name, id}) => (
          <li className={styles.section} key={id}>{name}</li>
        ))}
      </ul>
    )}
    </nav>
  )
}

export default Navbar;
