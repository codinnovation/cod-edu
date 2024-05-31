import React, {useState, useEffect} from "react";
import styles from "../../../styles/glance.module.css";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { ref, get } from "firebase/database";
import { auth, db } from "@/pages/api/firebase";

function Index() {
  const [courseData, setCourseData] = useState([]);


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
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>

          <div className={styles.container_items_1}>
            <SchoolIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>90</h1>
              <p>success stories</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <EmojiPeopleIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>2</h1>
              <p>Trusted Tutors</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <CalendarMonthIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>1,020</h1>
              <p>schedules</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <LocalLibraryIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>{courseData?.length}</h1>
              <p>courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
