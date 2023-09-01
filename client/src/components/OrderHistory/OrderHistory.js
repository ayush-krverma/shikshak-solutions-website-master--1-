import React from 'react';
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import Breadcrumb from '../layout/Breadcrumb';
import OrderHistoryTable from './OrderHistoryTable';

function OrderHistory() {
  return (
    <>
    <div className="body_wrapper">
                <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Order History" Pdescription="Please place your order via email(info@shikshaksolutions.com)/phone(8427023406). ecommerce portal is comming soon."/>
                
        {/* <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/> */}
             </div>  
    <div>
    <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sign_info_content">
                                    <OrderHistoryTable/>
                                </div>
                            </div>
                            {/* <div className="col-lg-7">
                                <SignUpForm/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


    <Footer/>
    </div>
    </>

  )
}

export default OrderHistory
