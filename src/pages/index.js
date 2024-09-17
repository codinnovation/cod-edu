import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Showcase from "./home";
import Intro from "./intro";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
router
  })
  return (
    <>
      <Head>
        <title>Welcome To Cod E-Learning</title>
        <meta name="description" content="Welcome To Cod E-Learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lg2.png" />
      </Head>
      <div>
        <Intro/>
      </div>
    </>
  );
}
