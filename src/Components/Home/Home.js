import React, { useState } from "react";
import "../Home/Home.css";
import BankDashImage from "../../Image/BankDashImage.png";
import Calculator from "../../Image/Calculator.jpg";

const Home = () => {
  const [mouseOver, setOnMouseHover] = useState("BankDashImage");

  const ProjectList = [
    {
      ProjectName: "BankDash Project",
      ProjectImage: BankDashImage,
    },
    {
      ProjectName: "Calculator",
      ProjectImage: Calculator,
    },
  ];

  const onmouseover = (element, index) => {
    setOnMouseHover(element.ProjectImage);
  };

  return (
    <>
      <div className="HomePage">
        <div className="NavBar">Welcome To My Project</div>
      </div>
      <div className="main-container">
        <div className="Articles">
          <div className="Project-Image">
            <img
              style={{ width: "100%", height: "100%" }}
              src={mouseOver}
              alt="BankDashImage"
            />
          </div>
          <div className="Project-Article-container">
            <ul className="Project-Article">
              {ProjectList.map((el, i) => {
                return (
                  <li
                    className={
                      mouseOver === el.ProjectImage ? "colorstyle" : ""
                    }
                    key={i}
                    onMouseOver={() => onmouseover(el, i)}
                  >
                    {el.ProjectName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
