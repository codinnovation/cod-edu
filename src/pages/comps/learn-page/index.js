import React, { useState, useEffect } from "react";
import styles from "./../../../styles/learn-page.module.css";
import { useRouter } from "next/router";
import withSession from "@/lib/session";
import Head from "next/head";

function Index() {
  const [courseInfo, setCourseInfo] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const { courseData } = router.query;
  const parsedCourseData = courseData ? JSON.parse(courseData) : null;

  useEffect(() => {
    setIsLoading(true)
    if (parsedCourseData) {
      setCourseInfo(parsedCourseData);
      setIsLoading(false)
    }
  }, []);

  const handleCourseClick = (courseKey) => {
    setSelectedCourse(courseKey);
  };

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
      <title>{courseInfo?.CourseTitle}</title>
    </Head>
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>{`Welcome ${courseInfo?.CourseTitle}`}</h1>
        </div>

        <div className={styles.container_nav}>
          {Object.entries(courseInfo?.SubCourses || {}).map(([key, value]) => (
            <h1 key={key} onClick={() => handleCourseClick(key)}>
              Course {value.Course}
            </h1>
          ))}
        </div>

        <div className={styles.container_content_container}>
          {selectedCourse && (
            <div className={styles.container_content}>
              <div className={styles.container_content_title}>
                <h1>{` ${courseInfo?.SubCourses[selectedCourse].courseBodyTitle}`}</h1>
              </div>

              <div className={styles.container_content_body_video}>
                <iframe
                  width="424"
                  height="540"
                  src={`${courseInfo?.SubCourses[selectedCourse]?.courseVideo || "Loading..."}`}
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              <div className={styles.container_content_body}>
                <p>{courseInfo?.SubCourses[selectedCourse].courseBody}</p>
              </div>
            </div>
          )}
        </div>
      </div>
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
