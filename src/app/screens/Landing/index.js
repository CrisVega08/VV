import React from 'react';
import { Element } from 'react-scroll';

import { SECTIONS } from './constants';

import Navbar from '../../components/navbar';

// import Spa from './sections/Spa';
const renderSections = ({ route, component: Component }) => (
  <Element name={route}>
    <Component />
  </Element>
);

function Landing() {
  return (
    <>
      <Navbar />
      {SECTIONS.map(renderSections)}
    </>
  );
}

export default Landing;
