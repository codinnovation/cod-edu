import React, { useEffect, useState } from "react";
import styles from "../../../styles/popular-course.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useRouter } from "next/router";
import Link from "next/link";
import { ref, get } from "firebase/database";
import { auth, db } from "@/pages/api/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "courses");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setCourseData(dataArray);
        } else {
          setCourseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setCourseData([]);
        toast.error("Error fetching Courses")
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
      if (window.scrollY >= 800) {
        setResponsiveIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function gotoAllCourses() {
    router.push("/comps/courses/");
  }

  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.container_header}>
          <span>Our courses</span>
          <h1>Explore Our Popular Online Courses</h1>
        </div>
        {isVisible && (
          <div className={styles.container_items}>
            {courseData.slice(1, 4).map((course) => (
              <div
                className={`${styles.container_items_box} ${
                  responsiveIsVisible
                    ? styles.container_items_box_responsive
                    : ""
                }`}
                key={course.key}
              >
                <div className={styles.container_items_box_header}>
                  <LocalLibraryIcon
                    className={styles.container_items_box_icon}
                  />
                  <h1>{course?.CourseTitle || "Loading..."}</h1>
                </div>
                <div className={styles.tutor}>
                  <span>By: {course?.CourseTutor || "Loading..."}</span>
                </div>

                <div className={styles.price}>
                  <h1>{course?.CoursePrice || "Loading..."}</h1>
                </div>

                <div className={styles.container_items_box_button}>
                  <button onClick={gotoAllCourses}>Learn Now!</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.container_button}>
          <Link href="/comps/courses" className={styles.link}>
            View All
          </Link>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Index;
