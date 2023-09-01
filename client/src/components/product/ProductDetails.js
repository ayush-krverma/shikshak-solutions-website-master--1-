import React, {Component} from 'react';
import withRouter from "../../hooks/withRouter";

class ProductDetails extends Component{
    render(){

        return(
            <section className="product_details_list_area sec_pad">
                <div className="container">
            <div className="product-details-box ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-inner pd-comppro-imgbox">
                                    <div className="carousel-item active">
                                        <img
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg"
                                            className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg"
                                            className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg"
                                            className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg"
                                            className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg"
                                            className="d-block w-100" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                <div className="carousel-indicators image-gallery-thumbnails-wrapper">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                            className="image-gallery-thumbnail active" aria-current="true" aria-label="Slide 1">
                                        <div className="image-gallery-thumbnail-inner"><img
                                            className="image-gallery-thumbnail-image"
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg" />
                                        </div>
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                            aria-label="Slide 2" className="image-gallery-thumbnail">
                                        <div className="image-gallery-thumbnail-inner"><img
                                            className="image-gallery-thumbnail-image"
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg" />
                                        </div>
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                            aria-label="Slide 3" className="image-gallery-thumbnail">
                                        <div className="image-gallery-thumbnail-inner"><img
                                            className="image-gallery-thumbnail-image"
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg" />
                                        </div>
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                            aria-label="Slide 4" className="image-gallery-thumbnail">
                                        <div className="image-gallery-thumbnail-inner"><img
                                            className="image-gallery-thumbnail-image"
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg" />
                                        </div>
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                            aria-label="Slide 5" className="image-gallery-thumbnail">
                                        <div className="image-gallery-thumbnail-inner"><img
                                            className="image-gallery-thumbnail-image"
                                            src="https://images.jdmagicbox.com/quickquotes/images_main/kit4curious-educational-toys-06-04-2021-021-226710602-8teln.jpg" />
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product-details-textbox">

                            <h1 className="dcomppro_title">Kit4Curious 6 Wheel Drive Curious Chassis<span
                                className="dcomp_share_icon jdmart_icon mr-5 ml-15"></span></h1>

                            <div className="pd-slider-pricebox mt-25">
                                <div className="pd-slider-price "><span className="pd-slider-price_inner"><span
                                    className="pd-rupees">₹ </span> 1,939 - <span className="pd-rupees">₹ </span> 1,999 </span>
                                </div>
                            </div>
                            <div className="specsTbl discr bigdiscr ss_specification_wrapper">
                                <div className="specsTbl specification_row">
                                    <div className="prodDetlleft">Brand:</div>
                                    <div className="prodDetlRight">Kit4Curious</div>
                                </div>
                                <div className="specsTbl specification_row">
                                    <div className="prodDetlleft">Max Pump Speed:</div>
                                    <div className="prodDetlRight">100 RPM</div>
                                </div>
                                <div className="specsTbl specification_row">
                                    <div className="prodDetlleft">Wheel Width:</div>
                                    <div className="prodDetlRight">2.5cm Dia</div>
                                </div>
                                <div className="specsTbl specification_row">
                                    <div className="prodDetlleft">Platform:</div>
                                    <div className="prodDetlRight ">20.0 X 14.2cm</div>
                                </div>
                            </div>
                            <button className="btn pd_contact_button">Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pd_company_container ">
                <ul className="nav nav-tabs pd_company_tabslist" role="tablist">
                    <li className="nav-item  pdcompany_tab tabdetail">
                        <a href="#info" role="tab" data-toggle="tab" className="nav-link active tab_anchor"
                           aria-selected="true">Product Description</a>
                    </li>


                </ul>
                <div className="pd_wrapper pdcompany_tabs_content ">
                    <div className="pd_wrapper pd_company_tabpannel animated fadeIn">
                        <div className="pd_company_pannel_inner pdcompany_prodetails"><h4
                            className="pd_company_tadhead Specificationdttab">Specification</h4>
                            <div className="pd_company_specsbox">
                                <div className="specsbox_row ">
                                    <div className="specsbox_left">Brand</div>
                                    <div className="specsbox_right">Kit4Curious</div>
                                </div>
                                <div className="specsbox_row ">
                                    <div className="specsbox_left">Wheel Diameter</div>
                                    <div className="specsbox_right">6.5cm Dia</div>
                                </div>
                                <div className="specsbox_row">
                                    <div className="specsbox_left">Kit Content</div>
                                    <div className="specsbox_right">1 Acrylic chassis,8 Acrylic Pieces for motor support,6 B.O.
                                        Motors,6 B.O. Wheel,Acrylic parts for Ultrasonic Holder and servo holder,Screw, Clamp,
                                        Spacer and nut-bolt pack
                                    </div>
                                </div>
                                <div className="specsbox_row">
                                    <div className="specsbox_left">Wheel Width</div>
                                    <div className="specsbox_right">2.5cm Dia</div>
                                </div>
                                <div className="specsbox_row">
                                    <div className="specsbox_left">Generic Name</div>
                                    <div className="specsbox_right">Educational Robotic Kit</div>
                                </div>
                                <div className="specsbox_row">
                                    <div className="specsbox_left">Max Pump Speed</div>
                                    <div className="specsbox_right">100 RPM</div>
                                </div>
                                <div className="specsbox_row ">
                                    <div className="specsbox_left">Motor Duty</div>
                                    <div className="specsbox_right">Straight BO Motor (3-9v DC)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            </section>
        )
    }
}

    export default withRouter(ProductDetails);
