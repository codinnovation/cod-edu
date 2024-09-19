import React from "react";
import styles from '../../../styles/join-our-community.module.css';
import Image from "next/image";
import { motion } from 'framer-motion';

function JoinOurCommunity() {
	// Animation variants for text and button
	const fadeInUpVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const pulseEffect = {
		hidden: { scale: 0.95 },
		visible: {
			scale: [1, 1.05, 1],
			transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
		},
	};

	return (
		<>
			<div className={styles.communityContainer}>
				<div className={styles.communityContent}>
					{/* Text Motion */}
					<motion.div
						className={styles.communityText}
						initial="hidden"
						whileInView="visible"
						viewport={{ infinity: true }}
						variants={fadeInUpVariant}
					>
						<div className={styles.communityTextHeader}>
							<h1>Join Our Community</h1>
						</div>

						<div className={styles.communityTextDescription}>
							<p>Are you passionate about coding and looking to connect with other developers? Join our WhatsApp group to learn, share knowledge, and collaborate on exciting projects. Whether you&apos;re a beginner or a seasoned pro, our community is the perfect place to grow your skills and network with fellow developers.</p>
						</div>

						{/* Button with Pulse Effect */}
						<motion.div
							className={styles.communityTextButton}
							initial="hidden"
							whileInView="visible"
							viewport={{ infinity: true }}
							variants={pulseEffect}
						>
							<button>Join Now!</button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default JoinOurCommunity;
