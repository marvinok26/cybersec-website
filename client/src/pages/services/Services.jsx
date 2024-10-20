import React from 'react';
import ServiceTop from './ServiceTop';
import ServiceFeature from './ServiceFeature';
import ServiceFeature2 from './ServiceFeature2';
import Accordion from './Accordion';
import CTABlock from './CTABlock';


const Services = () => {

 

  return (
    <div className='mt-[6rem]'>
      {/* Optimize Solutions */}
      <ServiceTop />

      {/* Feature */}
      <ServiceFeature />

      {/* Feature 2 */}
      <ServiceFeature2 />

      {/* Why Choose Us */}
      <Accordion />

      {/* CTA */}
      <CTABlock />


    </div>
  );
};

export default Services;
