import React from "react";
import styles from "../../../styles/team.module.css";
import Layout from "@/pages/layout";
import Image from "next/image";

function Index() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <h1>Meet the team</h1>
          </div>

          <div className={styles.container_items_container}>
            <div className={styles.container_item}>
              <Image
                src="/IMG_2950 (1).PNG"
                width={500}
                height={500}
                alt="ceo_image"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Index;