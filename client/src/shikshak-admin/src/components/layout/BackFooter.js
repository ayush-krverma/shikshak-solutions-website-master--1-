import React , {Component} from 'react';
import Reveal from 'react-awesome-reveal';
import landline from '../../../../image/landline.svg';
import mobile from '../../../../image/mobile.svg';
import location from '../../../../image/location-on.svg';
//import globe from './../../image/globe.svg';
import envelope from '../../../../image/envelope.svg';
import logo from '../../../../image/logo.svg';
class BackFooter extends Component {
    render(){
         return(
            <footer className={`footer_area footer_area_four f_bg sec_background`}>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">

                                <div className="col-lg-3 col-md-6">
                                    <Reveal effect="fadeInUp" key="1">
                                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                        <a href="/" className="f-logo"><img src={logo} alt="Shikshak Solutions"/></a>
                                        <div className="widget-wrap">
                                            <p className="f_400 f_p f_size_15 mb-0 l_height34">We are an education based organization, enabling schools to come up as their innovation hubs where the community too can be benefited.</p>
                                        </div>
                                    </div>
                                    </Reveal>
                                </div>




                                <div className="col-lg-3 col-md-6">
                                    <Reveal effect="fadeInUp" duration={1200}>
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                        <h3 className="f-title f_600 t_color f_size_18 mb_40">School Solutions</h3>
                                        <ul className="list-unstyled f_list">
                                            <li key="1"><a href="/our-offering/lab">Labs</a></li>
                                            <li key="2"><a href="/our-offering/training">Training</a></li>
                                            <li key="3"><a href="/our-offering/workshop">Workshop</a></li>
                                            <li key="4"><a href="/our-offering/curriculum">Curriculum</a></li>
                                        </ul>
                                    </div>
                                    </Reveal>
                                </div>



                                <div className="col-lg-3 col-md-6">
                                    <Reveal effect="fadeInUp" duration={1400}>
                                    <div className="f_widget about-widget wow fadeInLeft" data-wow-delay="0.4s">
                                        <h3 className="f-title f_600 t_color f_size_18 mb_40">Products</h3>
                                        <ul className="list-unstyled f_list">
                                            <li key="1"><a href="/products/robotics">Robotics Kit</a></li>
                                            <li key="2"><a href="/products/iot">IOT Kit</a></li>
                                            <li key="3"><a href="/products/ai">AI Kit</a></li>
                                        </ul>
                                    </div>
                                    </Reveal>
                                </div>


                                <div className="col-lg-3 col-md-6">
                                    <Reveal effect="fadeInUp" duration={1800}>

                                    <div className="f_widget about-widget wow fadeInLeft" data-wow-delay="0.4s">
                                        <h3 className="f-title f_600 t_color f_size_18 mb_40">Contact Us</h3>
                                        <div className="widget-wrap">
                                            <p className="f_400 f_p f_size_15 mb-0 l_height34">
                                                <span><img src={location} alt={"location"}/></span>
                                                <a href="https://goo.gl/maps/BWRV6gBkEVrZRrkc6" className="f_400">861, sector 47, Gurugram</a></p>
                                            <p className="f_400 f_p f_size_15 mb-0 l_height34">
                                                <span><img src={envelope} alt={"envelope"}/></span>
                                                <a href="mailto:info@shikshaksolutions.com" className="f_400">info@shikshaksolutions.com</a></p>
                                            <p className="f_400 f_p f_size_15 mb-0 l_height34">
                                                <span><img src={mobile} className="f_400_mob" alt={"mobile"}/></span>
                                                <a href="tel:9289583244" className="f_400">9289583244</a></p>
                                            <p className="f_400 f_p f_size_15 mb-0 l_height34">
                                                <span><img src={landline} alt={"landline"}/></span>
                                                <a href="tel:0124-4289013" className="f_400">0124-4289013</a></p>
                                        </div>
                                    </div>
                                    </Reveal>
                                </div>

                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">©2018 Shikshak Solutions,  All rights reserved.</p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                <div className="f_social_icon_two text-center">
                                    <a href="https://www.facebook.com/profile.php?id=100092264165249" target={"_blank"} key={"1"}><i className={"ti-facebook"}></i></a>
                                    <a href="https://www.instagram.com/shikshak_solutions/"  target={"_blank"} key={"2"}><i className={"ti-instagram"}></i></a>
                                    <a href="https://wa.me/9289583244"  target={"_blank"} key={"3"}><i className={"fab fa-whatsapp"}></i></a>
                                    {/*<a href="/" key={"4"}><i className={"ti-pinterest"}></i></a>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ul className="list-unstyled f_menu text-right">
                                    <li><a href="/term-and-condition">Terms of Use</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/social-sites">Social Sites</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default BackFooter;
