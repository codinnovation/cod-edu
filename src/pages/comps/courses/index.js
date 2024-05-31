import React, { useEffect, useState } from "react";
import styles from "../../../styles/courses.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useRouter } from "next/router";
import Layout from "@/pages/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, get } from "firebase/database";
import { auth, db } from "@/pages/api/firebase";
import withSession from "@/lib/session";
import Head from "next/head";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(()=>{

  })

  useEffect(() => {
    setIsLoading(true)
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
          setIsLoading(false);
        } else {
          setCourseData([]);
        }
      } catch (error) {
        toast.error("Error fetching Courses")
        console.error("Error fetching data:");
        setCourseData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  function goToCourse(courseData){
    router.push({
      pathname: "/comps/learn-page",
      query: {courseData: JSON.stringify(courseData)},
    });
  }

  return (
    <>
      {isLoading && (
        <>
          <div className={styles.circle_container}>
            <div className={styles.circle}></div>
            <span>Loading...</span>
          </div>
        </>
      )}
    <Head>
      <title>Browse all courses</title>
    </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <span>Our courses</span>
            <h1>Explore Online Courses</h1>
          </div>

          <div className={styles.container_items}>
            {courseData.map((course) => (
              <div className={styles.container_items_box} key={course.key}>
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
                  <button onClick={()=> goToCourse(course)}>
                    Enroll Now!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <ToastContainer/>
    </>
  );
}

export default Index;

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/comps/login",
        permanent: false,
      },
    };
  }

  if (user) {
    req.session.set("user", user);
    await req.session.save();
  }
  return {
    props: {
      user: user,
    },
  };
});
