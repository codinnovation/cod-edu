import React from "react";
import styles from '../../../styles/explore-our-learning.module.css';

function ExploreOurCourese() {
	return (
		<>
			<div className={styles.exploreContainer}>
				<div className={styles.exploreContainerHeader}>
					<h1>Explore</h1>
					<h1>Our </h1>
					<h1>Courses</h1>
				</div>
				<div className={styles.exploreContent}>
					<div className={styles.courseContainer}>
						<div className={styles.courseHeader}>
							<h1>Introduction to Programming</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>The Introduction to Programming course is designed to give beginners a foundational understanding of programming concepts and practices. This course is ideal for individuals with little to no prior experience in coding who want to embark on a journey into the world of programming.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</div>

					<div className={styles.courseContainer}>
						<div className={styles.courseHeader}>
							<h1>JavaScript for Beginners</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>The Introduction to Programming course is designed to give beginners a foundational understanding of programming concepts and practices. This course is ideal for individuals with little to no prior experience in coding who want to embark on a journey into the world of programming.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</div>

					<div className={styles.courseContainer}>
						<div className={styles.courseHeader}>
							<h1>HTML & CSS</h1>
						</div>

						<div className={styles.courseDescription}>
							<p>The Introduction to Programming course is designed to give beginners a foundational understanding of programming concepts and practices. This course is ideal for individuals with little to no prior experience in coding who want to embark on a journey into the world of programming.</p>
						</div>

						<div className={styles.courseButton}>
							<button>Enroll Now!</button>
						</div>
					</div>
				</div>
				<div className={styles.exploreContainerButton}>
					<button>See More</button>
				</div>
			</div>
		</>
	)
}

export default ExploreOurCourese;