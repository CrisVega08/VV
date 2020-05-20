import React from 'react';

import Navbar from '../../components/navbar';

import Home from './sections/Home';
import Nails from './sections/Nails';
import Face from './sections/Face';
import Contact from './sections/Contact';
import Spa from './sections/Spa';

import styles from './styles.module.scss';

function Landing () {
  return (
    <>
      <Navbar  />
      <Home  />
      <Nails  />
      <Face  />
      <Spa  />
      <Contact  />
      <Nails  />
      {/* <Scroll /> */}
    </>
  )
}

export default Landing;
