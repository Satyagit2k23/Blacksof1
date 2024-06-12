import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1selected.module.css";

export type Property1selectedType = {
  className?: string;
  centralizedControlMonitor?: string;

  /** Style props */
  property1selectedBackground?: CSSProperties["background"];
  property1selectedBorder?: CSSProperties["border"];
  property1selectedMargin?: CSSProperties["margin"];
  property1selectedPosition?: CSSProperties["position"];
  property1selectedTop?: CSSProperties["top"];
  property1selectedLeft?: CSSProperties["left"];
  centralizedControlColor?: CSSProperties["color"];
};

const Property1selected: FunctionComponent<Property1selectedType> = ({
  className = "",
  centralizedControlMonitor,
  property1selectedBackground,
  property1selectedBorder,
  property1selectedMargin,
  property1selectedPosition,
  property1selectedTop,
  property1selectedLeft,
  centralizedControlColor,
}) => {
  const property1selectedStyle: CSSProperties = useMemo(() => {
    return {
      background: property1selectedBackground,
      border: property1selectedBorder,
      margin: property1selectedMargin,
      position: property1selectedPosition,
      top: property1selectedTop,
      left: property1selectedLeft,
    };
  }, [
    property1selectedBackground,
    property1selectedBorder,
    property1selectedMargin,
    property1selectedPosition,
    property1selectedTop,
    property1selectedLeft,
  ]);

  const centralizedControlStyle: CSSProperties = useMemo(() => {
    return {
      color: centralizedControlColor,
    };
  }, [centralizedControlColor]);

  return (
    <div
      className={[styles.property1selected, className].join(" ")}
      style={property1selectedStyle}
    >
      <div
        className={styles.centralizedControl}
        style={centralizedControlStyle}
      >
        {centralizedControlMonitor}
      </div>
    </div>
  );
};

export default Property1selected;
