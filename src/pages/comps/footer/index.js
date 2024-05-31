import React from "react";
import Link from "next/link";
import styles from "../../../styles/footer.module.css";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <div className={styles.container_items_1_header}>
              <h1>COD E-LEARNING</h1>
              <p>Online Education & Learning</p>
            </div>

            <div className={styles.container_items_1_des}>
              <p>
                Embark on your learning journey with the courage to explore new
                horizons, execute your newfound knowledge with unwavering
                obedience to the task at hand, and practice diligently with
                discipline to refine your skills and achieve mastery.
              </p>
            </div>

            <div className={styles.social_icons}>
              <FacebookOutlined className={styles.icon} />
              <Twitter className={styles.icon} />
              <Instagram className={styles.icon} />
            </div>
          </div>

          <div className={styles.container_items_2_des}>
            <div className={styles.container_items_2_header}>
              <h1>Quick Links</h1>
            </div>
            <Link href="/" className={styles.link}>
              About Us
            </Link>
        
            <Link href="/comps/courses" className={styles.link}>
              All Courses
            </Link>

            <Link href="/" className={styles.link}>
              Blog
            </Link>

            <Link href="/" className={styles.link}>
              Contact Us
            </Link>
          </div>

          <div className={styles.container_items_4}>
            <div className={styles.container_items_4_header}>
              <h1>Have a Questions?</h1>
            </div>

            <div className={styles.container_items_4_des}>
              <p>Kumasi, Ghana</p>
              <p>+23359703145</p>
              <p>ksakyiasumadu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
