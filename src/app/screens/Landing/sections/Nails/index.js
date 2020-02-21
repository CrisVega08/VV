import React, { useState } from 'react';

import styles from './styles.module.scss';

function Carousel() {
  const [options, setOptions] = useState([{img: '', alt: '1'}, {img: '', alt: '2'}]);
  const [currentOption, setCurrentOption] = useState(0);

  const prevOption = () =>
    setCurrentOption(currentOption-1)

  const nextOption = () =>
    setCurrentOption(currentOption++)

  return (
    <div className={styles.carousel} >
      <div className={styles.carouselActions}>
        <div>
          <button 
            onClick={prevOption} 
            disabled={currentOption === 0}
          >Prev</button>
          <button 
            onClick={nextOption} 
            disabled={currentOption === options.length-1}
          >Next</button>
        </div>
        <h3>Manicure & Pedicure</h3>
        <p>Embellece  tus manos y pies, con nuestros diseños y estilo moderno utilizando técnicas tradicionales.</p>
        <div className={styles.dotsContainer} >

        </div>
      </div>
      <img src={options[currentOption].img} alt={options[currentOption].alt} />
    </div>
  )
}

export default Carousel;