import React from 'react';

import Navbar from '../../components/navbar';

import Home from './sections/Home';
import Nails from './sections/Nails';
import Face from './sections/Face';
import Contact from './sections/Contact';
// import Spa from './sections/Spa';

function Landing() {
  return (
    <>
      <Navbar />
      <Home />
      <Nails />
      <Face />
      {/* <Spa  /> */}
      <Contact />
    </>
  );
}

export default Landing;
