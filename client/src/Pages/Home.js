import React from 'react';
import Footer from '../components/layout/Footer';
import CustomNavbar from "../components/layout/CustomNavbar";
import BannerSlider from "../components/slider/BannerSlider";
/*import VisionMission from "../components/about/VisionMission";*/
import VisionMissionValues from "../components/about/VisionMissionValues";
import Client from "../components/home/Client";
import Product from "../components/home/Product";
import Service from "../components/home/Service";
import Work from "../components/home/Work";
import Contact from "../components/contact/Contact";
import ContactHome from "../components/contact/ContactHome";
import AppTestimonial from "../components/testimonial/AppTestimonial";
export const Home = () => (
<div className="body_wrapper">
    <CustomNavbar  mClass="menu_four hosting_menu"
                   nClass="w_menu m-auto"
                   slogo="sticky_logo"
                   hbtnClass="event_btn"/>
    <BannerSlider />
    <Service />
   {/* <VisionMission />*/}
    <VisionMissionValues heading={true} mClass={"sec_background"}/>
    <Product />
    <Work />
    <AppTestimonial />
    <ContactHome />
    <Client />
    <Footer/>
</div>
);
