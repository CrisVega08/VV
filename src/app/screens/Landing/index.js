import React from 'react';

import Navbar from '../../components/navbar';

import Home from './sections/Home';
import Nails from './sections/Nails';
import Face from './sections/Face';
import Contact from './sections/Contact';

function Landing () {
  return (
    <>
      <Navbar />
      <Home />
      <Nails />
      <Face />
      <Contact />
    </>
  )
}

export default Landing;
