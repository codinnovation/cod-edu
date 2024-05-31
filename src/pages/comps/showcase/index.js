import React from "react";
import styles from "../../../styles/showcase.module.css";
import Image from "next/image";
import FirstHeader from "../first-Header";
import SecondHeader from "../second-Header";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter()

  const goToWhatsApp = () => {
    const phoneNumber = "+233597063145";
    const url = `whatsapp://send?phone=${phoneNumber}`;
    window.location.href = url;
  };

  return (
    <>
      <div className={styles.container}>
        <FirstHeader />
        <SecondHeader />
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <span>welcome to cod e-learning</span>
            <h1>Best Online education expertise</h1>
            <p>
              Embark on your learning journey with the courage to explore new
              horizons, execute your newfound knowledge with unwavering
              obedience to the task at hand, and practice diligently with
              discipline to refine your skills and achieve mastery
            </p>

            <div className={styles.container_btn}>
              <button onClick={goToWhatsApp}>Contact us</button>
              <button onClick={() => router.push("comps/courses")}>get started now</button>
            </div>
          </div>

          <div className={styles.container_items_2}>
            <Image
              src="/11.png"
              alt="page_logo"
              width={700}
              height={700}
              className={styles.container_image}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
