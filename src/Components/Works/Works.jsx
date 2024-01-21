import "./Works.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

import bakingFlowerImg from "../../assets/bakingFlower.jpg";

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
                <div className="work_icons_container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
