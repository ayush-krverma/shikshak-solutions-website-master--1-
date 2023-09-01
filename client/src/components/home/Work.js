import React from 'react';
import Sectitle from '../layout/Title/Sectitle';
import Slider from 'react-slick';
import labPic from "../../image/lab-pic-images/labPic.jpeg";
import labPic1 from "../../image/lab-pic-images/labPic1.jpg";
import labPic2 from "../../image/lab-pic-images/labPic2.jpeg";
import labPic2a from "../../image/lab-pic-images/labPic2.jpg";
import labPic3 from "../../image/lab-pic-images/labPic3.jpeg";
import labPic3a from "../../image/lab-pic-images/labPic3.jpg";
import labPic4 from "../../image/lab-pic-images/labPic4.jpeg";
import labPic4a from "../../image/lab-pic-images/labPic4.jpg";
import labPic5 from "../../image/lab-pic-images/labPic5.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
const labPicData = [
    {
        image: labPic,
        url: "#"
    },
    {
        image: labPic1,
        url: "#"
    },
    {
        image: labPic2,
        url: "#"
    },
    {
        image: labPic2a,
        url: "#"
    },{
        image: labPic3,
        url: "#"
    },{
        image: labPic3a,
        url: "#"
    },{
        image: labPic4,
        url: "#"
    },{
        image: labPic4a,
        url: "#"
    },{
        image: labPic5,
        url: "#"
    },
];

const Work =()=>{

    return(
        <section  className="app_screenshot_area sec_pad sec_background" id="showcase">
            <div  className="container custom_container p0">
                <Sectitle sClass="sec_title text-center mb_70" Title="Snippets from our work desk" tClass="t_color3 mb_20" TitleP="Join us for best ever learning experience"/>
                <div  className="app_screen_info">
                    <Slider  className="app_screenshot_slider" {...settings}>
                        { labPicData.map((slide, index) => {
                           return (
                                <div className="item" key={index}>
                                    <div className="screenshot_img">
                                        <a href={slide.url}  className="image-link"><img src={slide.image} alt=""/></a>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Work;
