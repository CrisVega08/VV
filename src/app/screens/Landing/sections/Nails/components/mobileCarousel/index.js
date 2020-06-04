import React from 'react';
import cn from 'classnames';

import Swiper from 'react-id-swiper';

import styles from './styles.module.scss';

function MobileCarousel({ updateSwiper, options, currentOption }) {
  return (
    <div className={styles.container}>
      <Swiper
        getSwiper={updateSwiper}
        wrapperClass={styles.wrapperSwiper}
        // slideClass={styles.cardSelected}
      >
        {options.length &&
          options.map(option => (
            <div>
              <img
                className={cn(styles.card, {
                  [styles.selectedCard]: currentOption === option.index,
                })}
                key={option._id}
                src={option.picture}
                alt={option._id}
              />
            </div>
          ))}
      </Swiper>
    </div>
  );
}

export default MobileCarousel;
