import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cn from 'classnames';

import Swiper from 'react-id-swiper';

import fadeTransition from '../../fade.module.scss';
import styles from './styles.module.scss';

function MobileSpa({ options, currentOption, updateCurrentIndex }) {
  const [swiper, updateSwiper] = useState(null);
  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper,
    updateCurrentIndex,
  ]);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

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

  const goToMobile = index => {
    if (index > currentOption) {
      for (let i = currentOption; i < index; i++) {
        swiper.slideNext();
      }
    } else if (index < currentOption) {
      for (let i = index; i < currentOption; i++) {
        swiper.slidePrev();
      }
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={`carousel-btn ${styles.btnLeft}`}
        onClick={goPrev}
        disabled={currentOption === 0}
      >
        <FontAwesomeIcon icon={faAngleLeft} color="white" />
      </button>
      <button
        className={`carousel-btn ${styles.btnRight}`}
        onClick={goNext}
        disabled={currentOption === options.length - 1}
      >
        <FontAwesomeIcon icon={faAngleRight} color="white" />
      </button>

      <h3 className={`normal-title ${styles.title}`}>{options[currentOption].title}</h3>
      <div className={styles.carousel}>
        <Swiper getSwiper={updateSwiper} wrapperClass={styles.wrapperSwiper}>
          {options.length &&
            options.map(option => (
              <img
                className={cn(styles.card, {
                  [styles.selectedCard]: currentOption === option.index,
                })}
                key={option._id}
                src={option.img}
                alt={option.alt}
              />
            ))}
        </Swiper>
      </div>
      <div className={styles.dotsContainer}>
        {options.length &&
          options.map((option, index) => (
            <button
              key={option._id}
              className={cn(styles.dots, { [styles.activeDot]: index === currentOption })}
              onClick={() => goToMobile(index)}
            />
          ))}
      </div>
      <TransitionGroup>
        <CSSTransition key={options[currentOption]._id} timeout={1500} classNames={fadeTransition}>
          <p
            className={`normal-text ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: options[currentOption].message }}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default MobileSpa;
