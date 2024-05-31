import React from "react";
import styles from "../../../styles/blog.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_header}>
          <span>Our Blog</span>
          <h1>Recent From Blog</h1>
        </div>

        <div className={styles.container_items}>
          <div className={styles.container_items_box}>
            <h1>Upcoming</h1>
          </div>
          <div className={styles.container_items_box}>
            <h1>Upcoming</h1>
          </div>
          <div className={styles.container_items_box}>
            <h1>Upcoming</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
