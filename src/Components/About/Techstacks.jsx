import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="mt-[4em] lg:mt-[5em]" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="w-full sm:h-[120vh] text-center bg-[color:var(--clr-bg)] h-[50vh]">
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiHtml5 className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">HTML5</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <DiCss3 className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">CSS3</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiJavascript className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">JavaScript</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiTypescript className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">TypeScript</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <FaReact className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">ReactJS</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiNextdotjs className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">NextJS</h5>
          </div>

          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiTailwindcss className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">TailwindCSS</h5>
          </div>
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <DiMongodb className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">MongoDB</h5>
          </div>
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiExpress className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">Express</h5>
          </div>
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <SiMaterialui className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">MUI</h5>
          </div>
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <BsBootstrap className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">BootStrap</h5>
          </div>
          <div className="w-2/5 h-[18vh] mr-[5%] mb-[2%] max-h-[140px] shadow-[var(--shadow)] z-[1] float-left flex flex-col justify-center items-center transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[color:var(--clr-primary)] m-[2.5%] rounded-[20px] border-2 border-solid hover:bg-[color:var(--clr-bg)] hover:overflow-hidden hover:shadow-[rgba(0,0,0,0.36)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] hover:border hover:border-[color:var(--clr-primary)] hover:border-solid hover:scale-[1.08]">
            <VscGithub className="text-[8vh] text-[color:var(--clr-primary)]" />
            <h5 className="relative bg-transparent top-2">Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
