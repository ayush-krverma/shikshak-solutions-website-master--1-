import React from 'react';
import CustomNavbar from '../components/layout/CustomNavbar';
import SignUpForm from '../components/signup/SignUpForm';
import Footer from "../components/layout/Footer";
import SignUpImage from "../components/signup/SignUpImage";

const SignUp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sign_info_content">
                                    <SignUpImage/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <SignUpForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default SignUp;
