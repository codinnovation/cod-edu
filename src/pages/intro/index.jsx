import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/intro.module.css";
import { motion } from "framer-motion";

const starArray = [...Array(150)].map((_, i) => (
  <div
    key={i}
    className={styles.star}
    style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 40}s`
    }}
  ></div>
));

const texts = [
  "Welcome to CodeMentor",
  "Your Gateway to Becoming a Pro Developer",
  "Your Programming Journey Starts Here!",
  "Master Programming with Practical Lessons & Projects"
];

function Intro() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentText].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentText][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const nextTextTimeout = setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setDisplayedText("");
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(nextTextTimeout);
    }
  }, [charIndex, currentText]);

  const handleSkip = () => {
    router.push("/home");
  };

  return (
    <div className={styles.introContainer}>
      <div className={styles.stars}>{starArray}</div>
      <motion.div
        className={styles.earth}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <div className={styles.bottomContainer}>
        <motion.div
          key={currentText}
          className={styles.textDisplay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <h1>{displayedText}</h1>
        </motion.div>
        <button className={styles.skipButton} onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
}

export default Intro;
