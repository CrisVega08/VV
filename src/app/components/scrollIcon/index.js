import React from 'react';

import scrollIcon from './assets/mouse.png';
import styles from './styles.module.scss';

function ScrollIcon() {
  return (
    <div className={styles.scrollElement}>
      <img className={styles.scrollIcon} src={scrollIcon} alt="scroll-icon" />
      <span className={styles.scrollText}>Scroll</span>
    </div>
  );
}

export default ScrollIcon;
