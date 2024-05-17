import React from "react";
import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";
import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";
import { projectImage } from "../../Data/EducationData";
import { t } from "i18next";

const Projects = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  return (
    <div id="projects">
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
        {t("Project.ProjectsList", { returnObjects: true }).map(
          (item, index) => {
            let data = { ...item, image: projectImage[index] }
            return <ProjectItem key={index} project={data} />;
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
    </div>
  );
};

export default Projects;
