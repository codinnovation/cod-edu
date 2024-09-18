import React from 'react'
import styles from '../../../styles/why-choose-us.module.css'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';


function WhyChooseUs() {
	return (
		<>
			<div className={styles.whyContainer}>
				<div className={styles.whyHeader}>
					<h1>Why</h1>
					<h1> Learn</h1>
					<h1>With Us</h1>
				</div>
				<div className={styles.whyContent}>
					<div className={styles.content}>
						<div className={styles.contentIcon}>
							<LightbulbIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Interactive Learning</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>Our lessons are designed to be hands-on, allowing you to write real code and see immediate results.</p>
						</div>
					</div>

					<div className={styles.content}>
						<div className={styles.contentIcon}>
							<LaptopChromebookIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Beginner Friendly</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>No coding experience? No problem. Our step-by-step courses start from the basics and gradually increase in complexity.</p>
						</div>
					</div>

				

					<div className={styles.content}>
						<div className={styles.contentIcon}>
							<DesktopWindowsIcon className={styles.icon} />
						</div>
						<div className={styles.contentHeader}>
							<h1>Projects That Matter</h1>
						</div>
						<div className={styles.contentDescription}>
							<p>Build real-world projects and create a portfolio that you can showcase to potential employers or use in your own ventures</p>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default WhyChooseUs