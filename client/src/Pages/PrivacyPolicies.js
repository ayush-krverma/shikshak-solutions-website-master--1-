import React, {Component} from "react";
import CustomNavbar from "../components/layout/CustomNavbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import PrivacyPolicy from "../components/home/PrivacyPolicy";

class PrivacyPolicies extends Component {
    render() {
        return (
            <div className="body_wrapper">
                <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Privacy Policy" Pdescription=""/>
                <PrivacyPolicy />
                <Footer/>
            </div>
        )
    }
}
export default PrivacyPolicies;
