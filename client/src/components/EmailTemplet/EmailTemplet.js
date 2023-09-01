import React from 'react';
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import Email from './Email';
import SignUpImage from '../signup/SignUpImage';




function EmailTemplet() {
  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
   
    <div>
    <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sign_info_content mt-5">
                                    <SignUpImage/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                            <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <Footer/>
    </div>
    </>
  )
}

export default EmailTemplet
