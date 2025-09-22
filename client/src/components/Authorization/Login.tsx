import axios from "axios";
import { useEffect } from "react";
import login_bd from "../../assets/image/login_bd.jpg";
import styles from "./Register.module.scss";

export const Login = () => {
  useEffect(() => {
    const data = async () => {
      try {
        const usersData = await axios.get("/api/users");
        console.log(usersData);
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);
  return (
    <>
      <div
        style={{
          background: `url(${login_bd})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form className={styles.form}>
          <label htmlFor="femail" className={styles.form__label}>
            Email
          </label>
          <input
            type="text"
            id="femail"
            placeholder="Email"
            className={styles.form__input}
            required
          />

          <label htmlFor="fpassword" className={styles.form__label}>
            Password
          </label>
          <input
            type="password"
            id="fpassword"
            placeholder="Password"
            className={styles.form__input}
            required
          />
          <button className={styles.form__button}>login</button>
        </form>
      </div>
    </>
  );
};
