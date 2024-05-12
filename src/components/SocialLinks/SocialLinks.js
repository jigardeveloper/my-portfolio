import React from "react";
import SocialData from "../../Data/SocialData";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";

const SocialLinks = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  
  const socialIcons = [
    { icon: <GitHubIcon fontSize="large" />, link: SocialData.githubLink },
    { icon: <LinkedInIcon fontSize="large" />, link: SocialData.linkedInLink },
    { icon: <TwitterIcon fontSize="large" />, link: SocialData.twitterLink },
    { icon: <InstagramIcon fontSize="large" />, link: SocialData.instaLink },
    { icon: <EmailIcon fontSize="large" />, link: SocialData.emailLink},
  ];

  return (
    <div className={`${props.className}`} style={{ color: nonThemeColor }}>
      {socialIcons.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
};
export default SocialLinks;