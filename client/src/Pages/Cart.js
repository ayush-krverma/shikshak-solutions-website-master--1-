import React from 'react'
import Footer from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

import CustomNavbar from "../components/layout/CustomNavbar";
import CartTable from '../components/Cart/CartTable';
import Cartorder from '../components/Cart/Cartorder';
import {useEffectOnce} from "../hooks/useEffectOnce";
import {getUserCartDetails} from "../store/actions/shopAction";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../components/services/auth.service";
//import {cartReducer} from "../store/reducers/shopReducer";

export default function Cart(){

    const dispatch  = useDispatch();
    useEffectOnce(()=>{
        const userInfo =  localStorage.getItem('user');
        let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
        dispatch(getUserCartDetails(userRawData?.user?.id));
    });

    const userCartData = useSelector((state) => state.cartReducer.userCartData)


  return (
    <div className="body_wrapper">
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
    
    <section className="sec_without_breadcrumb ">
        <div className={"container custom_container p0"}>
            {(userCartData && userCartData.length > 0) ?
                <>

                <div className={"row"}>


                <div className={"col-md-12"}>

                <CartTable/>
                </div>
                </div>
                <div className={"row"}>
            <div className={"col-md-6"}>


                <div className={"col-md-6"}>
                    <button type="button" className="btn btn-outline-primary">Apply coupon</button>
                    <button type="button" className="btn btn-outline-primary">Apply discount</button>
                </div>

                <div className="col-12 mt-5">
                    <a href='/Checkout'><button type="submit" className="btn btn-primary">Check Out</button></a>
                </div>
            </div>
            <div className={"col-md-6"}>
                <Cartorder/>
            </div>
        </div> </>
                :

                <div className={"row"}>
                    <h4 className={"mb-5 container fw-bold mt-5"}>No item in cart</h4>
                </div>

            }
            
        </div>
    </section>
    <Footer/>
    </div>
  )



}






