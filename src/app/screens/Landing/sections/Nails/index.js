import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from '../../../../hooks/useWindowWidth';
import { RESPONSIVE } from '../../../../constants';

// import Swiper from 'react-id-swiper';
import DesktopCarousel from './components/desktopCarousel';
import MobileCarousel from './components/mobileCarousel';

import styles from './styles.module.scss';
import data from './constants';

function Carousel() {
  const [swiper, updateSwiper] = useState(null);
  const [options] = useState(data.properties);
  let [currentOption, setCurrentOption] = useState(0);

  const prevOption = useCallback(() => setCurrentOption(currentOption - 1), [currentOption]);

  const nextOption = useCallback(() => setCurrentOption(currentOption + 1), [currentOption]);

  const gotoOption = index => setCurrentOption(index);

  const isMobile = RESPONSIVE > useWindowWidth();

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      nextOption();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      prevOption();
    }
  };

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
    gotoOption(index);
  };

  return (
    <section className={`slide ${styles.carousel}`} id="nails">
      <div className={styles.carouselActions}>
        <div className={styles.carouselBtnsContainer}>
          <button
            className="carousel-btn"
            onClick={isMobile ? goPrev : prevOption}
            disabled={currentOption === 0}
          >
            <FontAwesomeIcon icon={faAngleLeft} color="white" />
          </button>
          <button
            className="carousel-btn"
            onClick={isMobile ? goNext : nextOption}
            disabled={currentOption === options.length - 1}
          >
            <FontAwesomeIcon icon={faAngleRight} color="white" />
          </button>
        </div>
        <h3 className={`normal-title ${styles.carouselTitle}`}>Manicure & Pedicure</h3>
        <p className={`normal-text ${styles.carouselMessage}`}>
          Embellece tus manos y pies, con nuestros diseños y estilo moderno utilizando técnicas
          tradicionales.
        </p>
        <div className={styles.dotsContainer}>
          {options.length &&
            options.map((option, index) => (
              <button
                key={option._id}
                className={cn(styles.dots, { [styles.activeDot]: index === currentOption })}
                onClick={() => (isMobile ? goToMobile(index) : gotoOption(index))}
              />
            ))}
        </div>
      </div>
      {isMobile ? (
        <MobileCarousel
          updateSwiper={updateSwiper}
          swiper={swiper}
          currentOption={currentOption}
          options={options}
          updateCurrentIndex={setCurrentOption}
        />
      ) : (
        <DesktopCarousel currentOption={currentOption} options={options} />
      )}
    </section>
  );
}

export default Carousel;
