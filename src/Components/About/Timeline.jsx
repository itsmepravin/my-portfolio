import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 📅</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
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
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              LanceMe Up
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Frontend Intern
            </h4>
            <p data-aos="fade-right">
              - Maintained various projects, and re-builded vanilla websites with ReactJS.
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
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Lanceme Up
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
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
            className="vertical-timeline-element--work"
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
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Supreme IT Solutions
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Junior Frontend Developer (Probation)
            </h4>
            <p data-aos="fade-right">
              - Developed and maintained responsive web applications, ensuring
              optimal user experiences across various devices and browsers.
            </p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2023 - Nov 2023"}
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
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Supreme IT Solutions
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
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
