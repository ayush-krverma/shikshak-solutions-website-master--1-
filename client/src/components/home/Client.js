import React from "react";
import client1 from "../../image/client1.png";
import client2 from "../../image/Client2.png";
import client3 from "../../image/client3.png";
import client4 from "../../image/client4.png";
import client5 from "../../image/client5.png";
import client6 from "../../image/client6.png";
import client7 from "../../image/client7.png";
import client8 from "../../image/client8.png";
const Client = () => {
    return (
        <>
            <section className="security_customers_logo_area">
                <div className="container">
                    <div className="hosting_title analytices_title text-center">
                        <h2 className="wow fadeInUp"><span>Our Some Happy Clients. </span></h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves.</p>
                    </div>
                    <div className="security_inner">
                        <img className="p_absoulte security_leaf_left wow fadeInDown" data-wow-delay="0.8s" src={require("../../img/home-security/leaf_clients2.png")} alt=""/>
                        <img className="p_absoulte security_leaf_right wow fadeInDown" data-wow-delay="0.8s" src={require("../../img/home-security/leaf_clients1.png")} alt=""/>
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp"><img src={client1} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.2s"><img src={client2} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.4s"><img src={client3} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.6s"><img src={client4} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp"><img src={client5} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.2s"><img src={client6} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.4s"><img src={client7} alt=""/></a>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-6">
                                <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.6s"><img src={client8} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        {/*<a href="/#" className="security_app_btn wow fadeInLeft"><i className="fab fa-windows"></i>Compatible with <span>Windows 10, 8, 7</span></a>
                        <a href="/#" className="security_app_btn wow fadeInRight"><i className="fab fa-apple"></i>Compatible with <span>Mac OS</span></a>*/}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Client;
