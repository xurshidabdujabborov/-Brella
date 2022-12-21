import React from 'react'
import { Container } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/logo 1.png"
import logo2 from "../../assets/logo 2.png"
import logo3 from "../../assets/logo 3.png"
import logo4 from "../../assets/logo 4.png"
import logo5 from "../../assets/logo 5.png"
import "./Carusel.css"

function Carusel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='Carusel'>
            <Container maxWidth="xl">
                <h2 className="title">Proudly backed by</h2>
                <Slider {...settings}>
                <div className="img">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo5} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo5} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="img">
                        <img src={logo2} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Carusel
