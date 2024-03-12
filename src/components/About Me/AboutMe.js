import React, { Fragment } from "react";
import classes from "./aboutMe.module.css";
import Photo from "../../Data/personalPhoto.jpg";
import Resume from "../../Data/jigar-ahir.pdf";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { t } from "i18next";

const AboutMe = () => {
  const uiColor = useSelector((state) => state.uiColor);

  return (
    <Fragment>
      <div className={classes.contactMe}>
        <div className={classes.avatar}>
          <img src={Photo} alt="" style={{ borderColor: uiColor }} />
        </div>
        <div className={classes.contactCard}>
          <h1 style={{ color: uiColor }}>{t("About.Title")}</h1>
          <div>{t("About.Desc")}</div>
          <div className={classes.contactLinks}>
            <SocialLinks className={classes.links} />
          </div>
          <a href={Resume} target="_blank">
            <Button className={classes.resumeBtn}>
              {t("About.SeeResume")}
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
