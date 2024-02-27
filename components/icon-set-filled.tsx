import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./icon-set-filled.module.css";

export type IconSetFilledType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propMarginTop?: CSSProperties["marginTop"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
};

const IconSetFilled: NextPage<IconSetFilledType> = ({
  propWidth,
  propPadding,
  propMarginTop,
  propFlex,
  propWidth1,
}) => {
  const textContentFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      marginTop: propMarginTop,
    };
  }, [propWidth, propPadding, propMarginTop]);

  const extendedStretchingFrameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  return (
    <div className={styles.textContentFrame} style={textContentFrameStyle}>
      <h2 className={styles.welcomeToHermosa}>Welcome to Hermosa!</h2>
    </div>
  );
};

export default IconSetFilled;
