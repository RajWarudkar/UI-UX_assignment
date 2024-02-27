import type { NextPage } from "next";
import styles from "./line-divider.module.css";

const LineDivider: NextPage = () => {
  return (
    <div className={styles.lineDivider}>
      <div className={styles.aprilText}>
        <div className={styles.frameApril}>
          <div className={styles.rectangleCopy}>
            <div className={styles.wordPressThemeInfoFrame}>
              <img
                className={styles.allrightSymbolIcon}
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <div className={styles.tellEmail}>
              <div className={styles.topFrame}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle-4@2x.png"
                />
                <div className={styles.wrapperImage}>
                  <img className={styles.imageIcon} alt="" src="/image-3.svg" />
                </div>
                <div className={styles.stretchYourBodyWrapper}>
                  <h2 className={styles.stretchYourBody}>stretch your body</h2>
                </div>
                <div className={styles.searchBar}>
                  <div className={styles.socialMediaLinks}>
                    <div className={styles.mainMenu}>
                      <div className={styles.apirlst}>
                        <img
                          className={styles.frameCLASSESFRAME}
                          alt=""
                          src="/vector-18.svg"
                        />
                        <div className={styles.april1st2016}>
                          April 1st, 2016
                        </div>
                      </div>
                      <div className={styles.image}>
                        <img
                          className={styles.clockCheckSvgrepocomIcon}
                          alt=""
                          src="/clockcheck-svgrepocom.svg"
                        />
                        <div className={styles.april1st20161}>
                          1:00 pm - 3:30 pm
                        </div>
                      </div>
                      <div className={styles.menuItemShop}>
                        <img
                          className={styles.locationPinAlt1SvgrepocomIcon}
                          alt=""
                          src="/locationpinalt1-svgrepocom.svg"
                        />
                        <div className={styles.santaMonicaLaContainer}>
                          <span></span>
                          <span className={styles.santaMonicaLa}>
                            893 Santa Monica, LA, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.frameFrametwitterYourchanel}>
                    <img
                      className={styles.rectangle3Copy6}
                      alt=""
                      src="/rectangle-3-copy-6-3.svg"
                    />
                    <b className={styles.learnMore}>Learn More</b>
                  </button>
                </div>
              </div>
              <div className={styles.allright}>
                <img
                  className={styles.prevnextIcon}
                  alt=""
                  src="/prevnext.svg"
                />
                <img
                  className={styles.allrightChild}
                  alt=""
                  src="/arrow-3.svg"
                />
                <img
                  className={styles.allrightItem}
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
            </div>
            <div className={styles.wordPressThemeInfoFrame1}>
              <img
                className={styles.rectangleIcon2}
                alt=""
                src="/rectangle-5@2x.png"
              />
            </div>
          </div>
          <div className={styles.searchBarFrame}>
            <div className={styles.menuToggleIcon}>
              <img
                className={styles.rectangle3Copy14}
                alt=""
                src="/rectangle-3-copy-14-1.svg"
              />
              <b className={styles.viewAllEvents}>View All Events</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineDivider;
