import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <header className={styles.layer11CopyParent}>
      <img className={styles.layer11Copy} alt="" src="/layer-11-copy@2x.png" />
      <img
        className={styles.instructorIcon}
        loading="lazy"
        alt=""
        src="/instructor@2x.png"
      />
      <div className={styles.rectanglecopy}>
        <img className={styles.bgIcon} alt="" src="/bg2.svg" />
        <div className={styles.imageParent}>
          <div className={styles.image}>
            <div className={styles.roundedRectanglecopy}>
              <img
                className={styles.userSvgrepocomIcon}
                loading="lazy"
                alt=""
                src="/user-svgrepocom.svg"
              />
              <div className={styles.myAccount}>my account</div>
            </div>
            <div className={styles.roundedRectanglecopy1}>
              <img
                className={styles.tick2SvgrepocomIcon}
                alt=""
                src="/tick2-svgrepocom.svg"
              />
              <div className={styles.checkOut}>check out</div>
            </div>
            <div className={styles.roundedRectanglecopy2}>
              <img
                className={styles.heartSvgrepocomIcon}
                alt=""
                src="/heart-svgrepocom.svg"
              />
              <div className={styles.myWishlist}>my wishlist</div>
            </div>
          </div>
          <nav className={styles.heartsvgrepocomParent}>
            <div className={styles.heartsvgrepocom}>
              <img
                className={styles.searchAltSvgrepocomIcon}
                loading="lazy"
                alt=""
                src="/searchalt-svgrepocom.svg"
              />
              <div className={styles.search}>Search</div>
            </div>
            <div className={styles.heartsvgrepocom1}>
              <img
                className={styles.bagShoppingSvgrepocomIcon}
                alt=""
                src="/bagshopping-svgrepocom.svg"
              />
              <div className={styles.myBag000Container}>
                <span>{`my bag: `}</span>
                <span className={styles.span}>$0.00</span>
              </div>
            </div>
            <div className={styles.utenimadminimveniamquisnostrudParent}>
              <div className={styles.utenimadminimveniamquisnostrud}>
                <img className={styles.bgIcon1} alt="" src="/bg-1.svg" />
                <div className={styles.eng}>eng</div>
              </div>
              <div className={styles.bgParent}>
                <img className={styles.bgIcon2} alt="" src="/bg-1.svg" />
                <div className={styles.usd}>usd</div>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.yourlogo}>
          <div className={styles.pageTitleParent}>
            <div className={styles.pageTitle}>
              <div className={styles.home}>Home</div>
              <div className={styles.home1}>Classes</div>
              <div className={styles.home2}>Events</div>
              <div className={styles.home3}>Trainers</div>
            </div>
            <div className={styles.pageTitle1}>
              <div className={styles.shop}>{`shop   `}</div>
              <div className={styles.shop1}>features</div>
              <div className={styles.shop2}>News</div>
              <div className={styles.shop3}>contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <img className={styles.bgIcon3} alt="" src="/bg3.svg" />
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo1}>Logo</h1>
        </div>
        <h3 className={styles.healthBeauty}>{`Health Beauty & Yoga`}</h3>
      </div>
    </header>
  );
};

export default FrameComponent3;
