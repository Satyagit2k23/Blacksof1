import { FunctionComponent } from "react";
import styles from "./EcosystemSection.module.css";

export type EcosystemSectionType = {
  className?: string;
};

const EcosystemSection: FunctionComponent<EcosystemSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.groupParent}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-427320601.svg"
            />
            <div className={styles.gatewayParent}>
              <div className={styles.gateway}>Gateway</div>
              <div className={styles.employedForInterfacing}>
                Employed for interfacing between a Controller and the Lighting
                Management Software.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/frame-427320603@2x.png"
                />
                <div className={styles.gatewayParent}>
                  <div className={styles.gateway}>Users</div>
                  <div className={styles.dataFromThe}>
                    Data from the cloud is used to monitor and control street
                    lights by the System Managers.
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/frame-4273206031@2x.png"
                />
                <div className={styles.gatewayParent}>
                  <div className={styles.gateway}>Evaluation</div>
                  <div className={styles.gatheredInsightsAre}>
                    Gathered insights are used to evaluate the performance of
                    the lighting systems.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupChild} />
            <img className={styles.groupItem} alt="" src="/vector-7.svg" />
          </div>
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.frameParent3}>
            <img
              className={styles.frameChild1}
              alt=""
              src="/frame-4273206032@2x.png"
            />
            <div className={styles.gatewayParent}>
              <div className={styles.cloudBasedManagementSystem}>
                Cloud-based Management System
              </div>
              <div className={styles.collectsInformationFrom}>
                Collects information from multiple gateways.
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-427320604.svg"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-427320600.svg"
              />
            </div>
            <div className={styles.streetLightControllerParent}>
              <div className={styles.gateway}>Street Light Controller</div>
              <div className={styles.activatesdeactivatesInRespo}>
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent6}>
            <div className={styles.frameWrapper1}>
              <div className={styles.ecosystemWrapper}>
                <div className={styles.ecosystem}>Ecosystem</div>
              </div>
            </div>
            <div className={styles.howDoesA}>
              How does a smart street light ecosystem work?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemSection;
