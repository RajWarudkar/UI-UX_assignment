import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.roundedRectangle1Parent}>
      <img
        className={styles.roundedRectangle1}
        alt=""
        src="/rounded-rectangle-1.svg"
      />
      <div className={styles.utEnimAdMinimVeniamQuisWrapper}>
        <div
          className={styles.utEnimAd}
        >{` Ut enim ad minim veniam, quis nostrud exercitation quis nostrudanisi ut aliquip ex ea commodo consequat. `}</div>
      </div>
      <div className={styles.heartSvgrepocomParent}>
        <img
          className={styles.heartSvgrepocomIcon}
          alt=""
          src="/vector-8.svg"
        />
        <div className={styles.titleFrame}>
          <div className={styles.subtitleFrame}>
            <div className={styles.maskParent}>
              <img className={styles.maskIcon} alt="" src="/mask.svg" />
              <b className={styles.jerryHansen}>Jerry Hansen</b>
            </div>
            <div className={styles.cLASSESFrame}>
              <button className={styles.extendedStretchingFrame}>
                <img
                  className={styles.rectangle3Copy6}
                  alt=""
                  src="/rectangle-3-copy-6.svg"
                />
                <b className={styles.learnMore}>Learn More</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
