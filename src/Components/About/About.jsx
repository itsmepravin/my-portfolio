import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="flex-col mt-[3em] flex items-center">
        <h1 data-aos="fade-right">
          Hello, I am{" "}
          <span className="text-[color:var(--clr-primary)]">Pravin Singh</span>
        </h1>
        <Type />

        <p
          className="text-base max-w-[70%] text-center mt-[2.4em]"
          data-aos="fade-right"
        >
          I'm a passionate Full Stack Web Developer with a love for transforming
          ideas into functional and visually stunning digital experiences. My
          journey in web development began with a fascination for turning lines
          of code into interactive websites, and it's a journey I continue with
          unwavering enthusiasm. In the ever-evolving world of web development,
          I'm always learning and adapting. Staying at the forefront of industry
          trends and best practices is a commitment I take seriously.
        </p>
        <div className="flex items-center mt-[2.4em]">
          <a
            href="https://github.com/itsmepravin"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--clr-fg-alt)] relative pt-0 pb-[0.3em] px-0 hover:text-[color:var(--clr-primary)] before:content-[''] before:inline before:w-[0%] before:h-[0.2em] before:absolute before:bg-[color:var(--clr-primary)] before:transition-[width] before:duration-[0.2s] before:ease-[ease-in] before:bottom-0 hover:before:w-full focus:before:w-full mr-[0.8em]"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:pravinironside00@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="text-[color:var(--clr-fg-alt)] relative pt-0 pb-[0.3em] px-0 hover:text-[color:var(--clr-primary)] before:content-[''] before:inline before:w-[0%] before:h-[0.2em] before:absolute before:bg-[color:var(--clr-primary)] before:transition-[width] before:duration-[0.2s] before:ease-[ease-in] before:bottom-0 hover:before:w-full focus:before:w-full mr-[0.8em]"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pravin-b-singh-r-karwal-55b237201/"
            aria-label="linkedin"
            className="text-[color:var(--clr-fg-alt)] relative pt-0 pb-[0.3em] px-0 hover:text-[color:var(--clr-primary)] before:content-[''] before:inline before:w-[0%] before:h-[0.2em] before:absolute before:bg-[color:var(--clr-primary)] before:transition-[width] before:duration-[0.2s] before:ease-[ease-in] before:bottom-0 hover:before:w-full focus:before:w-full mr-[0.8em]"
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
