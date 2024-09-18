import React, { useState, useEffect } from 'react';
import Showcase from './showcase'
import WhyChooseUs from './why-choose-us';
import ExploreOurCourese from './explore-our-courses';
import GetStartedToday from './get-started-today';
import JoinOurCommunity from './join-our-community';
import Footer from './footer';

function Index() {
  return (
    <>
      <div>
        <Showcase />
        <WhyChooseUs />
        <ExploreOurCourese />
        <GetStartedToday />
        <JoinOurCommunity/>
        <Footer/>
      </div>
    </>
  );
}

export default Index;
