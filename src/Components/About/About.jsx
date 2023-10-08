import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Pravin Singh</span>
        </h1>
        <Type />

        <p className="about__desc" data-aos="fade-right">
          I'm a passionate Full Stack Web Developer with a love for transforming
          ideas into functional and visually stunning digital experiences. My
          journey in web development began with a fascination for turning lines
          of code into interactive websites, and it's a journey I continue with
          unwavering enthusiasm. In the ever-evolving world of web development,
          I'm always learning and adapting. Staying at the forefront of industry
          trends and best practices is a commitment I take seriously.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/itsmepravin?tab=repositories"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:dangerpravin20@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pravin-singh-karwal-55b237201"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
