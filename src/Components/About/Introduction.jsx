import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";

import profilePic from "../../assets/myLogo.png";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="lg:mt-[5em] flex-column mt-[2em]" data-aos="fade-right">
          <h2 className="text-center mb-[1em] uppercase">
            About <span className="text-[var(--clr-primary)]">Me</span>
          </h2>
          <div className={"w-full flex mb-[4em] justify-center " + themename}>
            <div className="basis-[30%] mb-[3em]">
              <img
                src={profilePic}
                alt="Images"
                className="w-3/5 h-full border-[color:var(--clr-primary)] rounded-[50%] border-2 border-solid"
              />
            </div>
            <div className="w-full lg:w-[55%] text-center pt-5">
              <h4 className="text-[16px] lg:text-[1.1em] mt-[0.5em]">
                I come from the city of{" "}
                <span className="text-[var(--clr-primary)] leading-[1.4em] mt-0">
                  Kathmandu, Nepal
                </span>
                . My academic journey led me to graduate with a degree in BBA
                (Marketing) from the esteemed{" "}
                <span className="text-[var(--clr-primary)]  leading-[1.4em] mt-[1.4em]">
                  Kathmandu Institute of Science and Technology (KIST)
                </span>{" "}
                . Moreover, it was my relentless pursuit of knowledge and a
                deep-seated passion for technology that introduced me to the
                captivating realm of coding. Through self-driven learning and a
                comprehensive Web Development Online Course from{" "}
                <span className="text-[var(--clr-primary)]">
                  The Odin Project
                </span>
                , I embarked on a transformative journey into the world of web
                development. My curiosity, effort and the ability/desire to find
                the answer has helped me to always push forward.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
