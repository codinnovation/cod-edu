import React from 'react';
import styles from '../../../styles/why-choose-us.module.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { motion } from 'framer-motion';

function WhyChooseUs() {
	return (
		<>
			<div className={styles.whyContainer}>
				<div className={styles.whyHeader}>
					<h1>Why</h1>
					<h1>Learn</h1>
					<h1>With Us</h1>
				</div>
				<div className={styles.whyContent}>
					<motion.div
						className={styles.content}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ infinity: true }}
					>
						<div className={styles.contentIcon}>
							<LightbulbIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Interactive Learning</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>Our lessons are designed to be hands-on, allowing you to write real code and see immediate results.</p>
						</div>
					</motion.div>

					<motion.div
						className={styles.content}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ infinity: true }}
					>
						<div className={styles.contentIcon}>
							<LaptopChromebookIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Beginner Friendly</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>No coding experience? No problem. Our step-by-step courses start from the basics and gradually increase in complexity.</p>
						</div>
					</motion.div>

					<motion.div
						className={styles.content}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ infinity: true }}
					>
						<div className={styles.contentIcon}>
							<DesktopWindowsIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Projects That Matter</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>Build real-world projects and create a portfolio that you can showcase to potential employers or use in your own ventures.</p>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
