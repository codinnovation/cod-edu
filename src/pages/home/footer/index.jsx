import React from "react";
import styles from '../../../styles/footer.module.css'


function Footer() {
	return (
		<>
			<div className={styles.footerContainer}>
				<div className={styles.footerContent}>
					<div className={styles.companyName}>
						<h1>Code</h1>
						<h1>Mentor</h1>
					</div>
				</div>
			</div>
		</>
	)
}
export default Footer;