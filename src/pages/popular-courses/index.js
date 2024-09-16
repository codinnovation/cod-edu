import React from "react"
import Image from "next/image";
import styles from '../../styles/courses.module.css';
import JsImage from '../../../public/js.png';
import NodeImage from '../../../public/nodejs2.png'


function Courses() {
	return (
		<>
			<div className={styles.courseContainer}>
				<div className={styles.courseContent}>
					<div className={styles.course}>
						<div className={styles.courseImage}>
							<Image src={JsImage} width={900} height={900} alt="js-image" />
						</div>

						<div className={styles.courseHeader}>
							<h1>JavaScript</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>Our mission is to provide you with top-tier educational resources, expert mentorship, and real-world experience to help</p>
						</div>
					</div>


					<div className={styles.course}>
						<div className={styles.courseImage}>
							<Image src={NodeImage} width={900} height={900} alt="js-image" />
						</div>

						<div className={styles.courseHeader}>
							<h1>Nodejs</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>Our mission is to provide you with top-tier educational resources, expert mentorship, and real-world experience to help</p>
						</div>
					</div>


					<div className={styles.course}>
						<div className={styles.courseImage}>
							<Image src={JsImage} width={900} height={900} alt="js-image" />
						</div>

						<div className={styles.courseHeader}>
							<h1>JavaScript</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>Our mission is to provide you with top-tier educational resources, expert mentorship, and real-world experience to help</p>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Courses;