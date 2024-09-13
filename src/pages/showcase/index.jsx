import React from 'react';
import Image from 'next/image';
import styles from '../../styles/showcase.module.css';
import ShowcaseImage from '../../../public/showcase-img.jpg';
import { motion } from 'framer-motion';

function Showcase() {
	return (
		<>
			<div className={styles.showcaseContainer}>
				<motion.div
					className={styles.showcaseImage}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1.5 }}
				>
					<Image src={ShowcaseImage} width={900} height={900} className={styles.image} alt='showcase-image' />
				</motion.div>

				{/* Text animations start after the image fully appears (3 + 1.5 = 4.5 seconds delay) */}
				<motion.div
					className={styles.showcaseTextContainer}
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
				>
					<div className={styles.showcaseText}>
						<motion.p
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 2, duration: 1 }}
						>
							Welcome to COD E-learning
						</motion.p>

						<motion.h1
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 3, duration: 1 }}
						>
							Gain the skills you need to excel in the
						</motion.h1>

						<motion.h1
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 3.5, duration: 1 }}
						>
							world of programming
						</motion.h1>

						<motion.div
							className={styles.showcaseButton}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 4, duration: 0.5 }}
						>
							<button>Contact Us</button>
							<button>Courses</button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default Showcase;
