import React from 'react'
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import BillingTable from './BillingTable';

function Billing() {
  return (
    <>
     <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
   

     <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sign_info_content">
                                    <BillingTable/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                {/* <SignUpForm/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <div>
      

    <Footer/>
    </div>
    </>
  )
}

export default Billing
