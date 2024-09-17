import React, { useState, useEffect } from 'react';
import styles from '../../../styles/showcase.module.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link';

function Showcase() {
	return (
		<>
			<div className={styles.showcaseContainer}>
				<div className={styles.showcaseBgImage}></div>
				<div className={styles.showcaseContent}>
					<div className={styles.firstHeader}>
						<div className={styles.leftSideItems}>
							<div className={styles.item}>
								<HelpOutlineIcon className={styles.icon} />
								<h1>Have a questions?</h1>
							</div>

							<div className={styles.item}>
								<PhoneIphoneIcon className={styles.icon} />
								<h1>+233 597 063 145</h1>
							</div>

							<div className={styles.item}>
								<MailOutlineIcon className={styles.icon} />
								<h1>codinnovations001@gmail.com</h1>
							</div>
						</div>
						<div className={styles.rightSide}>
							<div className={styles.item}>
								<LockOpenIcon className={styles.icon} />
								<h1>LogIn</h1>
							</div>

							<div className={styles.item}>
								<HowToRegIcon className={styles.icon} />
								<h1>Register</h1>
							</div>
						</div>
					</div>

					<div className={styles.navigationContainer}>
						<div className={styles.nameContainer}>
							<h1>Code</h1>
							<h1>Mentor</h1>
						</div>

						<div className={styles.linkContainer}>
							<Link href="/">Home</Link>
							<Link href="/">Courses</Link>
							<Link href="/">About</Link>
							<Link href="/">Services</Link>
							<Link href="/">Contact</Link>
						</div>

						<div className={styles.navigationButton}>
							<button>Enroll Now</button>
						</div>
					</div>

					<div className={styles.showcaseTextContainer}>
						<div className={styles.showcaseText}>
							<div className={styles.showcaseTextHeader}>
								<h1>Where Innovation Meets </h1>
								<h1>Education</h1>
							</div>

							<div className={styles.showcaseTextDescription}>
								<p>Transform your tech skills with our engaging online courses, tailored to provide hands-on learning and industry insights. Our platform supports you through every step of...</p>
							</div>

							<div className={styles.showcaseTextButton}>
								<button>Explore More</button>
							</div>
						</div>

						<div className={styles.showcaseTextPlay}>
							<PlayArrowIcon className={styles.icon} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Showcase;
