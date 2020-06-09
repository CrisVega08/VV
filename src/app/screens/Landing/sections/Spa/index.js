import React, { useState, useCallback } from 'react';

import useWindowWidth from '../../../../hooks/useWindowWidth';
import { RESPONSIVE } from '../../../../constants';

import DesktopSpa from './components/desktop';
import MobileSpa from './components/mobile';
import styles from './styles.module.scss';
import data from './constants';

function Spa() {
  const [options] = useState(data);
  const [currentOption, setCurrentOption] = useState(0);

  const prevOption = useCallback(() => {
    setCurrentOption(currentOption - 1);
  }, [currentOption]);

  const nextOption = useCallback(() => {
    setCurrentOption(currentOption + 1);
  }, [currentOption]);

  const isMobile = RESPONSIVE > useWindowWidth();
  return (
    <section className={`style ${styles.container}`} id="spa">
      {!isMobile ? (
        <DesktopSpa
          options={options}
          currentOption={currentOption}
          prevOption={prevOption}
          nextOption={nextOption}
        />
      ) : (
        <MobileSpa
          options={options}
          currentOption={currentOption}
          updateCurrentIndex={setCurrentOption}
        />
      )}
    </section>
  );
}

export default Spa;
