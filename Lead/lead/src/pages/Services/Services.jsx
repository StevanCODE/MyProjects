import React from 'react';
import { InfoSection } from '../../components';
import { servicesObjFour, servicesObjOne, servicesObjThree, servicesObjTwo } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...servicesObjFour} />
      <InfoSection {...servicesObjThree} />
      <InfoSection {...servicesObjTwo} />
      <InfoSection {...servicesObjOne} />
    </>
  );
}

export default Services;
