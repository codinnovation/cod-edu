import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import FirstHeader from "../pages/first-Header";
import Showcase from "./showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome To Cod E-Learning</title>
        <meta name="description" content="Welcome To Cod E-Learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lg2.png" />
      </Head>
      <div>
        <FirstHeader />
        <Showcase/>

      </div>
    </>
  );
}
