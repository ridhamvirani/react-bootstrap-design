import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    fade: true,
  };

  return (
    <Slider {...settings} className="main-banner">
      {

        props.sdata.map((img) => {
          return (
            <div className="item position-relative">
              <img src={img.image} alt="" />
              <div className="item-content position-absolute">
                <p className="sub-title">{img.subsame}</p>
                <h2 className="text-white title">{img.slidename}</h2>
                <p className="text-white mt-4 desc">{img.slidedesc}</p>
                <a href="#" className="view-btn mt-4">{img.slidebtn}</a>
                <div className="div-border">
                  <img src={img.borderimg} alt="" />
                </div>
              </div>
            </div>
          )
        })
      }
    </Slider>
  );
}