import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
export default function Partner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        slickPrev: false,
    };
    return (
        <div className=" bg-black spacer">
            <Container>
                <Slider {...settings} className="partner-slider">
                    <div className="partner pointer">
                        <img src={require('../Img/asset 72.png')} alt="" />
                    </div>
                    <div className="partner">
                        <img src={require('../Img/asset 74.png')} alt="" />
                    </div>
                    <div className="partner">
                        <img src={require('../Img/asset 76.png')} alt="" />
                    </div>
                    <div className="partner">
                        <img src={require('../Img/asset 78.png')} alt="" />
                    </div>
                    <div className="partner">
                        <img src={require('../Img/asset 80.png')} alt="" />
                    </div>
                    <div className="partner">
                        <img src={require('../Img/asset 82.png')} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>
    );
}