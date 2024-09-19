import Head from "next/head";
import Intro from "./intro";
import { useState, useEffect } from "react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome To Code Mentor</title>
        <meta name="description" content="Welcome To Code Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1-1.png" />
      </Head>
      <div>
        <Intro />
      </div>
   
    </>
  );
}
