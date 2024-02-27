import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header-logo-container.module.css";

export type HeaderLogoContainerType = {
  rectangle?: string;
  harlowSophia?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const HeaderLogoContainer: NextPage<HeaderLogoContainerType> = ({
  rectangle,
  harlowSophia,
  propPadding,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.headerLogoContainer}>
      <img className={styles.bgIcon} alt="" src="/bg-13.svg" />
      <div className={styles.image}>
        <img className={styles.vectorIcon} alt="" src="/vector-19.svg" />
        <img className={styles.rectangleIcon} alt="" src={rectangle} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.harlowSophiaParent} style={frameDivStyle}>
          <b className={styles.harlowSophia}>{harlowSophia}</b>
          <div className={styles.yogaDance}>Yoga Dance</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.fbParent}>
            <img className={styles.fbIcon} alt="" src="/fb-1.svg" />
            <img
              className={styles.facebook176Icon}
              alt=""
              src="/facebook176.svg"
            />
          </div>
          <div className={styles.twitterParent}>
            <img className={styles.twitterIcon} alt="" src="/google.svg" />
            <img
              className={styles.twitter154Icon}
              alt=""
              src="/twitter154.svg"
            />
          </div>
          <div className={styles.googleParent} style={frameDiv1Style}>
            <img className={styles.googleIcon} alt="" src="/google.svg" />
            <h3 className={styles.g}>G</h3>
          </div>
          <div className={styles.pinterestParent}>
            <img className={styles.pinterestIcon} alt="" src="/google.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-21.svg" />
          </div>
        </div>
      </div>
      <button className={styles.roundedRectangle1Copy6Parent}>
        <img
          className={styles.roundedRectangle1Copy6}
          alt=""
          src="/rounded-rectangle-1-copy-6-4.svg"
        />
        <b className={styles.viewProfile}>View Profile</b>
      </button>
    </div>
  );
};

export default HeaderLogoContainer;
