import React from "react";
import SocialData from "../../Data/SocialData";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";

const SocialLinks = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  return (
    <div
      className={`${props.className}`}
      style={{ color: nonThemeColor }}
    >
      <a href={SocialData.githubLink} target="_blank">
        <GitHubIcon fontSize="large" />
      </a>
      <a href={SocialData.linkedInLink} target="_blank">
        <LinkedInIcon fontSize="large" />
      </a>
      <a href={SocialData.twitterLink} target="_blank">
        <TwitterIcon fontSize="large" />
      </a>
      <a href={SocialData.instaLink} target="_blank">
        <InstagramIcon fontSize="large" />
      </a>
      <a href={SocialData.emailLink} target="_blank">
        <EmailIcon fontSize="large" />
      </a>
    </div>
  );
};
export default SocialLinks;
