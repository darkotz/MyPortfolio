import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HomePage.css";
import carouselImage1 from "../Carousel-Images-Main/image1.jpg";
import carouselImage2 from "../Carousel-Images-Main/image2.jpg";
import carouselImage3 from "../Carousel-Images-Main/image3.jpg";
import carouselImage4 from "../Carousel-Images-Main/image4.jpg";
import ProgrammerImage from "../All-Images/programmer.jpg";
import { Carousel } from "antd";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    /*gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true,
      },
      opacity: 0,
      x: -100,
      duration: 1,

    });
    

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -100,
      duration: 1,
    });*/
    console.log(textRef.current);
    console.log(imageRef.current);
    gsap.to(textRef.current, { opacity: 1, x: 0, duration: 1 });
    gsap.to(imageRef.current, { opacity: 1, x: 0, duration: 1 });
  }, []);

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

        <h1 className="main-left-text" ref={textRef}>
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
          <div className="GradientText">
            {" "}
            Html, Css, Js, React, Bootstrap, Tailwind.css
          </div>{" "}
          and a focus on Web Development, I build projects that blend creativity
          and functionality.
        </h1>
        <div className="devider">
          <Divider>
            <Chip label="About me" size="big" />
          </Divider>
        </div>

        <img
          src={ProgrammerImage}
          alt=""
          className="image-right"
          style={{
            width: "600px",
            height: "560px",
            marginTop: "50px",
            borderRadius: "10px",
            opacity: "0",
            transform: "translateX(-100px)",
          }}
          ref={imageRef}
        />
      </div>
    </div>
  );
}
