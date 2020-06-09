import React from 'react';

import ubication from './assets/shape.png';
import phone from './assets/phone-call.png';
import clock from './assets/wall-clock.png';
import instagram from './assets/Instagram_simple_icon.svg';

import styles from './styles.module.scss';

function Contact() {
  const generateMsnWhatsapp = () => {
    const number = '{{ +573001234567 }}';
    const message = 'Hola, me gustaría hacer una reserva'.split(' ').join('%20');
    const url = `https://api.whatsapp.com/send?phone=${number}&text=%20${message}`;
    window.open(url, '_blank'); //to open new page
  };

  const openInstagram = () => {
    const url = 'https://www.instagram.com/veronicavega.nailsspa/';
    window.open(url, '_blank');
  };

  const openMaps = () => {
    //www.waze.com/livemap/directions?latlng=6.244376%2C-75.59171
    const url = 'https://www.google.com/maps/@6.2444101,-75.591715,21z';
    window.open(url, '_blank');
  };

  return (
    <section className={`slide ${styles.container}`} id="contact">
      <h2 className={`main-title ${styles.title}`}>¿Qué esperas para visitarnos?</h2>
      <span className={`normal-tex ${styles.message}`}>
        En <strong>Verónica Vega Nails & Spa </strong>esperamos pronto tu visita, comunícate para
        mucha mas información.
      </span>
      <div className={styles.options}>
        <div className={styles.option}>
          <img className={styles.iconOption} onClick={openMaps} src={ubication} alt="ubication" />
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
          <img
            className={styles.iconOption}
            src={phone}
            alt="phone"
            onClick={generateMsnWhatsapp}
          />
          <h4 className="contact-option">Número único de citas</h4>
          <span className="contact-info-option">(300) 123 45 67</span>
        </div>
      </div>
      <img
        className={styles.instagramIcon}
        src={instagram}
        alt="scroll-icon"
        onClick={openInstagram}
      />
    </section>
  );
}

export default Contact;
