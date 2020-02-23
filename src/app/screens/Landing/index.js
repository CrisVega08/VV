import React from 'react';

import Home from './sections/Home';
import Nails from './sections/Nails';
import Face from './sections/Face';

import Navbar from '../../components/navbar';

function Landing () {
  return (
    <>
      <Navbar />
      <Home />
      <Nails />
      <Face />
    </>
  )
}

export default Landing;
