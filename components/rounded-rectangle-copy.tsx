import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./rounded-rectangle-copy.module.css";

const RoundedRectangleCopy: NextPage = () => {
  return (
    <div className={styles.decorParent}>
      <img className={styles.decorIcon} alt="" src="/decor.svg" />
      <img className={styles.imageIcon} alt="" src="/image-1.svg" />
      <div className={styles.theMagicHappensWhenYouRolWrapper}>
        <h1 className={styles.theMagicHappens}>
          The magic happens when you roll out your mat at Yoga center.
        </h1>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.improveFlexibilityParent}>
                <b className={styles.improveFlexibility}>Improve Flexibility</b>
                <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    sed do eiusmod tempor incidia
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.wrapperVectorParent}>
                    <div className={styles.wrapperVector}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/twitter-frame.svg"
                      />
                    </div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navBarLinksParent}>
              <div className={styles.navBarLinks}>
                <b className={styles.buildMuscleStrength}>
                  Build muscle strength
                </b>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incidia
                </div>
              </div>
              <div className={styles.newsletter}>
                <div className={styles.mainText}>
                  <div className={styles.wrapperSubText}>
                    <img
                      className={styles.subTextIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <img
                    className={styles.imageFrameIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.twitterLinkParent}>
              <div className={styles.twitterLink}>
                <div className={styles.openingHours}>
                  <div className={styles.newsletter1}>
                    <div className={styles.contactSection}>
                      <div className={styles.wrapperLatestTweets}>
                        <img
                          className={styles.latestTweetsIcon}
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <img
                        className={styles.yourLogoIcon}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.weekdays}>
                  <b className={styles.betterBoneHeath}>Better bone heath</b>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    sed do eiusmod tempor incidia
                  </div>
                </div>
              </div>
              <div className={styles.openingHoursParent}>
                <div className={styles.openingHours1}>
                  <FrameComponent />
                </div>
                <div className={styles.becomeTrainerContainer}>
                  <b className={styles.increaseBloodFlow}>
                    Increase blood flow
                  </b>
                  <div className={styles.loremIpsumDolor3}>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    sed do eiusmod tempor incidia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconSetFilled}>
          <div className={styles.heartsvgrepocom}>
            <div className={styles.newsletterSubscribeFrame}>
              <div className={styles.contactUsInfoFrame}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
                <h1 className={styles.ourCourses}>
                  <span>{`Our `}</span>
                  <span className={styles.courses}>Courses</span>
                </h1>
              </div>
              <i className={styles.hereAreSome}>
                Here are some of the yoga courses we provide
              </i>
            </div>
            <div className={styles.searchBar}>
              <div className={styles.megaMenu}>
                <div className={styles.submenuItem}>
                  <img
                    className={styles.backgroundGradientContainer}
                    alt=""
                    src="/rectangle-1@2x.png"
                  />
                  <h2 className={styles.yinYoga}>Yin Yoga</h2>
                  <div className={styles.monWedFriContainer}>
                    <span className={styles.span}></span>
                    <span className={styles.monWedFri}>{`Mon, Wed, Fri `}</span>
                    <span>
                      <span className={styles.span1}></span>
                      <span>1:00 pm - 3:30 pm</span>
                    </span>
                  </div>
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.yourLogo}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image.svg"
                    />
                    <img
                      className={styles.layer698Copy}
                      loading="lazy"
                      alt=""
                      src="/layer-698-copy@2x.png"
                    />
                  </div>
                  <div className={styles.yinYogaParent}>
                    <h2 className={styles.yinYoga1}>Yin Yoga</h2>
                    <div className={styles.monWedFriContainer1}>
                      <span className={styles.span2}></span>
                      <span
                        className={styles.monWedFri1}
                      >{`Mon, Wed, Fri `}</span>
                      <span>
                        <span className={styles.span3}></span>
                        <span>1:00 pm - 3:30 pm</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedRectangleCopy;
