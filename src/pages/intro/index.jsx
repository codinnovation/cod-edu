import React, { useState, useEffect } from "react";
import styles from "@/styles/intro.module.css";
import { motion } from 'framer-motion';

const starArray = [...Array(150)].map((_, i) => (
	<div
		key={i}
		className={styles.star}
		style={{
			top: `${Math.random() * 100}vh`,
			left: `${Math.random() * 100}vw`,
			animationDuration: `${Math.random() * 40 + 40}s`
		}}
	></div>
));

const texts = [
	"Welcome to Cod Edu – your programming hub.",
	"Unlock coding skills with our courses.",
	"Begin your developer journey with Cod Edu."
];

function Intro() {
	const [currentText, setCurrentText] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [charIndex, setCharIndex] = useState(0);

	// Handle typewriter effect
	useEffect(() => {
		if (charIndex < texts[currentText].length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + texts[currentText][charIndex]);
				setCharIndex((prev) => prev + 1);
			}, 100); // Adjust speed of typing (100ms per character)
			return () => clearTimeout(timeout);
		} else {
			// Once the entire text is typed, wait 3 seconds before showing the next text
			const nextTextTimeout = setTimeout(() => {
				setCurrentText((prev) => (prev + 1) % texts.length);
				setDisplayedText("");
				setCharIndex(0);
			}, 3000); // 3-second delay before switching to the next text
			return () => clearTimeout(nextTextTimeout);
		}
	}, [charIndex, currentText]);

	const handleSkip = () => {
		// Logic to handle skipping (e.g., navigate to another page)
		console.log("Skip clicked");
	};

	return (
		<div className={styles.introContainer}>
			<div className={styles.stars}>
				{starArray}
			</div>
			<motion.div
				className={styles.earth}
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
			/>
			<div className={styles.bottomContainer}>
				<motion.div
					key={currentText} // Key helps with smooth transitions between texts
					className={styles.textDisplay}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 3 }} // Smooth fade transition
				>
					{displayedText}
				</motion.div>
				<button className={styles.skipButton} onClick={handleSkip}>
					Skip
				</button>
			</div>
		</div>
	);
}

export default Intro;
