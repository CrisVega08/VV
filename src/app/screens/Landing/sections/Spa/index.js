import React, {useState, useCallback} from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import data from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Spa() {
  const [options] = useState(data);
  const [currentOption, setCurrentOption] = useState(0);
  const [animate, setAnimate] = useState(true);

  const prevOption = useCallback(
    () => {
      setCurrentOption(currentOption-1)
      setAnimate(true)
    },[currentOption]
  );

  const nextOption = useCallback(
    () => {
      setCurrentOption(currentOption+1)
      setAnimate(true)
    },[currentOption]
  );

  const removeAnimation = useCallback(
    () => setAnimate(false), []
  )

  return (
    <section className={`style ${styles.container}`} id="spa">
      <div className={styles.service}>
        <h3 className={`massage-title ${styles.serviceTitle}`}>{options[currentOption].title}</h3>
        <span className={styles.infoContainer}>
          <p className={`normal-text ${styles.serviceInfo}`} dangerouslySetInnerHTML={{ __html: options[currentOption].message }} />
          <div  className={styles.btnContainer}>
            <button className='carousel-btn'
              onClick={prevOption} 
              disabled={currentOption === 0}
            >
              <FontAwesomeIcon icon={faAngleLeft} color="white" />
            </button>
            <button className='carousel-btn'
              onClick={nextOption} 
              disabled={currentOption === options.length-1}
              
            >
              <FontAwesomeIcon icon={faAngleRight} color="white" />
            </button>
            <img
              className={cn(styles.serviceImg, {[styles.appearAnimation]: animate})}
              src={options[currentOption].img}
              alt={options[currentOption].alt}
              onAnimationEnd={removeAnimation}
            />
          </div>
        </span>
      </div>
    </section>
  )
}

export default Spa;
