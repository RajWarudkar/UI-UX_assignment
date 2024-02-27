import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import RoundedRectangleCopy from "../components/rounded-rectangle-copy";
import FrameComponent1 from "../components/frame-component1";
import IconSetFilled from "../components/icon-set-filled";
import LineDivider from "../components/line-divider";
import Bg from "../components/bg";
import HeaderLogoContainer from "../components/header-logo-container";
import ContactUs from "../components/contact-us";
import HeartIconContainerFrame from "../components/heart-icon-container-frame";
import styles from "./index.module.css";

const HeaderLogo: NextPage = () => {
  return (
    <div className={styles.headerLogo}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <img
        className={styles.homepageTitleIcon}
        alt=""
        src="/homepage-title@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
      <FrameComponent3 />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent2 />
          <RoundedRectangleCopy />
          <div className={styles.roundedRectangleCopy}>
            <img className={styles.icon} alt="" src="/icon-1.svg" />
            <img className={styles.bgIcon2} alt="" src="/bg-4.svg" />
            <div className={styles.picoAddressFrame}>
              <img className={styles.dotSlideIcon} alt="" src="/dotslide.svg" />
              <img className={styles.prevIcon} alt="" src="/prev.svg" />
              <img
                className={styles.nextHoverIcon}
                alt=""
                src="/nexthover.svg"
              />
              <img
                className={styles.picoAddressFrameChild}
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <div className={styles.iconSetFilled}>
              <FrameComponent1 />
            </div>
            <div className={styles.iconSetFilled1}>
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
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <div className={styles.titleFrame}>
                    <div className={styles.subtitleFrame}>
                      <div className={styles.maskParent}>
                        <img
                          className={styles.maskIcon}
                          alt=""
                          src="/mask.svg"
                        />
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
            </div>
            <div className={styles.iconSetFilled2}>
              <div className={styles.roundedRectangle1Group}>
                <img
                  className={styles.roundedRectangle11}
                  alt=""
                  src="/rounded-rectangle-1.svg"
                />
                <div className={styles.image}>
                  <img className={styles.frameIcon} alt="" src="/image.svg" />
                  <img
                    className={styles.layer698Copy2}
                    loading="lazy"
                    alt=""
                    src="/layer-698-copy-2@2x.png"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.heartIconWrapper}>
                    <div className={styles.heartIcon}>
                      <div className={styles.bodyPracticeBoxes}>
                        <h2 className={styles.foundationYoga}>
                          {" "}
                          Foundation Yoga
                        </h2>
                      </div>
                      <div className={styles.monWedFriContainer}>
                        <span className={styles.span}></span>
                        <span
                          className={styles.monWedFri}
                        >{`Mon, Wed, Fri `}</span>
                        <span>
                          <span className={styles.span1}></span>
                          <span>1:00 pm - 3:30 pm</span>
                        </span>
                      </div>
                      <div className={styles.newsletters}>
                        <div
                          className={styles.utEnimAd1}
                        >{` Ut enim ad minim veniam, quis nostrud exercitation quis nostrudanisi ut aliquip ex ea commodo consequat. `}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <div className={styles.titleFrame1}>
                      <div className={styles.subtitleFrame1}>
                        <div className={styles.maskGroup}>
                          <img
                            className={styles.maskIcon1}
                            alt=""
                            src="/mask.svg"
                          />
                          <b className={styles.jerryHansen1}>Jerry Hansen</b>
                        </div>
                        <div className={styles.cLASSESFrame1}>
                          <button className={styles.extendedStretchingFrame1}>
                            <img
                              className={styles.rectangle3Copy61}
                              alt=""
                              src="/rectangle-3-copy-6.svg"
                            />
                            <b className={styles.learnMore1}>Learn More</b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactus}>
            <img className={styles.bgIcon3} alt="" src="/bg-5.svg" />
            <div className={styles.roundedHeaderFrame}>
              <IconSetFilled />
              <div className={styles.lifestyleFrame}>
                <h1 className={styles.chooseYourClasses}>
                  Choose Your Classes
                </h1>
                <h1 className={styles.andStartYour}>and Start Your Training</h1>
              </div>
            </div>
            <div className={styles.rectangleShape}>
              <div className={styles.learnMoreButton}>
                <h2 className={styles.bookNow}>Book Now</h2>
                <button className={styles.learnMoreButtonFrame}>
                  <div className={styles.basicYogaFrame}>
                    <img
                      className={styles.calenderSvgrepocomIcon}
                      alt=""
                      src="/calender-svgrepocom.svg"
                    />
                  </div>
                  <div className={styles.bookNow1}>Book Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.emailAddressFrame}>
          <h1 className={styles.latestEvent}>
            <span>{`latest `}</span>
            <span className={styles.event}>event</span>
          </h1>
        </div>
        <div className={styles.contactUsFrame}>
          <i className={styles.joinUsFor}>
            Join us for these awesome yoga events this month
          </i>
        </div>
      </section>
      <section className={styles.iconParent}>
        <img className={styles.icon1} alt="" src="/icon-2.svg" />
        <div className={styles.forma1Copy5Parent}>
          <img
            className={styles.forma1Copy5}
            loading="lazy"
            alt=""
            src="/forma-1-copy-5.svg"
          />
          <div className={styles.bg}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle@2x.png"
            />
            <div className={styles.rectangleParent}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="/rectangle1@2x.png"
              />
              <div className={styles.roundedRectangle}>
                <img className={styles.bgIcon4} alt="" src="/bg-6.svg" />
                <b className={styles.cetOfTowels}>Cet of Towels Included</b>
                <b className={styles.takeUpTo}>Take Up To 7 Classes</b>
                <b className={styles.valid7Consecutive}>
                  Valid 7 Consecutive Days
                </b>
                <img className={styles.lineIcon} alt="" src="/vector-12.svg" />
                <img
                  className={styles.shape3Copy}
                  alt=""
                  src="/vector-12.svg"
                />
                <button className={styles.roundedRectangle1Copy6Parent}>
                  <img
                    className={styles.roundedRectangle1Copy6}
                    alt=""
                    src="/rounded-rectangle-1-copy-6.svg"
                  />
                  <b className={styles.purchaseNow}>Purchase Now</b>
                </button>
                <div className={styles.line}>
                  <img className={styles.bgIcon5} alt="" src="/bg-7.svg" />
                  <h2 className={styles.oneWeek}>one week</h2>
                  <div className={styles.advance}>Advance</div>
                </div>
                <div className={styles.text}>
                  <img
                    className={styles.emailAddressIcon}
                    alt=""
                    src="/vector-13.svg"
                  />
                  <div className={styles.sendEmailsvgrepocom}>
                    <div className={styles.contactUs}>$60</div>
                    <div className={styles.footer}>$60</div>
                  </div>
                </div>
              </div>
              <div className={styles.headerLogoContainer}>
                <div className={styles.wrapperBg}>
                  <img className={styles.bgIcon6} alt="" src="/bg-8.svg" />
                </div>
                <b className={styles.newStudentsOnly}>New students only</b>
                <b className={styles.newYorkArea}>
                  New York Area Resi-dents Only
                </b>
                <b className={styles.matTowel}>{`Mat & towel included`}</b>
                <b className={styles.valid7Consecutive1}>
                  Valid 7 consecutive days
                </b>
                <b className={styles.newYorkArea1}>
                  New York Area Resi-dents Only
                </b>
                <img
                  className={styles.apirlContainerIcon}
                  alt=""
                  src="/vector-12.svg"
                />
                <img
                  className={styles.shape3Copy1}
                  alt=""
                  src="/vector-12.svg"
                />
                <img
                  className={styles.shape3Copy2}
                  alt=""
                  src="/vector-12.svg"
                />
                <img
                  className={styles.shape3Copy21}
                  alt=""
                  src="/vector-12.svg"
                />
                <button className={styles.roundedRectangle1Copy6Group}>
                  <img
                    className={styles.roundedRectangle1Copy61}
                    alt=""
                    src="/rounded-rectangle-1-copy-6-1.svg"
                  />
                  <b className={styles.purchaseNow1}>Purchase Now</b>
                </button>
                <div className={styles.learnMoreButton1}>
                  <img className={styles.bgIcon7} alt="" src="/bg-9.svg" />
                  <h2 className={styles.introductoryMonth}>
                    Introductory Month
                  </h2>
                  <div className={styles.premium}>Premium</div>
                </div>
                <div className={styles.extendedStretchingFrame2}>
                  <img
                    className={styles.subHeaderContainer}
                    alt=""
                    src="/vector-13.svg"
                  />
                  <div className={styles.yourLogo}>
                    <div className={styles.newsletterSection}>$39</div>
                    <div className={styles.newsletterSection1}>$39</div>
                  </div>
                </div>
              </div>
              <div className={styles.roundedRectangle2}>
                <img className={styles.bgIcon8} alt="" src="/bg-6.svg" />
                <b className={styles.availableToAnyone}> Available To Anyone</b>
                <b className={styles.towelsIncluded}>Towels Included</b>
                <b className={styles.neverExpires}>{`Never Expires `}</b>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-12.svg"
                />
                <img
                  className={styles.shape3Copy3}
                  alt=""
                  src="/vector-12.svg"
                />
                <button className={styles.roundedRectangle1Copy6Container}>
                  <img
                    className={styles.roundedRectangle1Copy62}
                    alt=""
                    src="/rounded-rectangle-1-copy-6.svg"
                  />
                  <b className={styles.purchaseNow2}>Purchase Now</b>
                </button>
                <div className={styles.bgParent}>
                  <img className={styles.bgIcon9} alt="" src="/bg-7.svg" />
                  <h2 className={styles.singleClass}>Single Class</h2>
                  <div className={styles.medium}>Medium</div>
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-13.svg"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div}>$25</div>
                    <div className={styles.div1}>$25</div>
                  </div>
                </div>
              </div>
              <h1 className={styles.whateverYourCommitment}>
                Whatever Your Commitment We've Got A Package For You!
              </h1>
            </div>
          </div>
        </div>
      </section>
      <img
        className={styles.vectorSmartObjectCopy}
        alt=""
        src="/vector-smart-object-copy@2x.png"
      />
      <img
        className={styles.vectorSmartObjectCopy1}
        alt=""
        src="/vector-smart-object-copy@2x.png"
      />
      <img
        className={styles.vectorSmartObjectCopy2}
        alt=""
        src="/vector-smart-object-copy@2x.png"
      />
      <img className={styles.instructorIcon} alt="" src="/instructor@2x.png" />
      <section className={styles.extendedStretching}>
        <LineDivider />
        <div className={styles.facebookLink}>
          <Bg />
          <div className={styles.frameDiv}>
            <div className={styles.ourTrainerParent}>
              <h1 className={styles.ourTrainer}>
                <span>{`our `}</span>
                <span className={styles.trainer}>trainer</span>
              </h1>
              <i className={styles.weAreOpen}>
                We are open on these timings. Choose the best for you.
              </i>
            </div>
            <div className={styles.newsletterSection2}>
              <div className={styles.headerLogoContainer1}>
                <img className={styles.groupIcon1} alt="" src="/group1.svg" />
                <div className={styles.titleFrame2}>
                  <img className={styles.bgIcon10} alt="" src="/bg-12.svg" />
                  <div className={styles.image1}>
                    <img
                      className={styles.lineElementIcon}
                      alt=""
                      src="/vector-19.svg"
                    />
                    <img
                      className={styles.aprilTextFrame}
                      alt=""
                      src="/rectangle-6@2x.png"
                    />
                  </div>
                  <div className={styles.rectangleCopy}>
                    <div className={styles.learnMoreButtonFrame1}>
                      <b className={styles.haydenElizabeth}>Hayden Elizabeth</b>
                      <div className={styles.yogaDance}>Yoga Dance</div>
                    </div>
                    <div className={styles.stretchingContainer}>
                      <img className={styles.fbIcon} alt="" src="/fb.svg" />
                      <img
                        className={styles.twitterIcon}
                        alt=""
                        src="/twitter.svg"
                      />
                      <div className={styles.googleParent}>
                        <img
                          className={styles.googleIcon}
                          alt=""
                          src="/google.svg"
                        />
                        <h3 className={styles.g}>G</h3>
                      </div>
                      <img
                        className={styles.pinterestIcon}
                        alt=""
                        src="/pinterest.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.frameButton}>
                    <img
                      className={styles.roundedRectangle1Copy63}
                      alt=""
                      src="/rounded-rectangle-1-copy-6-3.svg"
                    />
                    <b className={styles.viewProfile}>View Profile</b>
                  </button>
                </div>
              </div>
              <div className={styles.headerLogoContainer2}>
                <img className={styles.bgIcon11} alt="" src="/bg-13.svg" />
                <div className={styles.image2}>
                  <img
                    className={styles.headerLogoFrame}
                    alt=""
                    src="/vector-19.svg"
                  />
                  <img
                    className={styles.contentHolderIcon}
                    alt=""
                    src="/rectangle-7@2x.png"
                  />
                </div>
                <div className={styles.subheaderLineParent}>
                  <div className={styles.subheaderLine}>
                    <b className={styles.addisonTaylor}>Addison Taylor</b>
                    <div className={styles.rectangleCopy1}>
                      <div className={styles.flow}>Flow</div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.fbParent}>
                      <img className={styles.fbIcon1} alt="" src="/fb-1.svg" />
                      <img
                        className={styles.facebook176Icon}
                        alt=""
                        src="/facebook176.svg"
                      />
                    </div>
                    <div className={styles.twitterParent}>
                      <img
                        className={styles.twitterIcon1}
                        alt=""
                        src="/google.svg"
                      />
                      <img
                        className={styles.twitter154Icon}
                        alt=""
                        src="/twitter154.svg"
                      />
                    </div>
                    <div className={styles.googleGroup}>
                      <img
                        className={styles.googleIcon1}
                        alt=""
                        src="/google.svg"
                      />
                      <h3 className={styles.g1}>G</h3>
                    </div>
                    <div className={styles.pinterestParent}>
                      <img
                        className={styles.pinterestIcon1}
                        alt=""
                        src="/google.svg"
                      />
                      <img
                        className={styles.sendButtonFrame}
                        alt=""
                        src="/vector-21.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.roundedRectangle1Copy6Parent1}>
                  <img
                    className={styles.roundedRectangle1Copy64}
                    alt=""
                    src="/rounded-rectangle-1-copy-6-4.svg"
                  />
                  <b className={styles.viewProfile1}>View Profile</b>
                </button>
              </div>
              <HeaderLogoContainer
                rectangle="/rectangle-8@2x.png"
                harlowSophia="Harlow Sophia"
              />
              <HeaderLogoContainer
                rectangle="/rectangle-9@2x.png"
                harlowSophia="Leighton Summer"
                propPadding="0px var(--padding-7xs)"
                propPadding1="var(--padding-11xs) var(--padding-4xs) var(--padding-10xs) var(--padding-8xs)"
              />
            </div>
          </div>
          <ContactUs />
        </div>
      </section>
      <section className={styles.footerLinks}>
        <div className={styles.contactFormTitle}>
          <div className={styles.contactFormInput}>
            <div className={styles.contactFormMessage}>
              <div className={styles.contentText}>
                <img className={styles.bgIcon12} alt="" src="/bg4.svg" />
                <img
                  className={styles.brand1Icon}
                  loading="lazy"
                  alt=""
                  src="/brand-1@2x.png"
                />
                <div className={styles.headerSection}>
                  <img
                    className={styles.brand2Icon}
                    loading="lazy"
                    alt=""
                    src="/brand-2@2x.png"
                  />
                </div>
                <div className={styles.iconSetFilled3}>
                  <img
                    className={styles.brand3Icon}
                    loading="lazy"
                    alt=""
                    src="/brand-3@2x.png"
                  />
                </div>
                <div className={styles.headerSection1}>
                  <img
                    className={styles.brand4Icon}
                    loading="lazy"
                    alt=""
                    src="/brand-4@2x.png"
                  />
                </div>
                <img
                  className={styles.brand5Icon}
                  loading="lazy"
                  alt=""
                  src="/brand-5@2x.png"
                />
              </div>
              <div className={styles.bg1}>
                <div className={styles.contactUsButton}>
                  <div className={styles.yoga}>Yoga</div>
                  <div className={styles.hermosa}>Hermosa</div>
                  <div className={styles.twitterFrame}>
                    <img className={styles.bgIcon13} alt="" src="/bg5.svg" />
                    <div className={styles.roundedRectangle3}>
                      <div className={styles.extendedStretching1}>
                        <div className={styles.utEnimAdMinimVeniam}>
                          <div className={styles.iconGroup}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon.svg"
                            />
                            <h1 className={styles.blogUpdate}>
                              <span>{`blog `}</span>
                              <span className={styles.update}>update</span>
                            </h1>
                          </div>
                        </div>
                        <i
                          className={styles.allAboutTips}
                        >{`All about tips & guides. See what's trending`}</i>
                      </div>
                    </div>
                    <div className={styles.searchBox}>
                      <div className={styles.socialMediaLogo}>
                        <div className={styles.headerLogoAndNavbar}>
                          <div className={styles.image3}>
                            <img
                              className={styles.roundedRectangle4Copy}
                              alt=""
                              src="/rounded-rectangle-4-copy.svg"
                            />
                            <img
                              className={styles.latestTweetsContainer}
                              alt=""
                              src="/rectangle-11@2x.png"
                            />
                          </div>
                          <div
                            className={styles.wrapperRoundedRectangle4Parent}
                          >
                            <div className={styles.wrapperRoundedRectangle4}>
                              <img
                                className={styles.roundedRectangle4}
                                alt=""
                                src="/rounded-rectangle-4.svg"
                              />
                            </div>
                            <div className={styles.newsletters1}>
                              <div className={styles.contactUsFrame1}>
                                <div className={styles.mainNavbarContainer}>
                                  <div className={styles.lifestyle}>
                                    lifestyle
                                  </div>
                                  <div className={styles.lineFrame}>
                                    <div className={styles.textFrame}>
                                      <img
                                        className={styles.heartSvgrepocomIcon}
                                        alt=""
                                        src="/heart-svgrepocom-1.svg"
                                      />
                                      <div className={styles.heartIconFrame}>
                                        148
                                      </div>
                                    </div>
                                    <div className={styles.facebookIconFrame}>
                                      <img
                                        className={styles.iconSetFilled4}
                                        alt=""
                                        src="/iconsetfilled@2x.png"
                                      />
                                      <div className={styles.div2}>4</div>
                                    </div>
                                  </div>
                                </div>
                                <h2 className={styles.becomeAnYoga}>
                                  Become an yoga trainer at Hermosa Center
                                </h2>
                              </div>
                            </div>
                            <div className={styles.painReliefHeader}>
                              <div className={styles.utEnimAdContainer}>
                                <span>{`Ut enim ad minim veniam, quis nostrud exerc itation quis danisi modo consequat. `}</span>
                                <span className={styles.consEciteturAdipiscing}>
                                  Cons ecitetur adipiscing elit, sed do eiupo.
                                </span>
                              </div>
                            </div>
                            <div className={styles.newsletterFormFrame}>
                              <img
                                className={styles.lineIcon1}
                                alt=""
                                src="/line.svg"
                              />
                              <div className={styles.twitterFeedFrame}>
                                <i className={styles.apirl1st2016}>
                                  Apirl 1st, 2016
                                </i>
                                <button
                                  className={styles.extendedStretchingFrame3}
                                >
                                  <img
                                    className={styles.rectangle3Copy62}
                                    alt=""
                                    src="/rectangle-3-copy-6-4.svg"
                                  />
                                  <b className={styles.learnMore2}>
                                    Learn More
                                  </b>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.mainContentArea}>
                        <div className={styles.backgroundImage}>
                          <div className={styles.image4}>
                            <img
                              className={styles.roundedRectangle4Copy1}
                              alt=""
                              src="/rounded-rectangle-4-copy-1.svg"
                            />
                            <img
                              className={styles.headerIcon}
                              alt=""
                              src="/rectangle-12@2x.png"
                            />
                          </div>
                          <div className={styles.learnMore3}>
                            <img
                              className={styles.roundedRectangle41}
                              alt=""
                              src="/rounded-rectangle-4-1.svg"
                            />
                            <div className={styles.basicYoga}>
                              <div className={styles.heartSvgRepocom}>
                                <div className={styles.iconSetFilled5}>
                                  <div className={styles.yogaTutorials}>
                                    yoga tutorials
                                  </div>
                                  <div className={styles.textFrameParent}>
                                    <div className={styles.textFrame1}>
                                      <img
                                        className={styles.heartSvgrepocomIcon1}
                                        alt=""
                                        src="/heart-svgrepocom-2.svg"
                                      />
                                      <div className={styles.latestTweets}>
                                        148
                                      </div>
                                    </div>
                                    <div className={styles.pageTitle}>
                                      <div
                                        className={
                                          styles.yourChannelYogaHasNourishe
                                        }
                                      >
                                        <img
                                          className={styles.iconSetFilled6}
                                          alt=""
                                          src="/iconsetfilled@2x.png"
                                        />
                                        <div
                                          className={styles.comment3Svgrepocom}
                                        />
                                      </div>
                                      <div className={styles.apirlSt}>
                                        <div className={styles.div3}>4</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h2
                                  className={styles.gettingBetterNightContainer}
                                >
                                  <p className={styles.gettingBetterNight}>
                                    Getting better night sleep
                                  </p>
                                  <p className={styles.withAsanas}>
                                    with asanas
                                  </p>
                                </h2>
                              </div>
                            </div>
                            <div className={styles.frameContent}>
                              <div className={styles.utEnimAdContainer1}>
                                <span>{`Ut enim ad minim veniam, quis nostrud exerc itation quis danisi modo consequat. `}</span>
                                <span
                                  className={styles.consEciteturAdipiscing1}
                                >
                                  Cons ecitetur adipiscing elit, sed do eiupo.
                                </span>
                              </div>
                            </div>
                            <div className={styles.learnMoreFrame}>
                              <img
                                className={styles.lineIcon2}
                                alt=""
                                src="/line.svg"
                              />
                              <div className={styles.lineFrame1}>
                                <i className={styles.apirl1st20161}>
                                  Apirl 1st, 2016
                                </i>
                                <button
                                  className={styles.extendedStretchingFrame4}
                                >
                                  <img
                                    className={styles.rectangle3Copy63}
                                    alt=""
                                    src="/rectangle-3-copy-6.svg"
                                  />
                                  <b className={styles.learnMore4}>
                                    Learn More
                                  </b>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.emailAddress}>
                        <div className={styles.image5}>
                          <div className={styles.roundedRectangle4CopyParent}>
                            <img
                              className={styles.roundedRectangle4Copy2}
                              alt=""
                              src="/rounded-rectangle-4-copy-2.svg"
                            />
                            <img
                              className={styles.rectangleIcon2}
                              alt=""
                              src="/rectangle-13@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.roundedRectangle4Parent}>
                          <img
                            className={styles.roundedRectangle42}
                            alt=""
                            src="/rounded-rectangle-4-1.svg"
                          />
                          <div className={styles.textFrameWrapper}>
                            <div className={styles.textFrame2}>
                              <div className={styles.textFrame3}>
                                <div className={styles.basicYoga1}>
                                  basic yoga
                                </div>
                                <div className={styles.lineFrame2}>
                                  <div className={styles.textFrame4}>
                                    <img
                                      className={styles.heartSvgrepocomIcon2}
                                      alt=""
                                      src="/heart-svgrepocom-1.svg"
                                    />
                                    <div className={styles.twitterIconFrame}>
                                      148
                                    </div>
                                  </div>
                                  <div className={styles.facebookIconFrame1}>
                                    <img
                                      className={styles.iconSetFilled7}
                                      alt=""
                                      src="/iconsetfilled@2x.png"
                                    />
                                    <div className={styles.latestNewsFrame}>
                                      4
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <h2
                                className={
                                  styles.extendedStretchingBodyContainer
                                }
                              >
                                <p className={styles.extendedStretchingBody}>
                                  Extended stretching body
                                </p>
                                <p className={styles.practiceForPain}>
                                  practice for pain relief
                                </p>
                              </h2>
                            </div>
                          </div>
                          <div className={styles.painReliefHeader1}>
                            <div className={styles.utEnimAdContainer2}>
                              <span>{`Ut enim ad minim veniam, quis nostrud exerc itation quis danisi modo consequat. `}</span>
                              <span className={styles.consEciteturAdipiscing2}>
                                Cons ecitetur adipiscing elit, sed do eiupo.
                              </span>
                            </div>
                          </div>
                          <div className={styles.titleFrameWithLearnMore}>
                            <img
                              className={styles.lineIcon3}
                              alt=""
                              src="/line.svg"
                            />
                            <div className={styles.heartSvgIconFrame}>
                              <i className={styles.apirl1st20162}>
                                Apirl 1st, 2016
                              </i>
                              <button
                                className={styles.extendedStretchingFrame5}
                              >
                                <img
                                  className={styles.rectangle3Copy64}
                                  alt=""
                                  src="/rectangle-3-copy-6.svg"
                                />
                                <b className={styles.learnMore5}>Learn More</b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeartIconContainerFrame />
    </div>
  );
};

export default HeaderLogo;
