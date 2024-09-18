import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/showcase.module.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";

const Showcase = () => {
  return (
    <>
      <div className={styles.showcaseContainer}>
        <motion.div
          className={styles.showcaseBgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        <div className={styles.showcaseContent}>
          <div className={styles.firstHeader}>
            <motion.div
              className={styles.leftSideItems}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className={styles.item}>
                <HelpOutlineIcon className={styles.icon} />
                <h1>Have a question?</h1>
              </div>

              <div className={styles.item}>
                <PhoneIphoneIcon className={styles.icon} />
                <h1>+233 597 063 145</h1>
              </div>

              <div className={styles.item}>
                <MailOutlineIcon className={styles.icon} />
                <h1>codinnovations001@gmail.com</h1>
              </div>
            </motion.div>

            <motion.div
              className={styles.rightSide}
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className={styles.item}>
                <LockOpenIcon className={styles.icon} />
                <h1>LogIn</h1>
              </div>

              <div className={styles.item}>
                <HowToRegIcon className={styles.icon} />
                <h1>Register</h1>
              </div>
            </motion.div>
          </div>

          <div className={styles.navigationContainer}>
            <motion.div
              className={styles.nameContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.1 }}
            >
              <h1>Code</h1>
              <h1>Mentor</h1>
            </motion.div>

            <motion.div
              className={styles.linkContainer}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Link href="/">Home</Link>
              <Link href="/">Courses</Link>
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Contact</Link>
            </motion.div>

            <motion.div
              className={styles.navigationButton}
              whileHover={{ scale: 1.1 }}
            >
              <button>Enroll Now</button>
            </motion.div>
          </div>

          <div className={styles.showcaseTextContainer}>
            <div className={styles.showcaseText} >
              <div className={styles.showcaseTextHeader}>
                <h1>Where Innovation Meets</h1>
                <h1>Education</h1>
              </div>

              <div className={styles.showcaseTextDescription}>
                <p>
                  Transform your tech skills with our engaging online courses,
                  tailored to provide hands-on learning and industry insights.
                  Our platform supports you through every step of...
                </p>
              </div>

              <div className={styles.showcaseTextButton}>
                <motion.button whileHover={{ scale: 1.1 }}>
                  Explore More
                </motion.button>
              </div>
            </div>

            <div className={styles.showcaseTextPlay}>
              <PlayArrowIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
