import footer_bg from "../../assets/image/pink.jpg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer
        className={styles.footer}
        style={{
          background: `url(${footer_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className={styles.footer__email}>Email:himadokaa@gmail.com</p>
      </footer>
    </>
  );
};
