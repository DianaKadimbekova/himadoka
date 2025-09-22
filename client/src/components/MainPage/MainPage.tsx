import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "../MainPage/MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <div className={styles.box}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
