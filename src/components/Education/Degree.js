import React from "react";

import classes from "./degree.module.css";
// import UniversityImg from "../../Data/universityLogo.png";
import UniversityImg from "../../Data/bknmulogo.png";

import Card from "../UI/Card";
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
        <Card className={classes.degreeWrapper}>
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
        </Card>
      </div>
    </div>
  );
}

export default Degree;
