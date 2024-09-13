import React from "react";
import styles from "../../styles/first-Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/logo-w-2.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ProfilePhoto from "../../../public/login-image.jpg";
import { motion } from "framer-motion";

function Index() {
  return (
    <motion.div
      className={styles.firstHeaderContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.firstHeaderContent}>
        <motion.div
          className={styles.logoContainer}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={LogoImage}
            alt="logo-image"
            className={styles.image}
            width={900}
            height={900}
          />
          <p>COD - Edu</p>
        </motion.div>

        <div className={styles.navigationContainer}>
          {[
            { icon: <HomeIcon className={styles.icon} />, text: "Home" },
            { icon: <InfoIcon className={styles.icon} />, text: "About" },
            { icon: <SchoolIcon className={styles.icon} />, text: "Courses" },
            {
              icon: <ContactSupportIcon className={styles.icon} />,
              text: "Contact",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.navigation}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              transition={{ duration: 1.5, delay: index * 0.5 }}
            >
              <h1>{item.text}</h1>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.profileContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Image
            src={ProfilePhoto}
            alt="profile-photo"
            width={900}
            height={900}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Index;
