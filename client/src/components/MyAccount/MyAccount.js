import React from 'react';
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import MyAccountProfile from './MyAccountProfile';
import MyAccountInfo from './MyAccountInfo';

function MyAccount() {
  return (
    <>
        <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
        <section className="sec_without_breadcrumb ">
        <div className={"container custom_container p0"}>
         <h4 className='mb-5 container fw-bold mt-5'>My Account Details</h4>
            <div className={"row"}>
                <div className={"col-md-4"}>
                    <MyAccountProfile/>
                </div>
                <div className={"col-md-8"}>
                    <MyAccountInfo/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    
    </>

  )
}

export default MyAccount
