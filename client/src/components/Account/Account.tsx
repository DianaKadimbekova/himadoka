import { useState } from "react";
import avabg from "../../assets/image/1_bd.jpg";
import account_bg from "../../assets/image/3_bg.jpg";
import footer_bg from "../../assets/image/white.jpg";
import styles from "../Account/Account.module.scss";

const countries = { Ukraine: "", Japan: "" };

interface AccountProps {
  closeModal: () => void;
}

export const Account: React.FC<AccountProps> = ({ closeModal }) => {
  const [dataUser, setDataUser] = useState({ userName: "" });

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={avabg} alt="img" className={styles.header__image} />
          <p className={styles.header__userName}>userName</p>
          <select name="" id="" className={styles.header__countries}>
            <option
              value=""
              className={`${styles["header__countries--option"]}`}
            >
              1
            </option>
            <option value="">2</option>
          </select>
          <button onClick={closeModal} className={styles.header__close}>
            ×
          </button>
        </header>
        <aside></aside>
        <aside></aside>
        <main className={styles.main}>
          <img src={account_bg} alt="account_bg" className={styles.main__bg} />
        </main>
        <footer className={styles.footer}>
          <img src={footer_bg} alt="" className={styles.footer__bg} />
        </footer>
      </div>
    </>
  );
};
