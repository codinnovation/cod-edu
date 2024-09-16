import React, { useState, useEffect } from "react";
import styles from "../../styles/first-Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/logo-w-1-1.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from "framer-motion";

function Index() {
  const [activeLink, setActiveLink] = useState("Home")

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
  }
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
          <div className={styles.logoDescription}>
            <p>Code</p>
            <p>Mentor</p>
          </div>
        </motion.div>

        <div className={styles.navigationContainer}>
          {[
            { text: "Home" },
            { text: "About" },
            { text: "Courses" },
            { text: "Contact" },
            { text: "FQA" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.navigation} ${activeLink === item.text ? styles.activeLink : ''}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              transition={{ duration: 1.5, delay: index * 0.5 }}
              onClick={() => handleLinkClick(item.text)}
            >
              <h1>{item.text}</h1>
            </motion.div>
          ))}
        </div>
        <div className={styles.mobileMenu}>
          <MenuIcon className={styles.icon}/>
        </div>
      </div>
    </motion.div>
  );
}

export default Index;
