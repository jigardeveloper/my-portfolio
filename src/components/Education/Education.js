import React, { Fragment } from "react";
import EducationImg from "../asset/kindpng_2158189.png";
import { languagesDone } from "../../Data/EducationData";
import Degree from "./Degree";
import classes from "./education.module.css";
import { useSelector } from "react-redux";
import { t } from "i18next";

function Education(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  return (
    <Fragment>
      <div className={classes.educationHeader}>
        <div className={classes.educationCard}>
          <h1 style={{ color: uiColor }}>{t("Education.Title")}</h1>
          <h2 style={{ color: nonThemeColor }}>{t("Education.Desc")}</h2>
          <div className={classes.codingInfo}>
            {languagesDone.map((item, index) => (
              <div key={index} className={classes.progressBar}>
                <label htmlFor={item.name}>{item.name}</label>
                <progress
                  id={item.name}
                  value={item.percentDone}
                  max="100"
                ></progress>
                <h5>{item.percentDone}%</h5>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.eduImg}>
          <img src={EducationImg} alt="" />
        </div>
      </div>
      <Degree />
    </Fragment>
  );
}
export default Education;
