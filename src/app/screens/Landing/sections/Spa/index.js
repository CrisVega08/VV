import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './styles.module.scss';
import fadeTransition from './fade.module.scss';
import data from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Spa() {
  const [options] = useState(data);
  const [currentOption, setCurrentOption] = useState(0);

  const prevOption = useCallback(() => {
    setCurrentOption(currentOption - 1);
  }, [currentOption]);

  const nextOption = useCallback(() => {
    setCurrentOption(currentOption + 1);
  }, [currentOption]);

  const renderImagen = option => (
    <img
      className={cn(styles.serviceImg, {
        [styles.selectedImg]: currentOption === option._id,
      })}
      src={option.img}
      alt={option.alt}
    />
  );

  return (
    <section className={`style ${styles.container}`} id="spa">
      <div className={styles.service}>
        <h3 className={`massage-title ${styles.serviceTitle}`}>
          <TransitionGroup>
            <CSSTransition
              key={options[currentOption]._id}
              timeout={1500}
              classNames={fadeTransition}
            >
              <span className={`massage-title ${styles.serviceTitleContent}`}>
                {options[currentOption].title}
              </span>
            </CSSTransition>
          </TransitionGroup>
        </h3>
        <span className={styles.infoContainer}>
          <TransitionGroup>
            <CSSTransition
              key={options[currentOption]._id}
              timeout={1500}
              classNames={fadeTransition}
            >
              <p
                className={`normal-text ${styles.serviceInfo}`}
                dangerouslySetInnerHTML={{ __html: options[currentOption].message }}
              />
            </CSSTransition>
          </TransitionGroup>
          <div className={styles.btnContainer}>
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
        </span>
        <div className={styles.containerCarousel}>
          <div className={styles.services}>
            <div
              className={styles.carouselServices}
              style={{
                transform: `translateX(-${currentOption * (100 / options.length)}%)`,
              }}
            >
              {options.map(renderImagen)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spa;
