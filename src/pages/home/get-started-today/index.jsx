import React from "react"
import styles from '../../../styles/get-started-today.module.css';
import Image from "next/image";
import ContainerImage from '../../../../public/login-image-removebg-preview.png'

function GetStartedToday() {
	return (
		<>
			<div className={styles.getStartedContainer}>
				<div className={styles.getStartedContent}>
					<div className={styles.getstartedImage}>
						<Image width={900} height={900} alt="image" src={ContainerImage} />
					</div>

					<div className={styles.getStartedDescription}>
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
					</div>
				</div>
			</div>
		</>
	)
}

export default GetStartedToday