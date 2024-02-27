import type { NextPage } from "next";
import styles from "./rectanglecopy.module.css";

const Rectanglecopy: NextPage = () => {
  return (
    <button className={styles.rectangle3Copy14Parent}>
      <img
        className={styles.rectangle3Copy14}
        alt=""
        src="/rectangle-3-copy-14.svg"
      />
      <b className={styles.startFreeTrial}>Start Free Trial</b>
    </button>
  );
};

export default Rectanglecopy;
