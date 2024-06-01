import React from "react";
import styles from "../../../styles/book-session.module.css";
import Layout from "@/pages/layout";
import withSession from "@/lib/session";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, get } from "firebase/database";
import { auth, db } from "@/pages/api/firebase";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Book a face to face learning session</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <h1> Book Your Face-to-Face Learning Session</h1>
            <p>
              Take your learning to the next level with personalized instruction
            </p>
          </div>

          <div className={styles.containerItems}>
            <div className={styles.containerIntroduction}>
              <p>
                Welcome to our Face-to-Face Learning Booking page! We are excited
                to offer personalized instruction to supplement our online
                courses. Our expert instructors are ready to guide you through
                your IT and programming journey.
              </p>
            </div>

            <div className={styles.containerBenefits}>
              <div className={styles.containerBenefitsHeader}>
                <h1>Benefits</h1>
              </div>

              <div className={styles.containerBenefitsList}>
                <ul>
                  <li>
                    Personalized Attention: Get tailored guidance and feedback
                  </li>
                  <li>
                    Improved Understanding: Clarify concepts and overcome
                    challenges
                  </li>
                  <li>
                    Hands-on Practice: Work on projects with expert supervision
                  </li>
                  <li>
                    Flexible Scheduling: Choose a time and date that suits you
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.containerBookingForm}>
              <div className={styles.formHeader}>
                <h1>Booking Form</h1>
              </div>

              <form>
                <div className={styles.inputFields}>
                  <div className={styles.field}>
                    <label>Full Name</label>
                    <input placeholder="Enter your full name here..." />
                  </div>
                  <div className={styles.field}>
                    <label>Phone Number</label>
                    <input placeholder="Enter your phone number here..." />
                  </div>
                  <div className={styles.field}>
                    <label>Select Course</label>
                    <select>
                      <option></option>
                      <option>Website Development</option>
                      <option>JavaScript Programming Language</option>
                      <option>HTML</option>
                      <option>CSS</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Choose a Date</label>
                    <input placeholder="Choose a date here..." type="date" />
                  </div>
                  <div className={styles.field}>
                    <label>Days</label>
                    <select>
                      <option></option>
                      <option>One Week</option>
                      <option>Two Weeks</option>
                      <option>Three Weeks</option>
                      <option>Four Weeks</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Notes</label>
                    <input placeholder="Additional Notes here..." />
                  </div>
                </div>

                <div className={styles.inputFieldsButton}>
                  <button type="submit">Book Session</button>
                  <h1>Course Price: Ghc 300.00</h1>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
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
