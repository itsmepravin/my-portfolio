import "./Works.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

import bakingFlowerImg from "../../assets/bakingFlower.jpg";
import myFashionNepalImg from "../../assets/myFashionNepal.jpg";
import tanabMuktiHealingImg from "../../assets/tanabMuktiHealing.jpg";
import sonamGearImg from "../../assets/sonamGear.jpg";
import decorationsOfNepalImg from "../../assets/decorationsOfNepal.jpg";

export const Works = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Works</h2>
        <div className="allWorks">
          <div className="works_container" data-aos="fade-right">
            <div className="work">
              <div className="work_videocontainer">
                <div>
                  <img
                    src={sonamGearImg}
                    alt="Sonam Gear Image"
                    height={200}
                    width={500}
                  />
                </div>
              </div>
              <div className="work_information">
                <h2>Sonam Gear</h2>
                <p>
                  Not just a brand, Sonam Gear is a mission that helps, enable
                  and support people to be the fittest, contented and most
                  confident version of themselves.
                </p>
                <div>{/* Icons Here */}</div>
                <div className="work_icons_container">
                  <a
                    href="https://sonamgear.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <BsArrowUpRightSquareFill size="30px" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="works_container" data-aos="fade-left">
            <div className="work">
              <div className="work_videocontainer">
                <div>
                  <img
                    src={bakingFlowerImg}
                    alt="Baking Flower Image"
                    height={200}
                    width={500}
                  />
                </div>
              </div>
              <div className="work_information">
                <h2>Baking Flower</h2>
                <p>
                  Baking Flower is an 8 year old franchise, specialising in
                  wonderful bakery items, especially cakes.
                </p>
                <div>{/* Icons Here */}</div>
                <div className="work_icons_container">
                  <a
                    href="https://bakingflower.com.np/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <BsArrowUpRightSquareFill size="30px" />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/bakingflower"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <FaFacebookF size="30px" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/baking.flower/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <FaInstagram size="30px" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="works_container" data-aos="fade-right">
            <div className="work">
              <div className="work_videocontainer">
                <div>
                  <img
                    src={myFashionNepalImg}
                    alt="My Fashion Nepal"
                    height={200}
                    width={500}
                  />
                </div>
              </div>
              <div className="work_information">
                <h2>My Fashion Nepal</h2>
                <p>
                  My Fashion Nepal is an online clothing brand store, with focus
                  mainly on footwears.
                </p>
                <div>{/* Icons Here */}</div>
                <div className="work_icons_container">
                  <a
                    href="https://myfashionnepal.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <BsArrowUpRightSquareFill size="30px" />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/fashionnepal90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <FaFacebookF size="30px" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/fashion_nepal_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <FaInstagram size="30px" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="works_container" data-aos="fade-left">
            <div className="work">
              <div className="work_videocontainer">
                <div>
                  <img
                    src={tanabMuktiHealingImg}
                    alt="Hypno Clinics"
                    height={200}
                    width={500}
                  />
                </div>
              </div>
              <div className="work_information">
                <h2>Hypno Clinics</h2>
                <p>
                  Hypno Clinics is a clinical health agency that offers a
                  diverse range of health services, including individual
                  counseling, group therapy, family counseling, and specialized
                  programs addressing various health concerns.
                </p>
                <div>{/* Icons Here */}</div>
                <div className="work_icons_container">
                  <a
                    href="https://tanabmuktihealing.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <BsArrowUpRightSquareFill size="30px" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="works_container" data-aos="fade-left">
            <div className="work">
              <div className="work_videocontainer">
                <div>
                  <img
                    src={decorationsOfNepalImg}
                    alt="Decorations of Nepal"
                    height={200}
                    width={500}
                  />
                </div>
              </div>
              <div className="work_information">
                <h2>Decorations of Nepal</h2>
                <p>
                  Decorations of Nepal excels in wedding and event planning.
                  They have been providing first-class event management services
                  for the last 4 years.
                </p>
                <div>{/* Icons Here */}</div>
                <div className="work_icons_container">
                  <a
                    href="https://decorations-of-nepal.business.site/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ borderRadius: "50%" }} type="button">
                      <BsArrowUpRightSquareFill size="30px" />
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
