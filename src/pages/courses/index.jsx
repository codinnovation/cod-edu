import React, { useState } from "react";
import Showcase from "./showcase";
import OurCourses from "./course";
import Footer from "../home/footer";
import Head from "next/head";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

function Courses() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <OurCourses />
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
            <Link href="/home">
              {" "}
              <DashboardIcon className={styles.icon} />
              Home
            </Link>
            <Link href="/courses">
              {" "}
              <LocalLibraryIcon className={styles.icon} />
              Courses
            </Link>
            <Link href="/">
              {" "}
              <InfoIcon className={styles.icon} />
              About
            </Link>
            <Link href="/">
              {" "}
              <ContactSupportIcon className={styles.icon} />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Courses;
