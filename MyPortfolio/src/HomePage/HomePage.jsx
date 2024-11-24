import "./HomePage.css";
import carouselImage1 from '../Carousel-Images-Main/image1.jpg'  
import carouselImage2 from '../Carousel-Images-Main/image2.jpg'   
import carouselImage3 from '../Carousel-Images-Main/image3.jpg'   
import carouselImage4 from '../Carousel-Images-Main/image4.jpg'    

import { Carousel } from "antd";



export default function HomePage() {
  return (
    <div className="main">
      <Carousel autoplay style={{ zIndex: "-1",}}>
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
    </div>
  );
}
