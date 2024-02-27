import type { NextPage } from "next";
import styles from "./bg.module.css";

const Bg: NextPage = () => {
  return (
    <div className={styles.bg}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frameParent}>
        <div className={styles.signUpForNewsletterParent}>
          <h1 className={styles.signUpFor}>Sign Up for newsletter!</h1>
          <i className={styles.exclusiveOfferFor}>
            Exclusive Offer for new member! Sign up to day!
          </i>
        </div>
        <div className={styles.backgroundImage}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.emailAdress}>Email adress ...</div>
            <img className={styles.sendEmailIcon} alt="" src="/sendemail.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bg;
