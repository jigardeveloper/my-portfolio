import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/bknmulogo.png";
import styles from "../UI/card.module.css";
import { useSelector } from "react-redux";
import { t } from "i18next";

function Degree(props) {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <div className={classes.degreeMain}>
      <h1 style={{ color: nonThemeColor }}>{t("DegreePursuing.Title")}</h1>
      <div className={classes.degreeCard}>
        <div
          className={`${classes.degreeImage} centered`}
          style={{ borderColor: uiColor }}
        >
          <img src={UniversityImg} alt="degree" />
        </div>        
        <div className={`${styles.Card} ${classes.degreeWrapper}`} style={{ borderColor: uiColor}}>
          <div className={classes.degreeInfo}>
            <h3 style={{ color: nonThemeColor }}>{t("DegreePursuing.Year")}</h3>
            <h1 style={{ color: uiColor }}>{t("DegreePursuing.Collage")}</h1>
            <h2 style={{ color: nonThemeColor }}>
              {" "}
              {t("DegreePursuing.DegreeName")}{" "}
            </h2>
          </div>
          <ul className={classes.details}>
            {t("DegreePursuing.details", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Degree;
