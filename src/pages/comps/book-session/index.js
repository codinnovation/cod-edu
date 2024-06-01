import React, { useState } from "react";
import styles from "../../../styles/book-session.module.css";
import Layout from "@/pages/layout";
import withSession from "@/lib/session";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, push } from "firebase/database"; // Modified imports
import { auth, db } from "@/pages/api/firebase";
import Head from "next/head";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [days, setDays] = useState(0);
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the data object
      const newBooking = {
        name: formData.name,
        number: formData.number,
        course: course,
        days: days,
        price: price,
        date: formData.date,
      };

      // Push the data to Firebase database
      const newBookingRef = push(ref(db, "bookSession"), newBooking);
      const newBookingKey = newBookingRef.key;
      toast.success("Booking submitted successfully!");
      
      router.push("/comps/");
      return newBookingKey;
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("An error occurred while submitting the booking.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to calculate the price based on the selected duration and course
  const calculatePrice = (days, course) => {
    let basePrice = 0;
    switch (course) {
      case "HTML Basics":
      case "CSS Basics":
        basePrice = 40;
        break;
      case "JavaScript Fundamentals":
        basePrice = 50;
        break;
      case "Python Fundamentals":
        basePrice = 50;
        break;
      default:
        basePrice = 0;
        break;
    }

    const additionalPricePerWeek = basePrice; // Additional price per week
    const additionalWeeks = Math.ceil((days - 7) / 7); // Calculate additional weeks

    // Calculate total price
    const totalPrice = basePrice + additionalPricePerWeek * additionalWeeks;
    return totalPrice;
  };

  // Function to handle changes in the days select
  const handleDaysChange = (event) => {
    const selectedDays = parseInt(event.target.value);
    setDays(selectedDays);
    const totalPrice = calculatePrice(selectedDays, course);
    setPrice(totalPrice);
  };

  // Function to handle changes in the course select
  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setCourse(selectedCourse);
    const totalPrice = calculatePrice(days, selectedCourse);
    setPrice(totalPrice);
  };

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
                Welcome to our Face-to-Face Learning Booking page! We are
                excited to offer personalized instruction to supplement our
                online courses. Our expert instructors are ready to guide you
                through your IT and programming journey.
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

              <form onSubmit={handleFormSubmit}>
                <div className={styles.inputFields}>
                  <div className={styles.field}>
                    <label>Full Name</label>
                    <input
                      placeholder="Enter your full name here..."
                      name="name"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label>WhatsApp Number</label>
                    <input
                      placeholder="Enter your phone number here..."
                      name="number"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label>Select Course</label>
                    <select onChange={handleCourseChange} required>
                      <option value=""></option>
                      <option value="Python Fundamentals">
                        Python Fundamentals
                      </option>
                      <option value="JavaScript Fundamentals">
                        JavaScript Fundamentals
                      </option>
                      <option value="HTML Basics">HTML Basics</option>
                      <option value="CSS Basics">CSS Basics</option>
                      <option value="Frontend Web Development">
                        Frontend Web Development - Beginners
                      </option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Choose a Date</label>
                    <input
                      placeholder="Choose a date here..."
                      type="date"
                      name="date"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label>Days</label>
                    <select onChange={handleDaysChange} required>
                      <option value=""></option>
                      <option value="7">One Week</option>
                      <option value="14">Two Weeks</option>
                      <option value="21">Three Weeks</option>
                      <option value="28">Four Weeks</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>{"Notes (optional)"}</label>
                    <input placeholder="Additional Notes here..." />
                  </div>
                </div>

                <div className={styles.inputFieldsButton}>
                  <button type="submit">Book Session</button>
                  <h1>Course Price: Ghc {price.toFixed(2)}</h1>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
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
