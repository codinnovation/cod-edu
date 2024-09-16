import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/showcase.module.css';
import ShowcaseImage from '../../../public/Andela-001.webp';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const textAnimationRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const showcaseTextArray = [
  { head_1: "Join Our Community of", head_2: "Innovators", descriptions: "Dive into a transformative learning experience where coding meets innovation. Our platform is designed to empower you with the skills and confidence needed to excel in the world of programming", buttonText: "Find More Information" },

  { head_1: "Mentorship and", head_2: "Guidance", descriptions: "We believe in the power of personalized learning. Our mission is to provide you with top-tier educational resources, expert mentorship, and real-world experience to help you master coding and achieve your career goals", buttonText: "Find More Information" },
];

function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % showcaseTextArray.length);
    }, 4000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.showcaseContent}>
        <div className={styles.showcaseTextContainer}>
          {showcaseTextArray.map((text, index) => (
            <motion.div
              key={index}
              className={styles.showcaseText}
              initial="hidden"
              animate={currentIndex === index ? "visible" : "hidden"}
              variants={textAnimation}
              transition={{ ...textAnimation.transition, delay: 0 }} // No stagger delay
            >
              <motion.div
                className={styles.showcaseTextHeader}
                initial="hidden"
                animate={currentIndex === index ? "visible" : "hidden"}
                variants={textAnimation}
              >
                <h1>{text.head_1}</h1>
                <h1>{text.head_2}</h1>
              </motion.div>

              <motion.div
                className={styles.showcaseTextDescription}
                initial="hidden"
                animate={currentIndex === index ? "visible" : "hidden"}
                variants={textAnimationRight}
              >
                <p>{text.descriptions}</p>
              </motion.div>

              <div className={styles.showcaseTextButton}>
                <button>{text.buttonText}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.showcaseImageContainer}>
          <Image src={ShowcaseImage} width={1000} height={1000} alt='showcase-image' />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
