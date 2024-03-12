import React from "react";
import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";
import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";
import { t } from "i18next";

const Projects = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  return (
    <React.Fragment>
      <div className={styles.projects}>
        <section className={styles.projectImg}>
          <img src={projectCoverImg} alt="" />
        </section>
        <section className={styles.projectHeader}>
          <h1>
            <span style={{ color: nonThemeColor }}>
              {t("RecentWorks.TitleF")}{" "}
            </span>
            <span style={{ color: uiColor }}>{t("RecentWorks.TitleL")}</span>
          </h1>
          <div>{t("RecentWorks.Desc")}</div>
        </section>
      </div>
      <ProgrammingSkills />
      <h1
        className={styles.projectHeading}
        style={{ color: nonThemeColor, marginTop: "70px" }}
      >
        {t("Project.Title")}
      </h1>
      <div className={styles.projectList}>
        {t("Project.DUMMY_PROJECTS", { returnObjects: true }).map(
          (item, index) => {
            return <ProjectItem key={index} project={item} />;
          }
        )}
      </div>
      <div className={styles.moreProject}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${SocialData.githubLink}?tab=repositories`}
        >
          <Button className={styles.moreProjectBtn}>
            {t("Project.MoreProjects")}
          </Button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Projects;
