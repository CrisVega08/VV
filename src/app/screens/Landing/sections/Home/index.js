import React from 'react';
import ScrollIcon from '../../../../components/scrollIcon';
import { SERVICES } from './constants';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <section className={`slide ${styles.container}`} id="home">
        <h3 className={`main-title ${styles.title}`}>Cuidarte es la mejor elección</h3>
        <span className={`normal-text ${styles.wellcome}`}>
          En <strong>Verónica Vega Nails & Spa</strong> te ofrecemos los mejores servicios con el
          mejor talento humano y los mejores profesionales.
        </span>
        <div className={styles.services}>
          {SERVICES.map(({ id, name }) => (
            <button className={styles.service} key={id} type="button">
              {name}
            </button>
          ))}
        </div>
        <h4 className={`normal-title ${styles.invitation}`}>
          ¡ Te esperamos para que vivas una experiencia de lujo !
        </h4>
      </section>
      <ScrollIcon />
    </>
  );
}

export default Home;
