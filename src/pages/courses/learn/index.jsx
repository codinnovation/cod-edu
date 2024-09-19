import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../../styles/courses/learn.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import withSession from "@/lib/session";

function Learn() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Welcome To Code Mentor | Learn page</title>
        <meta name="description" content="Welcome To Code Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1-1.png" />
      </Head>
      <div className={styles.learnContainer}>
        <div className={styles.learnContent}>
          <div className={styles.learnHeader}>
            <div className={styles.learnNumberOfPages}>
              <h1>2 / 5</h1>
            </div>

            <div className={styles.learnNavigation}>
              <KeyboardArrowLeftIcon className={styles.icon} />
              <KeyboardArrowRightIcon className={styles.icon} />
            </div>
          </div>

          <div className={styles.learnVideo}>
            <video controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.learnVideoDescription}>
            <div className={styles.title}>
              <h1>Title : Learn HTML Basics for website structure</h1>
            </div>

            <div className={styles.description}>
              <p>
                Description: through creating dynamic websites and web
                applications. Perfect for those looking to specialize in
                front-end development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.menuContainer}
        onClick={() => router.push("/courses")}
      >
        <ArrowBackIosIcon className={styles.icon} />
      </div>
    </>
  );
}

export default Learn;

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  const currentPath = req ? req.url : window.location.pathname;
  if (!user) {
    return {
      redirect: {
        destination: `/login?r=1&redirect=${currentPath}`,
        permanent: false
      }
    };
  }

  if (user) {
    req.session.set("user", user);
    await req.session.save();
  }

  return {
    props: {
      user: user
    }
  };
});
