import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML5</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS3</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>
          <div>
            <FaReact />
            <h5>ReactJS</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>NextJS</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>TailwindCSS</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>NodeJS</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>MUI</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>BootStrap</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
