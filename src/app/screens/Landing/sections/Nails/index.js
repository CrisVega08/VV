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
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className={`slide ${styles.carousel}`} id="nails">
      <div className={styles.carouselActions}>
        <div className={styles.carouselBtnsContainer}>
          <button className="carousel-btn" onClick={prevOption} disabled={currentOption === 0}>
            <FontAwesomeIcon icon={faAngleLeft} color="white" />
          </button>
          <button
            className="carousel-btn"
            onClick={nextOption}
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
                onClick={() => gotoOption(index)}
              />
            ))}
        </div>
      </div>
      {isMobile ? (
        <MobileCarousel
          updateSwiper={updateSwiper}
          goNext={goNext}
          goPrev={goPrev}
          options={options}
          gotoOption={gotoOption}
        />
      ) : (
        <DesktopCarousel
          currentOption={currentOption}
          prevOption={prevOption}
          nextOption={nextOption}
          options={options}
          gotoOption={gotoOption}
        />
      )}
    </section>
  );
}

export default Carousel;
