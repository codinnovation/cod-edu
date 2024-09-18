import React from "react";
import styles from '../../../styles/footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.div 
        className={styles.footerContainer}
        initial={{ opacity: 0, y: 20 }} // Hide initially
        whileInView={{ opacity: 1, y: 0 }} // Animates when in view
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }} // Triggers animation when 10% of the footer is visible
      >
        <div className={styles.footerContent}>
          <motion.div 
            className={styles.companyName}
            initial={{ x: -100, opacity: 0 }} // Hide initially
            whileInView={{ x: 0, opacity: 1 }} // Slide in when in view
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }} // Triggered when in view
          >
            <h1>Code</h1>
            <h1>Mentor</h1>
          </motion.div>

          <motion.div 
            className={styles.copyright}
            initial={{ opacity: 0 }} // Hide initially
            whileInView={{ opacity: 1 }} // Fade in when in view
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }} // Triggered when in view
          >
            <p>© {new Date().getFullYear()}. CodeMentor by COD Innovations. All Rights Reserved</p>
          </motion.div>

          <motion.div 
            className={styles.socialMedia}
            initial={{ opacity: 0, scale: 0.5 }} // Hide initially
            whileInView={{ opacity: 1, scale: 1 }} // Scale in when in view
            transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }} // Triggered when in view
          >
            <FacebookIcon className={styles.icon} />
            <WhatsAppIcon className={styles.icon} />
            <XIcon className={styles.icon} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
