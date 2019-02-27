import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: window.innerHeight+'px',
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
        <div style={{  height: window.innerHeight+ 'px'}} >
        <img src={slide_one} alt=""   />
        </div>
        </div>
        <div>
        <div style={{  height: window.innerHeight+ 'px'}} >
        <img src={slide_two} alt=""  />
        </div>
        </div>
        <div>
        <div style={{  height: window.innerHeight+ 'px'}} >
        <img src={slide_three} alt=""  />
        </div>
      </div>
      </Slider>
    </div>
  );
};

export default Carousal;
