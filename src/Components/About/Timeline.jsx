import { useContext, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = useContext(ThemeContext);
  const [lineColor, setLineColor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themename === "dark") {
      setLineColor("#fcfcfc");
    } else {
      setLineColor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="w-full mt-[1em] sm:mt-[4em] lg:mt-[5em]">
        <h2 className="text-center mb-[1em] uppercase" data-aos="fade-right">
          My{" "}
          <span className="text-[color:var(--clr-primary)]">Timeline 📅</span>
        </h2>
        <VerticalTimeline lineColor={lineColor}>
          <VerticalTimelineElement
            date={"Aug 2022 - Nov 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="text-[1.1em] text-[color:var(--clr-primary)]"
              data-aos="fade-right"
            >
              LanceMe Up
            </h3>
            <h4 className="text-[0.9em] mt-[0.5em]" data-aos="fade-right">
              Frontend Intern
            </h4>
            <p data-aos="fade-right">
              - Maintained various projects, and re-builded vanilla websites
              with ReactJS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2022 - Feb 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="text-[1.1em] text-[color:var(--clr-primary)]"
              data-aos="fade-left"
            >
              Lanceme Up
            </h3>
            <h4 className="text-[0.9em] mt-[0.5em]" data-aos="fade-left">
              Junior Frontend Developer
            </h4>
            <p data-aos="fade-left">
              - Integrated Google Maps Platform Places API and Google Maps
              Geolocation API for their food delivery web application based on
              Luxembourg.
            </p>
            <p data-aos="fade-left">
              - Integrated one-on-one chat functionality between customer and
              vendor and notification functionality through the use of
              Socket.io.
            </p>
            <p data-aos="fade-left">
              - Was responsible for mobile-responsiveness of the overall
              application using modular SASS, and made reusable components.
            </p>
            <p data-aos="fade-left">
              - Learned new technologies like ReduxJS Toolkit, React Tanstack
              Query, React Draft WYSIWYG Editor, Recharts ,etc.
            </p>
            <p data-aos="fade-left">
              - Maintained over 200 components, implemented authorization, fixed
              bugs and worked alongside a team of 15+ members.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"April 2023 - June 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="text-[1.1em] text-[color:var(--clr-primary)]"
              data-aos="fade-right"
            >
              Supreme IT Solutions
            </h3>
            <h4 className="text-[0.9em] mt-[0.5em]" data-aos="fade-right">
              Junior Frontend Developer (Probation)
            </h4>
            <p data-aos="fade-right">
              - Developed and maintained responsive web applications, ensuring
              optimal user experiences across various devices and browsers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2023 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="text-[1.1em] text-[color:var(--clr-primary)]"
              data-aos="fade-left"
            >
              IMS Software Pvt. Ltd.
            </h3>
            <h4 className="text-[0.9em] mt-[0.5em]" data-aos="fade-left">
              Junior Frontend Developer
            </h4>
            <p data-aos="fade-right">
              - Collaborated closely with the design team to translate mockups
              and wireframes into pixel-perfect, interactive web pages.
            </p>
            <p data-aos="fade-right">
              - Implemented performance optimizations, resulting in a 30%
              reduction in page load times.
            </p>
            <p data-aos="fade-right">
              - Conducted code reviews and provided constructive feedback to
              enhance code quality and team proficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
