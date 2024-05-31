import React, { useState, useEffect } from "react";
import styles from "../../../styles/benefits.module.css";
import Image from "next/image";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 23) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setResponsiveIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <Image
              src="/showcase.png"
              width={500}
              height={400}
              alt="benefits_img"
              className={styles.container_items_1_image}
            />
          </div>

          <div className={styles.container_items_2}>
            <div>
              <span>LEARN ANYTHING</span>
              <h1>Benefits About Online Learning Expertise</h1>

              {isVisible && (
                <div>
                  <div
                    className={`${styles.container_items_2_box} ${
                      responsiveIsVisible
                        ? styles.container_items_2_box_responsive
                        : ""
                    }`}
                  >
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Flexibility</h1>
                      <p>
                        Learn at your own pace, anytime, and from anywhere. Cod
                        E-learning allows you to fit learning into your busy
                        schedule, whether that&apos;s during your daily commute,
                        lunch break, or late at night
                      </p>
                    </div>
                  </div>

                  <div className={styles.container_items_2_box}>
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Accessibility</h1>
                      <p>
                        Access courses from anywhere with an internet
                        connection. Whether you&apos;re in a rural area or a bustling
                        city, Cod E-learning brings education to your doorstep
                      </p>
                    </div>
                  </div>

                  <div className={styles.container_items_2_box}>
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Self-paced learning</h1>
                      <p>
                        Review and accelerate your learning as needed. With Cod
                        E-learning, you can revisit difficult topics or speed
                        through familiar material, allowing you to learn more
                        efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
