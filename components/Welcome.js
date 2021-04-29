import styles from "../styles/Home.module.css";
import "../node_modules/bulma/css/bulma.css";
import { useState } from "react";

const Welcome = () => {
  const [title, setTitle] = useState("WELCOME");

  return (
    <div className={styles.welcome}>
      <span
        className={styles.title}
        onMouseEnter={() => setTitle("WELCOME SENPAI")}
        onMouseLeave={() => setTitle("WELCOME")}
      >
        {title}
      </span>
      <span className={styles.subtitle}>Anime Fans</span>
    </div>
  );
};

export default Welcome;
