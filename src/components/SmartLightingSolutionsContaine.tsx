import { FunctionComponent } from "react";
import styles from "./SmartLightingSolutionsContaine.module.css";

export type SmartLightingSolutionsContaineType = {
  className?: string;
};

const SmartLightingSolutionsContaine: FunctionComponent<
  SmartLightingSolutionsContaineType
> = ({ className = "" }) => {
  return (
    <div className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroSectionInner}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.planetEarthFromSpace1Icon}
              alt=""
              src="/planetearthfromspace-1@2x.png"
            />
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
      </div>
      <div className={styles.heroSectionChild} />
      <div className={styles.title}>
        <div className={styles.smartLightingSolutionsParent}>
          <div className={styles.smartLightingSolutions}>
            smart Lighting solutions
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.button2}>
          <div className={styles.loginWrapper}>
            <div className={styles.login}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.heroSectionItem} />
      <div className={styles.navBar}>
        <div className={styles.frameParent}>
          <div className={styles.statuspageParent}>
            <img
              className={styles.statuspageIcon}
              alt=""
              src="/statuspage.svg"
            />
            <div className={styles.smartLights}>smart Lights</div>
          </div>
          <div className={styles.linksParent}>
            <div className={styles.links}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>Products</div>
              <div className={styles.softwareServicesWrapper}>
                <div className={styles.home}>Software Services</div>
              </div>
            </div>
            <div className={styles.button21}>
              <div className={styles.loginWrapper}>
                <div className={styles.login}>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartLightingSolutionsContaine;
