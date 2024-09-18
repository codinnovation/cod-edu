import React from "react";
import Head from "next/head";
import Showcase from "./showcase";
import WhyChooseUs from "./why-choose-us";
import ExploreOurCourese from "./explore-our-courses";
import GetStartedToday from "./get-started-today";
import JoinOurCommunity from "./join-our-community";
import Footer from "./footer";

function Index() {
  return (
    <>
      <Head>
        <title>Welcome To Code Mentor | Home page</title>
        <meta name="description" content="Welcome To Code Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1-1.png" />
      </Head>
      <div>
        <Showcase />
        <WhyChooseUs />
        <ExploreOurCourese />
        <GetStartedToday />
        <JoinOurCommunity />
        <Footer />
      </div>
    </>
  );
}

export default Index;
