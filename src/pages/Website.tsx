import { FunctionComponent } from "react";
import SmartLightingSolutionsContaine from "../components/SmartLightingSolutionsContaine";
import EcosystemSection from "../components/EcosystemSection";
import SmartDevelopmentCard from "../components/SmartDevelopmentCard";
import SmartLightsForm from "../components/SmartLightsForm";
import styles from "./Website.module.css";

const Website: FunctionComponent = () => {
  return (
    <div className={styles.website}>
      <SmartLightingSolutionsContaine />
      <div className={styles.frameParent}>
        <EcosystemSection />
        <SmartDevelopmentCard />
        <div className={styles.groupParent}>
          <div className={styles.image34Parent}>
            <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
            <div className={styles.thePlatformAssistsCityManaParent}>
              <div className={styles.thePlatformAssists}>
                The platform assists city managers on multiple fronts
              </div>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.lineDiv} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild3} />
              <div className={styles.groupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div
                  className={styles.savesOnPower}
                >{`Saves on power consumption & related costs`}</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className={styles.ensuresSecurityIn}>
                  Ensures security in the neighborhood
                </div>
              </div>
              <div className={styles.groupParent1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className={styles.lowersDowntimes}>Lowers downtimes</div>
              </div>
              <div className={styles.groupParent2}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className={styles.ensuresRealTimeActionable}>
                  Ensures real-time actionable analytics on power failures, lamp
                  malfunctions, voltage failures, etc.
                </div>
              </div>
              <div className={styles.groupParent3}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className={styles.detectsPowerThefts}>
                  Detects power thefts.
                </div>
              </div>
              <div className={styles.groupParent4}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className={styles.ensuresSmartMonitoring}>
                  Ensures smart monitoring and control of the street light
                  infrastructure.
                </div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group-4.svg" />
        </div>
        <SmartLightsForm />
      </div>
    </div>
  );
};

export default Website;
