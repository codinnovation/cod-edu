import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Showcase from "./showcase";
import WhyChooseUs from "./why-choose-us";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreOurCourese from "./explore-our-courses";
import GetStartedToday from "./get-started-today";
import JoinOurCommunity from "./join-our-community";
import Footer from "./footer";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

function Index() {
  const [openMenu, setOpenMenu] = useState(false);

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

      <div className={styles.menuContainer} onClick={() => setOpenMenu(true)}>
        <MenuIcon className={styles.icon} />
      </div>

      {openMenu && (
        <div className={styles.sideMenu}>
          <div className={styles.closeIcon} onClick={() => setOpenMenu(false)}>
            <CloseIcon />
          </div>
          <div className={styles.menuItems}>
            <Link href="/home">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
