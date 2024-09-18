import React from "react";
import styles from '../../../styles/get-started-today.module.css';
import Image from "next/image";
import ContainerImage from '../../../../public/login-image-removebg-preview.png';
import { motion } from 'framer-motion';

function GetStartedToday() {
	// Animation variants
	const slideInVariant = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
	};

	const fadeInVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
	};

	return (
		<>
			<div className={styles.getStartedContainer}>
				<div className={styles.getStartedContent}>

					{/* Image Motion */}
					<motion.div
						className={styles.getstartedImage}
						initial="hidden"
						whileInView="visible"
						viewport={{ infinity: true }}
						variants={slideInVariant}
					>
						<Image width={900} height={900} alt="image" src={ContainerImage} />
					</motion.div>

					{/* Description Motion */}
					<motion.div
						className={styles.getStartedDescription}
						initial="hidden"
						whileInView="visible"
						viewport={{ infinity: true }}
						variants={fadeInVariant}
					>
						<div className={styles.getStartedDescriptionHeader}>
							<h1>Get Started Today!</h1>
						</div>

						<div className={styles.getStartedP}>
							<p>Ready to take your coding skills to the next level? Sign up now and start your journey with our free beginner courses!</p>
						</div>

						<div className={styles.getStartedContainerButton}>
							<button>Sign Up</button>
							<button>Sign In</button>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default GetStartedToday;
