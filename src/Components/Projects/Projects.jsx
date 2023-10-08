import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

import PawndaImg from "../../assets/pawnda.jpg";
import FitnessClub from "../../assets/fitnessClub.jpg";
import WeekendWatchImg from "../../assets/weekendWatch.jpg";
import ConstitutionImg from "../../assets/constitution.jpg";
import LancemeUpImg from "../../assets/lancemeup.jpg";
import AiPlanetImg from "../../assets/aiplanet.jpg";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={PawndaImg} alt="Pawnda" height={200} width={500} />
                </div>
              </div>
              <div className="project_information">
                <h2>Pawnda</h2>
                <p>
                  A social platform for pets. Post pictures, like and share your
                  pet's memories with people around you.
                </p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <SiNodedotjs />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://pawnda.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/pawnda-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-left">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={FitnessClub} alt="Fitness Club" />
                </div>
              </div>
              <div className="project_information">
                <h2>Fitness Club</h2>
                <p>
                  A fitness web application for you to get started on your
                  fitness journey.
                </p>
                <div>
                  <SiHtml5 />
                  <FaSass />
                  <BsBootstrap />
                </div>
                <div>
                  <a
                    href="https://fitness-club-pravin.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/pravinFitnessWebpage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={WeekendWatchImg} alt="Weekend Watch" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weekend Watch</h2>
                <p>
                  Weekend Watch is here to serve all your movie cravings. Find
                  all latest, popular and trending shows.
                </p>
                <div>
                  <FaReact />
                  <FaSass />
                </div>
                <div>
                  <a
                    href="https://weekend-watch-task.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/weekend-watch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-left">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={ConstitutionImg} alt="Constitution of Nepal" />
                </div>
              </div>
              <div className="project_information">
                <h2>Constitution of Nepal</h2>
                <p>
                  Always know your rights and duties as a citizen of Nepal with
                  this simple web app.
                </p>
                <div>
                  <FaReact />
                  <SiNextdotjs />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://constitution-project.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/constitution-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={LancemeUpImg} alt="LancemeUp Store" />
                </div>
              </div>
              <div className="project_information">
                <h2>Lanceme Up Store</h2>
                <p>Lanceme Up Store is a simple e-commerce clothing store.</p>
                <div>
                  <SiNextdotjs />
                  <SiMongodb />
                  <BsBootstrap />
                  <FaSass />
                </div>
                <div>
                  <a
                    href="https://lancemeuptask.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/lancemeuptask"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-left">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={AiPlanetImg} alt="AiPlanet Image" />
                </div>
              </div>
              <div className="project_information">
                <h2>AiPlanet</h2>
                <p>
                  AiPlanet is where you can apply for hackathon events and
                  submit your works for review.
                </p>
                <div>
                  <FaReact />
                  <FaSass />
                  <SiTypescript />
                </div>
                <div>
                  <a
                    href="https://aiplanet-task-pravin.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/itsmepravin/aiplanet-task"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
