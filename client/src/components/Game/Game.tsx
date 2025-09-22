import styles from "./Game.module.scss";

export const Game = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.box}>
          <canvas id="game"></canvas>
        </div>
      </div>
    </>
  );
};
