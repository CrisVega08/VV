import React from 'react';

import ubication from './assets/shape.png';
import phone from './assets/phone-call.png';
import clock from './assets/wall-clock.png';

import styles from './styles.module.scss';

function Contact() {
  return (
    <section className={`slide ${styles.container}`} id="contact">
      <h2 className={`main-title ${styles.title}`}>¿Qué esperas para visitarnos?</h2>
      <span className="normal-tex">En <strong>Verónica Vega Nails & Spa </strong>esperamos pronto tu visita, comunícate para mucha mas información.</span>
      <div className={styles.options}>
        <div className={styles.option}>
          <img className={styles.iconOption} src={ubication} alt="ubication" />
          <h4 className="contact-option">Ubicación</h4>
          <span className="contact-info-option">Cl 39 D 74-01</span>
          <span className="normal-text">Laureles. Medellín</span>
        </div>
        <div className={styles.option}>
          <img className={styles.iconOption} src={clock} alt="clock" />
          <h4 className="contact-option">Horario de atención</h4>
          <span className="contact-info-option">9:00 am a 8:00 pm</span>
          <span className="normal-text">De lunes a Viernes</span>
          <span className="contact-info-option">9:00 am a 8:00 pm</span>
          <span className="normal-text">Sábados</span>
        </div>
        <div className={styles.option}>
          <img className={styles.iconOption} src={phone} alt="phone" />
          <h4 className="contact-option">Número único de citas</h4>
          <span className="contact-info-option">(300) 123 45 67</span>
        </div>
      </div>
    </section>
  )
}

export default Contact;
