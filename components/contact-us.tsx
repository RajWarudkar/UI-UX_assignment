import type { NextPage } from "next";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.contactUs}>
      <img className={styles.bgIcon} alt="" src="/bg-16.svg" />
      <h2 className={styles.suspendisseSemperRisus}>
        Suspendisse semper risus suscipit consequat dictum. Velit nec ulla
        mcorper ullamcorper,. Claritas est etiam processus dynamicus, qui
        sequituante nibh tincidunt elit!
      </h2>
      <div className={styles.yogaCategories}>
        <div className={styles.categoryFrame}>
          <div className={styles.avatar}>
            <img className={styles.maskIcon} alt="" src="/mask-3.svg" />
            <img
              className={styles.trainerInfoIcon}
              alt=""
              src="/rectangle-10@2x.png"
            />
          </div>
          <div className={styles.searchBar}>
            <div className={styles.mainContent}>
              <b className={styles.yourname}>Yourname</b>
              <div className={styles.webdesign}>Webdesign</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
