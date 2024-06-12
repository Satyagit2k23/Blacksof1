import { FunctionComponent } from "react";
import styles from "./SmartLightsForm.module.css";

export type SmartLightsFormType = {
  className?: string;
};

const SmartLightsForm: FunctionComponent<SmartLightsFormType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <img
        className={styles.planetEarthFromSpace1Icon}
        alt=""
        src="/planetearthfromspace-11@2x.png"
      />
      <div className={styles.footer1}>
        <div className={styles.statuspageParent}>
          <img
            className={styles.statuspageIcon}
            alt=""
            src="/statuspage1.svg"
          />
          <div className={styles.smartLights}>smart Lights</div>
        </div>
        <div className={styles.productParent}>
          <div className={styles.product}>
            <div className={styles.softwareServices}>Product</div>
          </div>
          <div className={styles.product}>
            <div className={styles.softwareServices}>Software Services</div>
          </div>
          <div className={styles.product}>
            <div className={styles.softwareServices}>Follow Us</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        <div className={styles.privacyTerms}>
          <div className={styles.softwareServices}>Privacy Policy</div>
          <div className={styles.softwareServices}>|</div>
          <div className={styles.softwareServices}>{`Terms & Conditions`}</div>
          <div className={styles.softwareServices}>|</div>
          <div className={styles.softwareServices}>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default SmartLightsForm;
