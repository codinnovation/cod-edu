import React, { useState } from "react";
import Head from "next/head";
import styles from "../../../styles/login.module.css";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Link from "next/link";
import { useRouter } from "next/router";

function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      NotificationManager.error("Please fill in the user name and password");
      return;
    }

    setIsButtonClicked(true);

    try {
      const response = await fetch("/api/create_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
      if (response.ok) {
        NotificationManager.success("Account created successfully");
        router.push("/comps/");
      } else {
        // Registration failed
        const data = await response.json();
        NotificationManager.error(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      NotificationManager.error("Registration failed. Please try again.");
    } finally {
      setIsButtonClicked(false);
    }
  };

  return (
    <>
      {isButtonClicked && (
        <div className={styles.circle_container}>
          <div className={styles.circle}></div>
          <span>Please wait...</span>
        </div>
      )}
      <Head>
        <title>Create an Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_login}>
            <h2>Create an Account</h2>
          </div>

          <div className={styles.container_form}>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.container_form_input}>
                <label>Email</label>
                <input
                  type="text"
                  id="username"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.container_form_input}>
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  required
                />
                {showPassword ? (
                  <VisibilityOffOutlined
                    className={styles.VisibilityIcon}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    className={styles.VisibilityIcon}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              <div className={styles.container_forget_password}>
                <Link href="/comps/login">Login here</Link>
              </div>

              <button type="submit" className={styles.login_btn}>
                Create
              </button>
            </form>
          </div>
        </div>
        <div className={styles.footer_container}>
          <p>
            &copy;{new Date().getFullYear()} - Cod E-Learning | All Rights
            Reserved
          </p>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
}

export default Index;
