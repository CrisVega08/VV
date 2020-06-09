import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import fadeTransition from '../../fade.module.scss';
import styles from './styles.module.scss';

function DesktopSpa({ currentOption, options, nextOption, prevOption }) {
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
  );
}

export default DesktopSpa;
