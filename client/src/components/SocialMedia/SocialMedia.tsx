import bgImage from "../../assets/image/7_bg.jpg";
import styles from "../SocialMedia/SocialMedia.module.scss";

export const SocialMedia = () => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          YouTube(sport)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          TicTok(sport)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          TicTok(art)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          TicTok(main)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram channel(main)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram social(sport)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram bot(sport)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mobile App(sport)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord(sport, main, art)
        </a>
        <a
          className={styles.social}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website Work
        </a>
      </div>
    </>
  );
};
