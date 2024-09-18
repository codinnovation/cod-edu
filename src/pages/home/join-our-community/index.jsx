import React from "react";
import styles from '../../../styles/join-our-community.module.css'
import Image from "next/image";
import WhatsAppImage from '../../../../public/whatsapp.png'

function JoinOurCommunity() {
	return (
		<>
			<div className={styles.communityContainer}>
				<div className={styles.communityContent}>
					<div className={styles.communityText}>
						<div className={styles.communityTextHeader}>
							<h1>Join Our Community</h1>
						</div>

						<div className={styles.communityTextDescription}>
							<p>Are you passionate about coding and looking to connect with other developers? Join our WhatsApp group to learn, share knowledge, and collaborate on exciting projects. Whether you&apos;re a beginner or a seasoned pro, our community is the perfect place to grow your skills and network with fellow developers.</p>
						</div>
						<div className={styles.communityTextButton}>
							<button>Join Now!</button>
						</div>
					</div>

					<div className={styles.communityImage}>
						<Image src={WhatsAppImage} width={900} height={900} alt="whatsapp-image" />
					</div>
				</div>
			</div>
		</>
	)
}

export default JoinOurCommunity;