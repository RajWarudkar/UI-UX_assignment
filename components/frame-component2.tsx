import type { NextPage } from "next";
import Rectanglecopy from "./rectanglecopy";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.bgParent}>
      <img className={styles.bgIcon} alt="" src="/bg-3.svg" />
      <div className={styles.todayBeginsWrapper}>
        <h1 className={styles.todayBegins}>Today begins</h1>
      </div>
      <h1 className={styles.theJourneyTo}>{`the journey to `}</h1>
      <div className={styles.aNewYouWrapper}>
        <h1 className={styles.aNewYou}>a new you</h1>
      </div>
      <div className={styles.frameWrapper}>
        <Rectanglecopy />
      </div>
    </div>
  );
};

export default FrameComponent2;
