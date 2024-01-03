import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/me.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            {/* <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div> */}
            <div className="introduction_datacontainer">
              <h4>
                I come from the
                city of{" "}
                <span className="different">Kathmandu, Nepal</span>. My academic
                journey led me to graduate with a degree in BBA (Marketing) from
                the esteemed{" "}
                <span className="different">
                Kathmandu Institute of Science and Technology (KIST)
                </span>{" "}
                . Moreover, it was my relentless pursuit of knowledge and a
                deep-seated passion for technology that introduced me to the
                captivating realm of coding. Through self-driven learning and a
                comprehensive Web Development Online Course from{" "}
                <span className="different">The Odin Project</span>, I embarked
                on a transformative journey into the world of web development.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
