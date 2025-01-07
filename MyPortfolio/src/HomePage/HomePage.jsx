import "./HomePage.css";
import { gsap } from "gsap";
import carouselImage1 from "../Carousel-Images-Main/image1.jpg";
import carouselImage2 from "../Carousel-Images-Main/image2.jpg";
import carouselImage3 from "../Carousel-Images-Main/image3.jpg";
import carouselImage4 from "../Carousel-Images-Main/image4.jpg";
import ProgrammerImage from "../All-Images/programmer.jpg";
import { Carousel } from "antd";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export default function HomePage() {
  return (
    <div className="main">
      <div className="main-left">
        <Carousel autoplay className="carousel">
          <div className="CarouselBlock">
            <img className="CarouselImage" src={carouselImage1} alt="" />
          </div>
          <div className="CarouselBlock">
            <img className="CarouselImage" src={carouselImage2} alt="" />
          </div>
          <div className="CarouselBlock">
            <img className="CarouselImage" src={carouselImage3} alt="" />
          </div>
          <div className="CarouselBlock">
            <img className="CarouselImage" src={carouselImage4} alt="" />
          </div>
        </Carousel>

        <h1 className="main-left-text">
          Welcome to my digital playground! Explore the fusion of creativity and
          technology as I bring innovative web solutions to life. Let’s build
          something extraordinary together!
        </h1>
      </div>

      <div className="main-right">
        <h1 className="main-text">
          Hi, I’m Nikita, a passionate programmer with a love for solving
          complex problems and creating intuitive, efficient solutions. With
          experience in:{" "}
          <h1 className="GradientText">
            {" "}
            Html, Css, Js, React, Bootstrap, Tailwind.css
          </h1>{" "}
          and a focus on Web Development, I build projects that blend creativity
          and functionality.
        </h1>

        <Divider>
          <Chip label="About me" size="big" />
        </Divider>

        <img
          src={ProgrammerImage}
          alt=""
          style={{
            width: "600px",
            height: "560px",
            marginTop: "50px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}
