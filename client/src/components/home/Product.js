import React, {Component} from 'react';
import ProductItems from './ProductItems';
import Reveal from 'react-awesome-reveal';
import productImage from '../../image/product.png';
import ai from '../../image/ai.png';
import robot from '../../image/robot.png';
import iot from '../../image/iot.png';
import watertech from '../../image/watertech.png';
class Product extends Component {
    render(){
        return(
            <section className="stratup_service_area sec_pad bg_color">
                <div className="container">
                    <div className="sec_title wow fadeInUp" data-wow-delay="0.4s">
                        <Reveal effect="fadeInUp"><h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Our Exclusive Product</h2></Reveal>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="stratup_service_img">
                                <div className="shape"></div>
                                {/*<img className="laptop_img" src={require('../../img/new/laptop.png')} alt=""/>*/}
                                <img className="laptop_img" src={productImage} alt="" style={{width: "100%"}}/>
                                {/*<img className="mobile_img" src={aiot} alt="" />*/}
                            </div>
                        </div>

                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="stratup_service_info">
                                <ProductItems SUrl={robot} text="Robotics"  description="SS Basic Robotics Kit, SS Intermediate Robotics Kit, SS Advanced Robotics Kit"/>
                                <ProductItems iconClass="icon_two" SUrl={iot} text="Internet of things" description="SS Intermediate IOT Kit, SS Advanced IOT Kit "/>
                                <ProductItems iconClass="icon_three" SUrl={ai} text="Artificial Intelligence" description="SS AI Kit"/>
                                <ProductItems iconClass="icon_four" SUrl={watertech} text="Watertech" description="SS Watertech Kit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Product;
