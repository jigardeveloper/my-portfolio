import React from "react";
import profileAvatar from "../asset/logo.png";
import classes from "./home.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";
import { t } from "i18next";

function Home(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  return (
    <main>
      <div className={classes.homeContent}>
        <h1>{t("Home.Hii")}</h1>
        <h2>
          {t("Home.I")}
          &nbsp;
          <span id="name" style={{ color: uiColor }}>
            {t("Home.FName")}
          </span>
        </h2>
        <h3 style={{ color: nonThemeColor }}>{t("Home.nickName")}</h3>
        <div className={classes.autoText}>
          {t("Home.Iam")} &nbsp;{" "}
          <span id="typer" style={{ color: uiColor }}></span>
        </div>
        <p className={classes.connectText}>
          {t("Home.Connect")}{" "}
          <span style={{ color: uiColor }}>{t("Home.Connect1")}</span>
          {t("Home.Connect2")}
        </p>
        <SocialLinks className={classes.links} />
      </div>
      <div className={classes.avatarImage}>
        <img src={profileAvatar} alt="" />
      </div>
    </main>
  );
}
export default Home;
