import React from 'react';

import styles from './styles.module.scss';

import eyeBrows from './assets/img_01.png';
import eyeLashes from './assets/img_02.png';
import facial from './assets/img_03.png';

function Face() {
  return (
    <section className={`slide ${styles.container}`} id="face">
      <div className={styles.service}>
        <img className={styles.images} src={eyeBrows} alt="eyeBrows" />
        <div className={styles.servicesTexts}>
          <h3 className="normal-title">Cejas</h3>
          <p className="normal-text">
            <strong>Potenciamos los rasgos de tu rostro</strong> con un excelente diseño de cejas,
            sombreado temporal y Micropigmentación.
          </p>
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.servicesTexts}>
          <h3 className="normal-title">Pestañas</h3>
          <p className="normal-text">
            Mejoramos la longitud, la cantidad y la curvatura de tus pestañas naturales, con
            técnicas como Lifting y Postizas.
          </p>
        </div>
        <img className={styles.images} src={eyeLashes} alt="eyeBrows" />
      </div>
      <div className={styles.service}>
        <img className={styles.images} src={facial} alt="eyeBrows" />
        <div className={styles.servicesTexts}>
          <h3 className="normal-title">Limpieza Facial</h3>
          <p className="normal-text">
            Ayudamos a revitalizar la piel por medio de un proceso de higiene, el cual se basa en la
            remoción de impurezas y las células muertas con el fin de devolver energía, luminosidad
            y salud al rostro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Face;
