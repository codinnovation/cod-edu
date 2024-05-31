import React from "react";
import styles from "../../../styles/first-Header.module.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import LogoImage from '../../../../public/logo-2.png'

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_item_1}>
            <Image
              src={LogoImage}
              width={500}
              height={500}
              alt="cod_innovation"
              className={styles.logo}
            />{" "}
            <span>Online education & learning</span>
          </div>

          <div className={styles.container_item_2}>
            <dv className={styles.container_item_2_icon}>
              <AccessTimeOutlinedIcon className={styles.icon_1} />
            </dv>
            <div className={styles.container_item_2_des}>
              <h1>Monday - Friday</h1>
              <span>8:00AM - 8:00PM</span>
            </div>
          </div>

          <div className={styles.container_item_3}>
            <dv CallOutlinedIcon={styles.container_item_2_icon}>
              <CallOutlinedIcon className={styles.icon_1} />
            </dv>
            <div className={styles.container_item_3_des}>
              <h1>Call Us</h1>
              <span>+233 597 063 145</span>
            </div>
          </div>

          <div className={styles.container_item_4}>
            <FacebookOutlinedIcon className={styles.social_icons} />
            <XIcon className={styles.social_icons} />
            <InstagramIcon className={styles.social_icons} />
            <WhatsAppIcon className={styles.social_icons} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
