import classes from "./programmingSkills.module.css";
import {
  html,
  css,
  js,
  react,
  redux,
  node,
  express,
  nest,
  next,
  mongodb,
  mysql,
  supabase,
  firebase,
  postgressql,
  socket
} from "../asset/svg/svg";
import { useSelector } from "react-redux";
import { t } from "i18next";

const skills = [html, css, js, react, redux, node, express, nest, next,
  mongodb, mysql, postgressql, supabase, socket, firebase];
const ProgrammingSkills = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <div className={classes.mainCard}>
      <h1 style={{ color: nonThemeColor }}>
        {t("SkillSet.TitleF")}{" "}
        <span style={{ color: uiColor }}>{t("SkillSet.TitleL")}</span>
      </h1>
      <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
        {skills.map((Item, index) => (
          <div
            className={classes.skillItem}
            style={{ borderColor: uiColor }}
            key={index}
          >
            <div className={classes.name}>React</div>
            <Item />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
