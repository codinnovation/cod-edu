import React from "react";
import Showcase from "./showcase";
import OurCourses from "./course";
import Footer from "../home/footer";
import Head from "next/head";

function Courses() {
  return (
    <>
      <Head>
        <title>Welcome To Code Mentor | Courses</title>
        <meta name="description" content="Welcome To Code Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1-1.png" />
      </Head>
      <div>
        <Showcase />
		<OurCourses/>
		<Footer/>
      </div>
    </>
  );
}
export default Courses;
