import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../../assets/banner-slide.css";
import banner1 from '../../image/banner1.png';
import banner2 from '../../image/banner4.jpg';
import banner3 from '../../image/banner3.png';

const sliderData = [
    {
        image: banner1,
        heading: "Our Offering",
        desc: "Smart teaching happens in smart classroom.",
        url: "/our-offering"
    },
    {
        image: banner2,
        heading: "AI Enabled Teacher App",
        desc: "Find your solutions with AI Enabled App.",
        url: "https://app.shikshaksolutions.com"
    },
    {
        image: banner3,
        heading: "SS Exclusive Kit",
        desc: "SS Basic Robotics Kit,SS Intermediate Robotics Kit,SS Advanced Robotics Kit, SS IOT Intermediate Kit,SS IOT Advanced Kit, SS AI Kit",
        url: "/products"
    },
];

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {/* <div class="owl-dots">
                <button className="owl-dot active"><span></span></button>
                <button className="owl-dot"><span></span></button>
                <button className="owl-dot"><span></span></button>
            </div> */}
            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                        {(
                            <div className="owl_item slider_bg_ctrl" style={{ backgroundImage: "url(" + slide.image + ")" }}>
                                <div className="container  align-items-stretch">
                                    <div className="row no-gutters slider-text align-items-center justify-content-start">
                                        <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
                                            <h1 className="mb-4">{slide.heading}</h1>
                                            <p dangerouslySetInnerHTML={{ __html: slide.desc }}></p>
                                            <div className="mbr-section-btn">
                                                <a href={"/contact"} className={"btn_get btn_hover btn_fill"}>Enquire Now</a>
                                                <a href={slide.url} className={"btn_get btn_hover btn_ghost"}>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        )}
                    </div>
                );
            })}

        </div >
    );
};

export default BannerSlider;
