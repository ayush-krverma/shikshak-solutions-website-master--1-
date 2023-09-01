import React, { useEffect, useState } from 'react'
import Footer from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import CustomNavbar from "../components/layout/CustomNavbar";
import CheckoutForm from '../components/CheckOut/CheckoutForm';
import Checkouttable from '../components/CheckOut/Checkouttable';


function Checkout() {



  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
      
    <section className="sec_without_breadcrumb ">
   
        <div className={"container custom_container p0"}>
            <div className={"row"}>
                <div className={"col-md-4"}>
                    <CheckoutForm/>
                </div>
                <div className={"col-md-8"}>
                    <Checkouttable/>
                    <div className="col-12 mt-5">
   <a href='#'><button type="submit" className="btn btn-primary">Continue to payment</button></a> 
  </div> 
                </div>
               
            </div>
           
        </div>
    </section>
    





    <br></br><br></br>
    <Footer/>
    </>
  )
}

export default Checkout


    
