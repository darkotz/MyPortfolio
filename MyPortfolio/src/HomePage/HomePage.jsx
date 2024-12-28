import "./HomePage.css";
import carouselImage1 from '../Carousel-Images-Main/image1.jpg'  
import carouselImage2 from '../Carousel-Images-Main/image2.jpg'   
import carouselImage3 from '../Carousel-Images-Main/image3.jpg'   
import carouselImage4 from '../Carousel-Images-Main/image4.jpg'    
import { Carousel } from "antd";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function HomePage() {
  return (
    <div className="main">
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
      <div className="main-right">
      <h1 className="main-text">
      Hi, I’m Nikita, a passionate programmer with a love for solving complex problems and creating intuitive, efficient solutions. With experience in: <div ><a href="" className="GradientText">Html,</a> <a href="" className="GradientText">Css,</a> <a href="" className="GradientText">Js,</a> <a href="" className="GradientText">React,</a> <a href="" className="GradientText">Bootstrap,</a> <a href="" className="GradientText">Tailwind.css</a></div> and a focus on [Web Development], I build projects that blend creativity and functionality.


      </h1>
      <Divider >
        <Chip label="About me" size="big" />
      </Divider>
      </div>
    </div>
  );
}
