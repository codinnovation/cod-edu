import React, { useState, useEffect } from "react";
import styles from "../../../styles/testimony.module.css";
import { auth, db } from "@/pages/api/firebase";
import { ref, get } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonyData, setTestimonyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "testimony");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setTestimonyData(dataArray);
        } else {
          setTestimonyData([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setTestimonyData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
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
        <div className={styles.container_header}>
          <span>Testimonial</span>
          <h1>Our Successful Students</h1>
        </div>

        {isVisible && (
          <div className={styles.container_items}>
            {testimonyData.map((data) => (
              <div className={styles.container_items_box} key={data.key}>
                <div className={styles.message}>
                  <p>
                    {data?.LearnerMessage}
                  </p>
                </div>
                <div className={styles.header}>
                  <h1>{data?.LearnerName}</h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
