import { useEffect, useState } from "react";
import aside_bg from "../../assets/image/pink2.jpg";
import { SliderMusic } from "../../components/SliderMusic/SliderMusic";
import styles from "./Aside.module.scss";
import { Calendar } from "./Calendar/Calendar";

export const Aside = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(
      time.getSeconds()
    )}`;
  };

  const formatDate = (date) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}`;
  };

  return (
    <>
      <aside
        className={styles.aside}
        style={{
          background: `url(${aside_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "200px",
        }}
      >
        <div className={styles.aside__time}>
          <h4 className={`${styles["aside__time--title"]}`}>Time:</h4>
          <p className={`${styles["aside__time--date"]}`}>
            {formatTime(currentTime)}
          </p>
        </div>
        <div className={styles.aside__time}>
          <h4 className={`${styles["aside__time--title"]}`}>Date:</h4>
          <p className={`${styles["aside__time--date"]}`}>
            {formatDate(currentTime)}
          </p>
        </div>
        <Calendar />
        <SliderMusic />
        {/*<Game />*/}
      </aside>
    </>
  );
};
