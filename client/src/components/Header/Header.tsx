import { useState } from "react";
import { Link } from "react-router-dom";
import avabg from "../../assets/image/1_bd.jpg";
import bgImage from "../../assets/image/header_bg.jpg";
import { Account } from "../../components/Account/Account";
import styles from "../Header/Header.module.scss";

export const Header = () => {
  const [openAccount, setOpenAccount] = useState(false);

  const openModal = () => setOpenAccount(true);
  const closeModal = () => setOpenAccount(false);

  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.header__title}>
          <h1 className={`${styles["header__title--main"]}`}>ひまどか</h1>
          <h2 className={`${styles["header__title--sub"]}`}>
            Hi - ma - do - ka
          </h2>
        </div>
        <div className={styles.header__left}>
          <a
            href={"/account"}
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            <img src={avabg} alt="img" className={styles.header__image} />
          </a>
          <p className={styles.header__des}>descriprion 1111</p>
          <div className={styles.header__links}>
            <Link className={styles.header__link} to="/">
              About me
            </Link>
            <Link className={styles.header__link} to="/social">
              SocialMedia
            </Link>
            <Link className={styles.header__link} to="/achiv">
              Achievements
            </Link>
            <Link className={styles.header__link} to="/posts">
              Posts
            </Link>
            <Link className={styles.header__link} to="/register">
              Registration
            </Link>
          </div>
          {openAccount && <Account closeModal={closeModal} />}
        </div>
      </header>
    </>
  );
};
