import React, {Component} from "react";
import {Link, useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/layout/CustomNavbar";

import Footer from "../components/layout/Footer";
import {useDispatch, useSelector} from "react-redux";
import ProductComming from "../components/product/ProductComming";
import Productimg from "../components/product/productimg";
import ProductRelated from "../components/product/ProductRelated";
import "../card.css";
import {useEffectOnce} from "../hooks/useEffectOnce";
import {actionToGetProductDataApiCall} from "../store/actions/productAction";



export default function CommingSoon() {
    let { id } = useParams();
    let dispatch = useDispatch();
    useEffectOnce(()=>{
        let condition = ` where products.id=${id}`;
        dispatch(actionToGetProductDataApiCall({'condition':condition}))
    })
    const productDetailsData = useSelector((state) => state.productReducer.productDetailsData);
    console.log(productDetailsData,"productDetailsData")
        return (
            <div className="body_wrapper">
                <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
               
                

<section className="sec_without_breadcrumb ">


 <div className="row g-0">
    <div className="nav mt-1">
    <a href="http://" className="hom">Home/</a>
    <a href="http://" className="pro">Products/</a>
    <a href="http://" className="cat">CATEGORY_NAME</a>
    </div>
    </div>




<br></br>
        <div className={"container custom_container p0"}>
            <div className={"row"}>
                <div className={"col-md-4"}>
                <Productimg productDetailsData={productDetailsData}/>
               
                </div>
                <div className={"col-md-8"}>
                    <ProductComming productDetailsData={productDetailsData}/>
                </div>
            </div>
          
        
       
        <ProductRelated/>
        </div>
    </section>

    
    <Footer/>
                </div>
            
            
        )
}


