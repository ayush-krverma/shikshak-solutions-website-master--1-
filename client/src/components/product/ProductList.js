import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';

class ProductList extends Component{
    render(){
        let {item}= this.props;
        const openLinkPage = (url) => {
            this.props.navigate(url);
        }
        return(
            <a onClick={()=>openLinkPage(`/product/${item?.id}`)}>
            <section className={`product-slider-panel`}>
                <div className="pro-img-box">
                       <img src={item?.photo} alt="" /></div>
                    <div className="product-slide-textbox">
                        <h4>
                            <span className="pro-title">{item?.name}</span></h4>
                        <div className="product-slider-pricebox">
                            <div className="product-slider-price "><span
                                className="product-slider-price_inner"><span
                                className="product-rupees">₹ </span> {item?.price}
                                {/* - <span className="product-rupees">₹ </span> 1,999*/}
                            </span></div>
                        </div>
                    </div>
            </section>
            </a>
        )
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <ProductList {...props} navigate={navigate} />
}
export default WithNavigate;
