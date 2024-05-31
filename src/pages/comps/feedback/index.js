import React, { useState, useEffect } from "react";
import styles from "../../../styles/feedback.module.css";
import { db } from "@/pages/api/firebase";
import { ref, push } from "firebase/database";
import Layout from "@/pages/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import withSession from "@/lib/session";

function Index() {
  const [formData, setFormData] = useState({
    LearnerName: "",
    LearnerMessage: "",
  });

  const router = useRouter()

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const newStudentRef = push(ref(db, "testimony"), formData);
      const newStudentKey = newStudentRef.key;
      toast.success("Feedback Submitted");
      router.push("/comps/")
      return newStudentKey;
    } catch (error) {
      console.error("Error submitting Student:");
      toast.success("Error Occured");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <h1>Tell Us Your Experience With Cod E-Learning</h1>
            <span>Fill in the spaces</span>
          </div>

          <div className={styles.container_items}>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.field}>
                <label>Your Name</label>
                <input
                  value={formData.LearnerName}
                  name="LearnerName"
                  placeholder="your name goes here..."
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>Your Message</label>
                <input
                  value={formData.LearnerMessage}
                  name="LearnerMessage"
                  placeholder="your messages goes here.."
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.container_button}>
                <button type="submit">Submit</button>
              </div>
            </form>
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
 