import React, {Component} from "react";
import CustomNavbar from "../components/layout/CustomNavbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import Product from "../components/product/Product";

class Products extends Component {
    render() {
        return (
            <div className="body_wrapper">
                <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our Products" Pdescription="Please place your order via email(info@shikshaksolutions.com)/phone(8427023406). ecommerce portal is comming soon."/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}
export default Products;
