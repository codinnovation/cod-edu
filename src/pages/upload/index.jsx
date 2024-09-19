import React, { useState } from "react";
import styles from "../../styles/upload.module.css";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { db } from "../api/firebase";
import { ref, push } from "firebase/database";
import withSession from "@/lib/session";

function Upload() {
  const [courseData, setCourseData] = useState({
    chooseCourse: "",
    courseVdeo: null,
    courseVideoURL: "",
    courseTitle: "",
    courseDescription: "",
    courseTutor: "",
    tutorTitle: ""
  });

  const [progress, setProgress] = useState(0); // New state for progress

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setCourseData({
      ...courseData,
      courseVdeo: e.target.files[0] // Assign the video file object
    });
  };

  const handleUploadVideo = (e) => {
    e.preventDefault();

    const storage = getStorage();
    const videoFile = courseData.courseVdeo;

    if (!videoFile) {
      console.error("No video file selected");
      return;
    }

    const videoRef = storageRef(storage, `courses/${videoFile.name}`);
    const uploadTask = uploadBytesResumable(videoRef, videoFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercentage); // Update progress
      },
      (error) => {
        console.error("Upload Error", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const updatedCourseData = {
            ...courseData,
            courseVideoURL: downloadURL
          };

          await push(ref(db, `${courseData.chooseCourse}`), updatedCourseData);
          console.log("Video Uploaded successfully");

          // Reset form state after successful upload
          setCourseData({
            chooseCourse: "",
            courseVdeo: null,
            courseVideoURL: "",
            courseTitle: "",
            courseDescription: "",
            courseTutor: "",
            tutorTitle: ""
          });
          setProgress(0); // Reset progress after upload
        } catch (error) {
          console.error("Database error: " + error);
        }
      }
    );
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContainerHeader}>
        <h1>Upload Video Below</h1>
      </div>
      <div className={styles.uploadContent}>
        <div className={styles.uploadForm}>
          <div className={styles.field}>
            <label>Choose Course</label>
            <select
              name="chooseCourse"
              value={courseData.chooseCourse}
              onChange={handleChangeInput}
            >
              <option></option>
              <option value="IntroductionToProgramming">
                Introduction To Programming
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Course Video</label>
            <input type="file" name="courseVdeo" onChange={handleFileChange} />
          </div>

          <div className={styles.field}>
            <label>Course Title</label>
            <input
              type="text"
              name="courseTitle"
              value={courseData.courseTitle}
              onChange={handleChangeInput}
            />
          </div>

          <div className={styles.field}>
            <label>Course Description</label>
            <input
              type="text"
              name="courseDescription"
              value={courseData.courseDescription}
              onChange={handleChangeInput}
            />
          </div>

          <div className={styles.field}>
            <label>Course Tutor</label>
            <input
              type="text"
              name="courseTutor"
              value={courseData.courseTutor}
              onChange={handleChangeInput}
            />
          </div>

          <div className={styles.field}>
            <label>Tutor Title</label>
            <input
              type="text"
              name="tutorTitle"
              value={courseData.tutorTitle}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        )}

        <div className={styles.uploadContentButton}>
          <button onClick={handleUploadVideo}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  const currentPath = req ? req.url : window.location.pathname;
  if (!user || user.email !== "ksakyiasumadu@gmail.com") {
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
