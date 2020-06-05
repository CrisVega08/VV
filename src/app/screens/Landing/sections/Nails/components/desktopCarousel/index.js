import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

function DesktopCarousel({ options, currentOption }) {
  return (
    <div className={styles.seletedOption}>
      <div className={`${styles.cardsSlider} ${styles[`activeSlide${currentOption}`]}`}>
        <div
          className={styles.cardsSliderWrapper}
          style={{
            transform: `translateX(-${currentOption * (100 / options.length)}%)`,
          }}
        >
          {options.length &&
            options.map(option => (
              <img
                className={cn(styles.card, {
                  [styles.selectedCard]: currentOption === option.index,
                })}
                key={option._id}
                src={option.picture}
                alt={option._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default DesktopCarousel;
