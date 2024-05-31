import React from "react";
import styles from "../../../styles/newsletter.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <h1>Newsletter - Stay tuned and get the latest updates</h1>
          </div>

          <div className={styles.container_items_2}>
            <a
              href="https://chat.whatsapp.com/GgDxbhcofnIBTYpioj6fk2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Click to join our WhatsApp group</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
