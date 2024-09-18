import React, { useState, useEffect } from "react";
import styles from "../../styles/login.module.css";
import Head from "next/head";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { googleProvider, auth } from "../../pages/api/firebase";
import { signInWithPopup } from "firebase/auth";

function Index() {
  const router = useRouter();
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  function SiginWithEmailPage() {
    setIsLinkClicked(true);
    setTimeout(() => {
      router.push("/login/email");
      setIsLinkClicked(false);
    }, 1500);
  }

  function createAccountPage() {
    setIsLinkClicked(true);
    setTimeout(() => {
      router.push("/sign-up");
      setIsLinkClicked(false);
    }, 1500);
  }

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Send a request to the server to save the user session
      const response = await fetch("/api/set-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
      });

      if (response.ok) {
        router.push("/home");
      } else {
        console.error("Failed to set session");
      }
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <>
      {isLinkClicked && (
        <div className={styles.loadingContainer}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}

      <Head>
        <title>Welcome To Code Mentor</title>
        <meta name="description" content="Welcome To Code Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1-1.png" />
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <div className={styles.closeIcon}>
            <CloseIcon className={styles.icon} />
          </div>
          <div className={styles.loginFormContent}>
            <div className={styles.loginHeader}>
              <h1>Log in to COD DevReel</h1>
            </div>

            <div className={styles.loginOptions}>
              <div className={styles.option} onClick={signUpWithGoogle}>
                <GoogleIcon className={styles.icon} />
                <h1>Continue with Google</h1>
              </div>
            </div>

            <div className={styles.createAccount}>
              <p>Don&apos;t have account?</p>
              <p>Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
