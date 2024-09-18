import React from "react";
import styles from '../../../styles/explore-our-learning.module.css';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

function ExploreOurCourese() {
	const router = useRouter()
	const scaleUpVariant = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	};

	return (
		<>
			<div className={styles.exploreContainer}>
				<div className={styles.exploreContainerHeader}>
					<h1>Explore</h1>
					<h1>Our </h1>
					<h1>Courses</h1>
				</div>
				<div className={styles.exploreContent}>
					{/* Course 1 */}
					<motion.div
						className={styles.courseContainer}
						initial="hidden"
						whileInView="visible"
						variants={scaleUpVariant}
						viewport={{ infinity: true }}
					>
						<div className={styles.courseHeader}>
							<h1>Introduction to Programming</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>The Introduction to Programming course is designed to give beginners a foundational understanding of programming concepts and practices. This course is ideal for individuals with little to no prior experience in coding who want to embark on a journey into the world of programming.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</motion.div>

					{/* Course 2 */}
					<motion.div
						className={styles.courseContainer}
						initial="hidden"
						whileInView="visible"
						variants={scaleUpVariant}
						viewport={{ infinity: true }}
					>
						<div className={styles.courseHeader}>
							<h1>JavaScript for Beginners</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>The JavaScript for Beginners course introduces core JavaScript concepts and walks you through creating dynamic websites and web applications. Perfect for those looking to specialize in front-end development.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</motion.div>

					{/* Course 3 */}
					<motion.div
						className={styles.courseContainer}
						initial="hidden"
						whileInView="visible"
						variants={scaleUpVariant}
						viewport={{ infinity: true }}
					>
						<div className={styles.courseHeader}>
							<h1>HTML & CSS</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>Learn how to build beautiful, responsive websites with HTML and CSS. This course is ideal for aspiring web designers or anyone wanting to gain a deeper understanding of web structure and style.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</motion.div>
				</div>
				<div className={styles.exploreContainerButton}>
					<button onClick={() => router.push("/courses")}>See More</button>
				</div>
			</div>
		</>
	);
}

export default ExploreOurCourese;
