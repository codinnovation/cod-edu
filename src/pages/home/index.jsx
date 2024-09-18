import React, { useState, useEffect } from 'react';
import Showcase from './showcase'
import WhyChooseUs from './why-choose-us';
import ExploreOurCourese from './explore-our-courses';
import GetStartedToday from './get-started-today';

function Index() {
  return (
    <>
      <div>
        <Showcase />
        <WhyChooseUs />
        <ExploreOurCourese />
        <GetStartedToday />
      </div>
    </>
  );
}

export default Index;
