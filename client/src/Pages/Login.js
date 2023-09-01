import React from 'react'
import CustomNavbar from "../components/layout/CustomNavbar";
import Footer from "../components/layout/Footer";
import LoginForm from '../components/Login/LoginForm';
import SignUpImage from "../components/signup/SignUpImage";




function Login() {
  return (
    <>
        <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
        <section className="sign_in_area bg_color sec_without_breadcrumb">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <SignUpImage/>
                        </div>
                        <div className={"col-md-7"}>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Login
