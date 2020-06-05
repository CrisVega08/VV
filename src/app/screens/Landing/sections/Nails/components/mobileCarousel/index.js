import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';

import Swiper from 'react-id-swiper';

import styles from './styles.module.scss';

function MobileCarousel({ updateSwiper, options, currentOption, swiper, updateCurrentIndex }) {
  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper,
    updateCurrentIndex,
  ]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', updateIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.off('slideChange', updateIndex);
      }
    };
  }, [swiper, updateIndex]);

  return (
    <div className={styles.container}>
      <Swiper getSwiper={updateSwiper} wrapperClass={styles.wrapperSwiper}>
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
      </Swiper>
    </div>
  );
}

export default MobileCarousel;
