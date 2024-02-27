import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.pageTitleFrame}>
        <div className={styles.wrapperYogaStylesSection}>
          <img
            className={styles.yogaStylesSection}
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <img className={styles.heartSvgRectangle} alt="" src="/vector-7.svg" />
      </div>
    </div>
  );
};

export default FrameComponent;
