import { FunctionComponent } from "react";
import Property1selected from "./Property1selected";
import styles from "./SmartDevelopmentCard.module.css";

export type SmartDevelopmentCardType = {
  className?: string;
};

const SmartDevelopmentCard: FunctionComponent<SmartDevelopmentCardType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.unsplashFqsuf0chkParent}>
        <img
          className={styles.unsplashFqsuf0chkIcon}
          alt=""
          src="/unsplash-fqsuf0chk@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.imagePlaceholderParent}>
            <img
              className={styles.imagePlaceholderIcon}
              alt=""
              src="/image-placeholder@2x.png"
            />
            <div className={styles.frameGroup}>
              <div className={styles.productsParent}>
                <div className={styles.products}>Products</div>
                <div className={styles.products}>1/5</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.centralizedControlMonitoriParent}>
                  <div
                    className={styles.centralizedControl}
                  >{`Centralized Control & Monitoring System`}</div>
                  <div className={styles.designedIndigenouslyFor}>
                    Designed indigenously for street lighting projects, the CCMS
                    offers a complete feeder panel for a group of 30-50 street
                    lights.
                  </div>
                </div>
                <div className={styles.knowMoreParent}>
                  <div className={styles.knowMore}>Know More</div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-2327.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.productsWrapper}>
                  <div className={styles.products1}>Products</div>
                </div>
              </div>
              <div className={styles.cuttingEdgeHardwareOfferinContainer}>
                <span>Cutting-edge hardware</span>
                <span>{`, `}</span>
                <span>
                  offerings helping cities optimize resources and achieve smart
                  development goals
                </span>
              </div>
            </div>
          </div>
          <div className={styles.component1Parent}>
            <Property1selected
              centralizedControlMonitor={`Centralized Control & Monitoring System`}
              property1selectedBackground="linear-gradient(-90deg, rgba(203, 227, 255, 0.06), rgba(110, 178, 255, 0.4), rgba(203, 227, 255, 0.06) 49.87%, rgba(174, 210, 251, 0.4))"
              property1selectedBorder="1.5px solid var(--color-cornflowerblue)"
              property1selectedMargin="unset"
              property1selectedPosition="unset"
              property1selectedTop="unset"
              property1selectedLeft="unset"
              centralizedControlColor="#00386b"
            />
            <Property1selected
              centralizedControlMonitor="NEMA-Mounted VOLC 1160"
              property1selectedBackground="unset"
              property1selectedBorder="1.5px solid var(--color-gray-200)"
              property1selectedMargin="unset"
              property1selectedPosition="unset"
              property1selectedTop="unset"
              property1selectedLeft="unset"
              centralizedControlColor="#505050"
            />
            <Property1selected
              centralizedControlMonitor="Retrofit Street Light Controller VOLC 2160"
              property1selectedBackground="unset"
              property1selectedBorder="1.5px solid var(--color-gray-200)"
              property1selectedMargin="unset"
              property1selectedPosition="unset"
              property1selectedTop="unset"
              property1selectedLeft="unset"
              centralizedControlColor="#505050"
            />
            <Property1selected
              centralizedControlMonitor="Retrofit Street Light Controller VOLC 2180"
              property1selectedBackground="unset"
              property1selectedBorder="1.5px solid var(--color-gray-200)"
              property1selectedMargin="unset"
              property1selectedPosition="unset"
              property1selectedTop="unset"
              property1selectedLeft="unset"
              centralizedControlColor="#505050"
            />
            <Property1selected
              centralizedControlMonitor="Retrofit Street Light Controller VOLC 4180"
              property1selectedBackground="unset"
              property1selectedBorder="1.5px solid var(--color-gray-200)"
              property1selectedMargin="0 !important"
              property1selectedPosition="absolute"
              property1selectedTop="64px"
              property1selectedLeft="0px"
              centralizedControlColor="#505050"
            />
          </div>
        </div>
        <div className={styles.frameParent2}>
          <img className={styles.frameItem} alt="" src="/frame-2332@2x.png" />
          <img className={styles.frameInner} alt="" src="/frame-2333@2x.png" />
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
      </div>
    </div>
  );
};

export default SmartDevelopmentCard;
