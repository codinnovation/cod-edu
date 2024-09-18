import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/showcase.module.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import { useRouter } from "next/router";

const Showcase = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  console.log(currentUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (response.ok) {
          const userData = await response.json();
          setCurrentUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async (e) => {
    setIsLinkClicked(true);
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        router.push("/login");
        setIsLinkClicked(false);
      } else {
        console.log("Logout unsuccessful");
        setIsLinkClicked(false);
      }
    } catch (error) {
      console.log("error" + error);
      setIsLinkClicked(false);
    }
  };

  return (
    <>
      {isLinkClicked && (
        <div className={styles.loadingContainer}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}

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
              {currentUser ? (
                <>
                  <div className={styles.item} onClick={handleLogout}>
                    <ExitToAppIcon className={styles.icon} />
                    <h1>Logout</h1>
                  </div>
                  <div className={styles.item}>
                    <img src={currentUser?.user?.photoURL} alt="User" />
                  </div>
                </>
              ) : (
                <div
                  className={styles.item}
                  onClick={() => router.push("/login")}
                >
                  <LockOpenIcon className={styles.icon} />
                  <h1>Login</h1>
                </div>
              )}
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
              <Link href="/home">Home</Link>
              <Link href="/courses">Courses</Link>
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
            <div className={styles.showcaseText}>
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
