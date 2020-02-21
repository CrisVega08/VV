import React from 'react';

import Home from './sections/Home';
import Nails from './sections/Nails';

import Navbar from '../../components/navbar';

function Landing () {
  return (
    <>
      <Navbar />
      <Home />
      <Nails />
    </>
  )
}

export default Landing;
