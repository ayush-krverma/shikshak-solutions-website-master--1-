import React from 'react'
import CustomNavbar from "../components/layout/CustomNavbar";
import Footer from "../components/layout/Footer";
import ForgotpasswordForm from '../components/Forgotpassword/ForgotpasswordForm';
import SignUpImage from "../components/signup/SignUpImage";




function Forgotpassword() {
  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
 
    <div>
        <br></br><br></br>

        <section className="sec_without_breadcrumb ">
        <div className={"container custom_container p0"}>
            <div className={"row"}>
                <div className={"col-md-4"}>
                    <SignUpImage/>
                </div>
                <div className={"col-md-8"}>
                    <ForgotpasswordForm/>
                </div>
            </div>
        </div>
    </section>





        </div>
    <Footer/>
    </>
  )
}

export default Forgotpassword
   


   
