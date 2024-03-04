import React, { useState } from "react";
import "../Home/Home.css";
import BankDashImage from "../../Image/BankDashImage.png";
import Calculator from "../../Image/Calculator.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const ProjectList = [
    {
      ProjectName: "BankDash Project",
      ProjectImage: BankDashImage,
      route: "/bankdash",
    },
    {
      ProjectName: "Calculator",
      ProjectImage: Calculator,
      route: "/calculator",
    },
  ];

  const [mouseOver, setOnMouseHover] = useState(ProjectList[0].ProjectImage);

  const onmouseover = (element, index) => {
    setOnMouseHover(element.ProjectImage);
  };

  const HandleClick = (element, index) => {
    navigate(element.route);
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
                    onClick={() => HandleClick(el, i)}
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
