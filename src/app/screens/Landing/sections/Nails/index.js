import React, { useState, useCallback } from 'react';
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss';
import  data  from './constants';

function Carousel() {
  const [options] = useState(data.properties);
  let [currentOption, setCurrentOption] = useState(0);

  const prevOption = useCallback(
    () => setCurrentOption(currentOption-1),[currentOption]
  );

  const nextOption = useCallback(
    () => setCurrentOption(currentOption+1),[currentOption]
  );

  return (
    <section className={`slide ${styles.carousel}`} id="nails">
      <div className={styles.carouselActions}>
        <div>
          <button className='carousel-btn'
            onClick={prevOption} 
            disabled={currentOption === 0}
          >
            <FontAwesomeIcon icon={faAngleLeft} color="white" />
          </button>
          <button className='carousel-btn'
            onClick={nextOption} 
            disabled={currentOption === options.length-1}
          ><FontAwesomeIcon icon={faAngleRight} color="white" /></button>
        </div>
          <h3 className={`normal-title ${styles.carouselTitle}`}>Manicure & Pedicure</h3>
          <p className={`normal-text ${styles.carouselMessage}`}>Embellece  tus manos y pies, con nuestros diseños y estilo moderno utilizando técnicas tradicionales.</p>
          <div className={styles.dotsContainer}>
            {options.length && options.map((option, index) => (
              <span key={option._id} className={cn(styles.dots, {[styles.activeDot]: index === currentOption})} />
            ))}
          </div>
        </div>
      <div className={styles.seletedOption}>
        <div className={`${styles.cardsSlider} ${styles[`activeSlide${currentOption}`]}`}>
          <div className={styles.cardsSliderWrapper} style={{
                  'transform': `translateX(-${currentOption*(100/options.length)}%)`
                }}>
            {options.length && options.map((option) => <img className={cn(styles.card,{[styles.selectedCard]: currentOption === option.index})} key={option._id} src={option.picture} alt={option._id} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel;
